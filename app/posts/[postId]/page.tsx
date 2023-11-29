import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Related from "@/app/components/Related";
import AfterPage from "@/app/components/AfterPage";
import "../../CSS/ConstantCSS";
export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
const {meta} = post;
  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.tags],
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  console.log("tags=***>>>>>", meta.tags);
  const myTags = post.meta.tags;
  const TagsPosts: Meta[] = [];
  const posts = await getPostsMeta();
  if (!posts) {
    return <h1>there are no Posts</h1>;
  }

  myTags.forEach((tag) => {
    console.log(tag);
    const tagPosts = posts.filter((post) => post.tags.includes(tag));
    if (tagPosts) {
      tagPosts.forEach((tagPost) => {
        TagsPosts.push(tagPost);
      });
    }
  });

  return (
    <>
 
      <div className="mainPostContainer pt-[1rem] block px-3  prose prose-2xl mx-auto">
        <div>
          <h2 className="mt-4 mb-0 text-[1.5rem] dark:text-[ghostwhite] text-gray-900 sm:text-[2rem] lg:text-[3rem] ">
            {meta.title}
          </h2>
          <p style={{ fontSize: "16px" }} className="mt-0 text-sm">
            {pubDate} <span className="text-underline ml-1" >By Shivam.</span>
          </p>
        </div>
        <article className="myPostContentInArticle text-black dark:text-white ">
          {content}
        </article>
      </div>
      <div>
        <Related props={{ MyPostsByTags: TagsPosts }} />
      </div>
      <div className="afterPage">
     <AfterPage></AfterPage>

      </div>
    </>
  );
}

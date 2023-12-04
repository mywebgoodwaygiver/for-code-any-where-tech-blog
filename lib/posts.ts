import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import Video from "@/app/components/Video";
import CustomImage from "@/app/components/CustomImage";
type Filetree = {
  files: String[];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  let res = await fetch(
    `https://mykv-tutorial.goodwaygiver1.workers.dev/files/${fileName}`
    // {
    //   method: "GET",
    //   headers: {
    //     Accept: 'application/vnd.github+json',
    //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     'X-GitHub-Api-Version': '2022-11-28',
    // }
    // }
  );

  let rawMDX = await res.text();
  if (!rawMDX) return undefined;


  function readTime(inputString: string) {
    // Default values
    const wordsPerMinute = 200;
    const totalWords = inputString.trim().split(/\s+/).length;
    const totalMinutes = Math.ceil(totalWords / wordsPerMinute);

    return totalMinutes;
  }

  let readTimeIs= readTime(rawMDX)

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
    image: string;
    link: string;
    description: string;
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      image: frontmatter.image,
      link: frontmatter.link,
      description: frontmatter.description,
      // modified: frontmatter.modified,
      readTime:readTimeIs
    },
    content,
  };
  return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://mykv-tutorial.goodwaygiver1.workers.dev/allFilesList"
  );

  // console.log("res=>>>>>", res);
  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.files
    .map((filename) => filename)
    .filter((path) => path.endsWith(".mdx"));
  console.log("filesArray=>>>>>>", filesArray);
  const posts: Meta[] = [];

  filesArray.map(async (file: any) => {
    try {
      const post = await getPostByName(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    } catch (error) {
      console.log(error);
      console.log(
        "hey bro here getting err bhai ji  and filename is =>>>>>",
        file
      );
    }
  });


  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

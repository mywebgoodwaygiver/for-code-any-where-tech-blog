// /* eslint-disable @next/next/no-img-element */

// import { getPostByName, getPostspost } from "@/lib/posts";
// import { ImageResponse } from "next/server";

// type Props = {
//     params: {
//       postId: string;
//     };
//   };

// export const size = {
//   width: 1200,
//   height: 630,
// };
// export const alt = "Good Way Giver | Blog";
// export const contentType = "image/png";

// export async function generateStaticParams() {
//   const posts = await getPostspost(); //deduped!

//   if (!posts) return [];

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

// export default async function og({ params: { postId } }: Props) {
// console.log("postid: =>>>>>>>>=>>>", postId)

//   const post = await getPostByName(`${postId}.mdx`); //deduped!

//   if (!post) {
//     return ""
//   }
// const {post} = post;

// // http://localhost:3000/posts/how-to-install-termux/opengraph-image?d9efde0f15408467
//   return new ImageResponse(
//     (
//       <div tw="relative flex w-full h-full flex items-center justify-center">
//         {/* Background */}
//         <div tw="absolute flex inset-0">
//           <img
//             tw="flex flex-1"
//             src={post.image!!}
//             alt={post.title!!}
//           />
//           {/* Overlay */}
//           <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
//         </div>
//         <div tw="flex flex-col text-neutral-50">
//           {/* Title */}
//           <div tw="text-7xl font-bold">{post.title!!}</div>
//           {/* Tags */}
//           <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
//             {/* <div
//               tw={`font-medium ${
//                 post?.category.title === "Cities"
//                   ? "text-emerald-600"
//                   : "text-indigo-600"
//               }`}
//             >
//               {post?.category.title}
//             </div> */}
//             <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
//             <div>Shivam Kumar</div>
//             <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
//             <div>Hello</div>
//             <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
//             <div>{post.date!!}</div>
//           </div>
//         </div>
//       </div>
//     ),
//     size
//   );
// }

import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { postId: string };
}) {
  const response = await fetch(
    `https://data.goodwaygiver.site/post/getPostData/${params.postId}`
  ).then((res) => res.json());
  let post = response.post;

  if (!post) {
    return "";
  }

  console.log(params.postId);
  console.log(post);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img tw="flex flex-1" src={post.thumbnail} alt={post.title} />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{post.title}</div>
          {/* Tags */}
          {/* <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <div tw={`font-medium text-indigo-600`}>category</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div>Shivam Kumar</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>Hello</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>30/11/2023</div>
          </div> */}
        </div>
      </div>
    ),

    {
      ...size,
    }
  );
}

import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import {marked} from "marked"
// import { bundleMDX } from "mdx-bundler";
// import fs from 'node:fs/promises';
// import { ReactElement } from 'react';

// Import your components (Video, CustomImage, etc.) here
type Filetree = {
  files: String[];
};


export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://mykv-tutorial.goodwaygiver1.workers.dev/files/${fileName}`
  );
  const rawMDX = await res.text();

  const { data, content } = matter(rawMDX);

  // const components = {
  //   // Define your components here (Video, CustomImage, etc.)
  //   // Video,
  //   // CustomImage,
  // };

  function readTime(inputString: string) {
    // Default values
    const wordsPerMinute = 200;
    const totalWords = inputString.trim().split(/\s+/).length;
    const totalMinutes = Math.ceil(totalWords / wordsPerMinute);

    return totalMinutes;
  }

  let readTimeIs = readTime(rawMDX);

  const result = await marked(content);
  const mdxSource = await serialize(result, { scope: data });


  const blogPostObj: BlogPost = {
    meta: {
      id: fileName.replace(/\.mdx$/, ""),
      title: data.title,
      date: data.date,
      tags: data.tags,
      image: data.image,
      link: data.link,
      description: data.description,
      readTime: readTimeIs,
    },
    content: mdxSource,
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

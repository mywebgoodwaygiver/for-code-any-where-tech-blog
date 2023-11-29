


import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import rehypePrism from "@mapbox/rehype-prism"
import path from 'path'
import fs from "fs"

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
import 'highlight.js/lib/languages/bash';

hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));

const highlight = hljs.highlight;



  



const postsDirectory = path.join(process.cwd(), "blogposts");



// ...

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    try {
     
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const rawMDX = fileContents;

        if (rawMDX === '404: Not Found') return undefined;

        const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[], image:string  , link: string , description:string}>({
            source: rawMDX,
            options: {
                parseFrontmatter: true,
                // mdxOptions: {
                //     rehypePlugins: [
                //         rehypeHighlight,
                //         rehypeSlug,
                //         rehypePrism
                       
                //     ],
                // },
            },
        });





        const id = fileName.replace(/\.mdx$/, '');

        const blogPostObj: BlogPost = {
            meta: {
                id,
                title: frontmatter.title,
                date: frontmatter.date,
                tags: frontmatter.tags,
                image: frontmatter.image,
                link: frontmatter.link,
                description: frontmatter.description
            },
            content,
        };

        return blogPostObj;
    } catch (error) {
        console.error('Error fetching post:', error);
        return undefined;
    }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    try {
     
        const fileNames = fs.readdirSync(postsDirectory);
        console.log(fileNames)

        // console.log(res.data);

        if (!fileNames) {
            console.log('No response here no files here ');
            return undefined;
        }

        
        // const repoFiletree: Filetree = await res.json();

        console.log('I am in getpostmeta after filetree');
      
        let posts: Meta[] = [];

        // Use Promise.all to wait for all asynchronous operations to complete
        await Promise.all(
          fileNames.map(async (file) => {
            const post = await getPostByName(file);
            // console.log(post);
            
            if (post) {
              const { meta } = post;
   
              posts.push(meta);
            } else {
              console.log("here is no post bro");
            }
          })
        );
        

        

        return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
        console.error('Error fetching posts meta:', error);
        return undefined;
    }
}

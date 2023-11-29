
import { getPostsMeta } from '@/lib/posts';
import React, { useContext, useEffect, useState } from 'react'
import { PostsByTags } from './context/ContextProvider';
type Props = {
    props: {
      tags: string[];
    };
  };

export default function MyTagPosts({ props: { tags } }: Props) {
    const { MyTagPostsHook, setMyTagPostsHook } = useContext(PostsByTags);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const posts = await getPostsMeta(); // deduped!
          if (!posts) {
            console.error('Error fetching posts');
            return;
          }
  
          const fetchedPosts: Meta[] = [];
          await Promise.all(
            tags.map(async (tag) => {
              if (tag) {
                const realTag = tag.replaceAll('-', ' ');
                const tagPosts = posts.filter((post) => post.tags.includes(realTag));
                console.log('Tag Posts:', tagPosts);
  
                if (tagPosts.length) {
                  fetchedPosts.push(...tagPosts);
                } else {
                  console.log(`No posts for the keyword: ${realTag}`);
                }
              } else {
                console.log('Empty tag');
              }
            })
          );
  
          setMyTagPostsHook(fetchedPosts);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      // Call the fetchPosts function
      fetchPosts();
    }, [tags]); // Include tags in the dependency array to re-run the effect when tags change
  
  return (
    <>
    
    </>
  )
}

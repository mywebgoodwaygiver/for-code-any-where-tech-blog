type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
    image: string,
    link: string,
    description:string,
    modified:string, 
    modified:string
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
} 

interface PostMeta {
    _id: string; // Assuming _id is a string, you can adjust the type accordingly
    title: string;
    datecreated: Date;
    tags: string[];
    thumbnail: string;
    link: string;
    description: string;
    dateupdated: string;
    // readTime: number; // Uncomment and adjust the type if readTime is included
  }
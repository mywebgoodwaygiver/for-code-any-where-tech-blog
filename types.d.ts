type Meta = {
    id: string,
    title: string,
    date: string,
    modified:string,
    tags: string[],
    image: string,
    link: string,
    description:string;
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
} 
// import { compileMDX } from "next-mdx-remote/rsc";
// import rehypeHighlight from "rehype-highlight/lib";
// import rehypeSlug from "rehype-slug";
// import rehypePrism from "@mapbox/rehype-prism";
import path from "path";
// import fs from "fs";

// const postsDirectory = path.join(process.cwd(), "blogposts");


export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  try {
    // const fullPath = path.join(postsDirectory, fileName);
    const content =
      '--- title: "How to install Termux?" date: "2023-11-19" tags: ["how to install termux" , "latest termux" ,"install termux" , "termux on android phone" ] image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSq4WLc8IJaCtE_fR4IXGD4dt38lHyZr0TdLgEGSqf7oQkAtmwP_UC54CK_05roXHDzjczj602YXxSUIRfUps2bzFVXrbtzDSgniN2ELInF_cuRxwcC3QN64PhCt9rncfaDET4JYVdNRivDrckj0u61U-7Z-nFN1notDphTDPG_Fvfodg5BtYx4yztE3U/w640-h358/install_termux_post.png" link: "/how-to-install-termux" description: "Let\'s install latest termux and start coding journey on android phone ✨" --- #### If you want to install Termux on an Android phone, you have two options. 1. **Install from Play Store:** - Search for Termux and install it. 2. **Install from F-Droid Website:** - Download the Termux APK from the official F-Droid Store [here](https://f-droid.org). - Choose the version you want and click on Download APK. ![F-Droid Logo](https://f-droid.org/assets/fdroid-logo-text_S0MUfk_FsnAYL7n2MQye-34IoSNm6QM6xYjDnMqkufo=.svg) #### Step 1 » First Download APK file of Termux Download the Termux APK from the official F-Droid Store. Choose the version you want, then click on Download APK. [Download Termux APK directly 🡇](#) ![Step 1 Image](https://i0.wp.com/theankitnet.com/wp-content/uploads/2022/02/Screenshot_20220215-002947_Termux.jpg?resize=1024%2C939&ssl=1) #### Step 2 » Run Termux APK file to install Termux Once you\'ve downloaded the APK file: - Find it in the browser\'s Downloads section or in your File Manager app. - Run the file to install the Termux app. - Allow your browser or file manager to install apps from unknown sources if prompted. ![Step 2 Image](https://i0.wp.com/theankitnet.com/wp-content/uploads/2022/02/Screenshot_20220215-002947_Termux.jpg?resize=1024%2C939&ssl=1)';
    // const rawMDX = fileContents;

    // if (!rawMDX) return undefined;

    // const { frontmatter, content } = await compileMDX<{
    //   title: string;
    //   date: string;
    //   tags: string[];
    //   image: string;
    //   link: string;
    //   description: string;
    //   //   modified: string;
    // }>({
    //   source: rawMDX,
    //   options: {
    //     parseFrontmatter: true,
    // mdxOptions: {
    //     rehypePlugins: [
    //         rehypeHighlight,
    //         rehypeSlug,
    //         rehypePrism

    //     ],
    // },
    //   },
    // });

    const id = fileName.replace(/\.mdx$/, "");
    let frontmatter = {
      title: "How to install Termux?",
      date: "2023-11-19",
      tags: [
        "how to install termux",
        "latest termux",
        "install termux",
        "termux on android phone",
      ],
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSq4WLc8IJaCtE_fR4IXGD4dt38lHyZr0TdLgEGSqf7oQkAtmwP_UC54CK_05roXHDzjczj602YXxSUIRfUps2bzFVXrbtzDSgniN2ELInF_cuRxwcC3QN64PhCt9rncfaDET4JYVdNRivDrckj0u61U-7Z-nFN1notDphTDPG_Fvfodg5BtYx4yztE3U/w640-h358/install_termux_post.png",
      link: "/how-to-install-termux",
      description:
        "Let's install latest termux and start coding journey on android phone ✨",
    };
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
      },
      content,
    };

    return blogPostObj;
  } catch (error) {
    console.error("Error fetching post:", error);
    return undefined;
  }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  try {
    const fileNames = [
      "how-to-install-termux.mdx",
      "how-to-download-youtube-videos.mdx",
      "how-to-install-kali-linux-on-android.mdx",
    ];

    // console.log(res.data);

    if (!fileNames) {
      console.log("No response here no files here ");
      return undefined;
    }

    // const repoFiletree: Filetree = await res.json();

    console.log("I am in getpostmeta after filetree");

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
    console.error("Error fetching posts meta:", error);
    return undefined;
  }
}

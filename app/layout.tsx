import "./globals.css";
import ContextProvider from "./components/context/ContextProvider";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next/types";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s | Good Way Giver",
    default: "Good Way Giver",
  },
  description:
    "Hello, I'm Shivam 👋. Here explore many things to make easy your life. I upload tech related content and solve many things in easy way.",
  applicationName: "Good Way Giver Blog",
  authors: [{ name: "Shivam Kumar" }],
  generator: "Next.js",
  keywords: [
    "Good Way Giver",
    "Shivam Kumar's Blog",
    "How to",
    "Good Way Giver's Blog",
    "vs code install on phone",
    "Good Way Giver Tech",
    "Good Way Giver Post",
    "Shivam Kumar Post",
    "Tech Blog",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Shivam Kumar",
  publisher: "Shivam Kumar",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.goodwaygiver.site/"),
  verification:{
    google:"id"
  }
,
  openGraph: {
    title:"Good Way Giver - Blogs",
    description: "Hello, I'm Shivam 👋. Here explore many things to make easy your life. I upload tech related content and solve many things in easy way.",
    url: `https://www.goodwaygiver.site`,
    type: 'website',
    siteName: "Good Way Giver Blog",
    images: [
        {
            url: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png`,
            secureUrl: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png`,
            width: 1200,
            height: 630,
            alt: `Preview image for ${"Good Way Giver - Blogs"}`,
        }
    ],
},
twitter: {
    card: 'summary_large_image',
    site: 'https://www.goodwaygiver.site',
    title: "Good Way Giver Blog", 
    description: "Hello, I'm Shivam 👋. Here explore many things to make easy your life. I upload tech related content and solve many things in easy way.", 
    creator: '@goodwaygiver',
    images: { 
        url: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png`,
        alt: `Preview image for Good Way Giver Blog`, 
    },
},





};

// export const runtime = 'edge' // 'nodejs' (default) | 'edge'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="./globals.css" as="style" />
      </Head>
      <body className="dark:bg-slate-800">
        <ContextProvider>
          <MyNavbar />
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <main className="prose-slate dark:prose-invert mx-auto">
            {children}
          </main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

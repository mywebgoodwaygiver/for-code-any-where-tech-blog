import "./globals.css";
import ContextProvider from "./components/context/ContextProvider";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: {
    template: '%s | Shivam Kumar',
    default: "Shivam - Good Way Giver",
  },
  description: "Hello, I'm Shivam. 👋 I am a coder and know web development skills.",
  applicationName: "Good Way Giver Blog",
  authors: [{ name: "Shivam Kumar" }],
  generator: 'Next.js',
  keywords: ['Good Way Giver', "Shivam Kumar's Blog", 'How to', "Good Way Giver's Blog", 'vs code install on phone', 'Good Way Giver Tech', 'Good Way Giver Post', 'Shivam Kumar Post', 'Tech Blog',],
  referrer: 'origin-when-cross-origin',
  creator: 'Shivam Kumar',
  publisher: 'Shivam Kumar',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Good Way Giver</title>
      </head>
      <body className="dark:bg-slate-800">
        <ContextProvider>
          <MyNavbar />
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
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

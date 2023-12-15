"use client"

import React, { createContext, useState } from "react";

interface PostData {
  postData: any[];
  setPostData: (postData: any[]) => void;
}

interface LatestPostData {
  latestPostData: any[];
  setLatestPostData: (latestPostData: any[]) => void;
}
interface AllPostsMeta {
  postsMeta: any[];
  setPostsMeta: (postsMeta: any[]) => void;
}

interface PopularPostData {
  popularPostData: any[];
  setPopularPostData: (popularPostData: any[]) => void;
}

interface MyPage {
  page: number;
  setPage: (page: number) => void;
}

interface ShowSpinner {
  showSpin: boolean | null;
  setShowSpin: (showSpin: boolean | null) => void;
}

interface MySearchInput {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
}

interface TypingInput {
  typing: boolean;
  setTyping: (typing: boolean) => void;
}

interface Mode {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}
interface PostByTags {
  MyTagPostsHook: Meta[];
  setMyTagPostsHook: (MyTagPostsHook: Meta[]) => void;
}
type mySpeechTimeOutType = {
  speechTimeout: number | null;
  setSpeechTimeout: React.Dispatch<React.SetStateAction<number | null>>;
  // ... other properties
  
};
// type SpeechRecognitionContextType = {
//   isSpeechRecognitionActive: boolean;
//   setIsSpeechRecognitionActive: Dispatch<SetStateAction<boolean>>;
//   // ... other properties if needed
// };

interface currentUrlType {
  urlNow: string;
  setUrlNow: (urlNow: string) => void;
}

export const postdata = createContext<PostData>({
  postData: [],
  setPostData: () => {},
});

export const latestPost = createContext<LatestPostData>({
  latestPostData: [],
  setLatestPostData: () => {},
});
export const postsMetaContext = createContext<AllPostsMeta>({
  postsMeta: [],
  setPostsMeta: () => {},
});

export const popularPost = createContext<PopularPostData>({
  popularPostData: [],
  setPopularPostData: () => {},
});

export const myPage = createContext<MyPage>({
  page: 1,
  setPage: () => {},
});

export const showSpiner = createContext<ShowSpinner>({
  showSpin: null,
  setShowSpin: () => {},
});

export const currentUrl = createContext<currentUrlType>({
  urlNow: "",
  setUrlNow: () => {},
});

export const typingInput = createContext<TypingInput>({
  typing: false,
  setTyping: () => {},
});

export const Mode = createContext<Mode>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});
export const PostsByTags = createContext<PostByTags>({
  MyTagPostsHook: [],
  setMyTagPostsHook: () => {},
});
export const speakingTimeOut = createContext<mySpeechTimeOutType | undefined>({
  speechTimeout: null,
  setSpeechTimeout: () => {},
});

// export const SpeechRecognitionContext = createContext<SpeechRecognitionContextType | undefined>(
//   undefined
// );

export const mySearchInput = createContext<MySearchInput>({
  searchInput: "",
  setSearchInput: () => {},
});


interface MyComponentProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: MyComponentProps) => {
  const [postData, setPostData] = useState<any[]>([]);
  const [latestPostData, setLatestPostData] = useState<any[]>([]);
  const [postsMeta, setPostsMeta] = useState<any[]>([]);
  const [popularPostData, setPopularPostData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [showSpin, setShowSpin] = useState<boolean | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [MyTagPostsHook, setMyTagPostsHook] = useState<Meta[]>([]);
  const [speechTimeout, setSpeechTimeout] = useState<number | null>(null);
  const [urlNow, setUrlNow] = useState<string>("home");

  return (
    <postdata.Provider value={{ postData, setPostData }}>
      <latestPost.Provider value={{ latestPostData, setLatestPostData }}>
      <postsMetaContext.Provider value={{ postsMeta, setPostsMeta }}>
        <popularPost.Provider
          value={{ popularPostData, setPopularPostData }}
        >
          <myPage.Provider value={{ page, setPage }}>
            <showSpiner.Provider value={{ showSpin, setShowSpin }}>
              <mySearchInput.Provider
                value={{ searchInput, setSearchInput }}
              >
                <typingInput.Provider value={{ typing, setTyping }}>
                  <Mode.Provider value={{ isDarkMode, setIsDarkMode }}>
                  <PostsByTags.Provider value={{ MyTagPostsHook, setMyTagPostsHook }}>
                  <speakingTimeOut.Provider value={{speechTimeout, setSpeechTimeout }}>
                  <currentUrl.Provider value={{urlNow, setUrlNow }}>
                    {children}
                  </currentUrl.Provider>
                  </speakingTimeOut.Provider>
                  </PostsByTags.Provider>
                  </Mode.Provider>
                </typingInput.Provider>
              </mySearchInput.Provider>
            </showSpiner.Provider>
          </myPage.Provider>
        </popularPost.Provider>
      </postsMetaContext.Provider>
      </latestPost.Provider>
    </postdata.Provider>
  );
};

export default ContextProvider;
'use client'

import React, { useContext, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import HighLites from "../components/HighLites";
import Latest from "../components/Latest";
import Popular from "../components/Popular";
import Image from 'next/image';
// import Test from "../components/Typewriter";
import {
mySearchInput, 
  postdata,
} from "../components/context/ContextProvider";
import ConnectWithMeMedia from "../components/ConnectWithMeMedia";
import ForSeach from "../components/ForSeach";

const HomePage = () => {
  const { postData } = useContext(postdata)!;
  const { searchInput } = useContext(mySearchInput)!;

  return (
    <>
      <div style={{ width: "100%" }} className="m-0 p-0">
       

        {/* <Image
 width={650}
 height={650}

  src="/gif/videoforhome.gif" alt="Your GIF"/> */}

        {/* /// */}

        <section className="bg-white dark:bg-gray-900">
          <div className="py-1 px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-6 ">
            {/* highlites */}
            <div className={` highlightsMainDiv ${!searchInput.length ? "block" : "hidden"} mt-[1rem] bg-blue-50 rounded-sm `}>
              {" "}
              <HighLites></HighLites>
            </div>

            {/* Latest */}
            <div className={`${!searchInput.length ? "block" : "hidden"}`}>
              {" "}
              <Latest></Latest>
            </div>

            {/* popular */}
            <div className={`${!searchInput.length ? "block" : "hidden"}`}>
              <Popular></Popular>
            </div>
            <div className={`${!searchInput.length ? "block" : "hidden"}`}>
              {" "}
              <ConnectWithMeMedia></ConnectWithMeMedia>
            </div>
            <div className={`${!searchInput.length ? "hidden" : "block"}`}>
              {" "}
              <ForSeach></ForSeach>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;

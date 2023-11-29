'use client'

import React from "react";
import Typewriter from "./Typewriter";

const HighLites = () => {
 const words:string[] = ["Good Way Giver", "Good Way Giver Shop"]


  return (
    <>
      <div className="highlights mb-2  md:mt-[24px] py-2 text-center  flex justify-center items-center dark:bg-gray-900 dark:text-white dark:border dark:border-white dark:rounded-sm">
              <img
          className=" logoimg rounded-full w-[8rem] m-[9px] md:w-52"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif"
          alt=""
        />
        <div style={{width:"70%"}} className=" contants flex flex-col">
          <span className="textHighLight ml-2 text-sm lg:text-lg font-bold">
            {" "}
            Welcome to our tech blog, where we provide easy tutorials on
            smartphones and many more and share brilliant hacks and insights to
            simplify your digital life.
          </span>
          <span className="my-1 text-blue-600 font-medium">
            Contact :- contact@goodwaygiver.site
          </span>
          < div style={{color:"black"}} className=" typeMyLogo font-extrabold text-xl mt-2">
 <Typewriter  textStyle={"text-black dark:text-white"} words={words} speed={150}></Typewriter>
 </div>
        </div>
      </div>
    </>
  );
};  

export default HighLites;

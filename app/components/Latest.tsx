"use client";

import React, { useContext } from "react";
import { latestPost, postdata } from "./context/ContextProvider";
import Link from "next/link";
import StopPoint from "../ContantComponents/StopPoint";
import Spinner from "../ContantComponents/Spinner";
import { SlFire } from "react-icons/sl";
import Image from "next/image";
const Latest = () => {
  const { latestPostData } = useContext(latestPost);

  return (
    <>
      <section className=" dark:bg-gray-900 bg-[azure] drop-shadow-md px-1 font-sans pb-3 ">
        <div className="flex  items-center">
          <h2 className="my-3 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
            Latest{" "}
          </h2>{" "}
          <Image
            width={650}
            height={650}
            className="h-8 w-8 dark:filter dark:invert"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlh9PF0i_UKcoE9U8SWHNG7CX2BhNeoLXmeIa-ACRdKv4VRGfgwri13zzQ4qf8XLce6TyEMX5C6A74F3JoxcQPwJcxRB_9sDZlztXBRR1e1MuUdmLGiw4CzE8_KsRu824nYp1R5Wr0teLnBGR5OIO-A-CUi3J6hWxKGxv5x7JdD2iSj9qlV6_zysZHBhA/w400-h400/latesticon.png"
            alt="new"
          />
        </div>
        {latestPostData && latestPostData.length > 0 ? (
          <div className="grid gap-8 mt-2 md:grid-cols-2 mb-2 ">
            {latestPostData.map((post, index) => (
              <div
                key={post._id}
                style={{ width: "100%" }}
                className="latestpost p-3 hover:shadow-lg hover:scale-105 duration-400 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center md:flex md:flex-col block xl:flex xl:flex-row text-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              >
                <figure className="max-w-md mx-auto">
                  <Image
                    width={650}
                    height={650}
                    className="h-auto max-w-full rounded-lg hover:scale-105 duration-300 transition-transform"
                    src={`${post.thumbnail}`}
                    alt="image description"
                  />
                </figure>

                <div
                  className="pl-5 pr-2 mainContentsPost md:w-full"
                  style={{}}
                >
                  <Link href={`/posts${post.link}`}>
                    <h3 className="mytitle text-md font-bold my-2 tracking-[0.03] text-gray-900 dark:text-white">
                      <p>{post.title}</p>
                    </h3>

                    <p className="mb-2 mydescription lg:text-[15px] font-[400] text-gray-600 dark:text-gray-400 description">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        className="text-gray-900 -z-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:animate-none hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-3 py-1 text-center m-0"
                      >
                        Continue Reading &#187;&#187;
                      </button>
                      <span className="flex items-ceneter">
                        <SlFire className="w-5 h-5 pr-0.5 text-gray-800 dark:text-white"></SlFire>
                        <p className="inline-block dark:text-white pl-[2px] text-sm">
                          {" "}
                          {post.views}
                        </p>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Spinner></Spinner>
        )}
      </section>
      <StopPoint></StopPoint>
    </>
  );
};

export default Latest;

'use client'

import React, { useContext } from "react";
import { postdata, showSpiner } from "./context/ContextProvider";
import Link from "next/link";
import Spinner from "../ContantComponents/Spinner";
import NoSearchResults from "./NoSearchResults";
import StopPoint from "../ContantComponents/StopPoint";
import { SlFire } from "react-icons/sl";
import Image from 'next/image';
const ForSearch: React.FC = () => {
  const { postData } = useContext(postdata)!;
  const { showSpin } = useContext(showSpiner)!;

  return (
    <>
      <section className="bg-[azure] dark:bg-gray-900 pb-3 mt-1">
        <div className="flex items-center">
          <h2 className="my-4 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
            Search Results{" "}
          </h2>{" "}
          <Image
 width={650}
 height={650}

 
            className="h-6 w-6 dark:filter dark:invert"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsEeJRnoySeHJb0vdjra9h3neT5FnmlJabvzW0SMbU-zTwfaAQgtCFfUuaW-0YHbEQZwfuai-Iah1xiNhct3ASNQLn36DHadBgv2weHln_6SPZMOCXwUsMfLSOpC1vaDcD-u4oLx5f5IBI1ZANWT6YrlVZis_EjoClblmOZ_1Sh9nNOHAcxMqZs-UcfXI/w640-h640/result%20success.png"
            alt=""
          />
        </div>
        {showSpin ? (
          <Spinner></Spinner>
        ) : !postData.length ? (
          <NoSearchResults></NoSearchResults>
        ) : (
          <div className="grid gap-8 mt-2  md:grid-cols-2 mb-2 ">
            {postData.length &&
              postData.map((post) => {
                return (
                  <div key={post.id}>
                    <div
                      style={{ width: "100%" }}
                      className="searchPosts p-3 hover:shadow-lg hover:scale-105 duration-400 transition-transform hover:border hover:border-1.5  hover:border-blue-300 items-center md:flex md:flex-col block xl:flex xl:flex-row   text-start  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                    >
                      <figure className="max-w-md mx-auto  inline-block overflow-hidden">
                        <Image
 width={650}
 height={650}

 
                          className="h-auto max-w-full rounded-lg  hover:scale-105 duration-300 transition-transform"
                          src={`${post.thumbnail}`}
                          alt="image description"
                        />
                      </figure>

                      <div
                        className=" pl-5 pr-2 mainContentsPost md:w-full"
                        style={{ }}
                      >
                        <Link href={`/posts${post.link}`}>
                          <h3 className="text-md mytitle font-bold my-1 tracking-[0.03] text-gray-900 dark:text-white">
                            <p> {post.title}</p>
                          </h3>

                          <p className="mt-[5px] mydescription lg:text-[15px] font-[400] text-gray-600 dark:text-gray-400 description">
                            {post.description}
                          </p>
                          <div className="flex justify-between items-center ">
                              <button
                                type="button"
                                className="text-gray-900 animate-pulse 	-z-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:animate-none hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1 text-center m-0 "
                              >
                                Continue Reading &#187;&#187;
                              </button>
                              <span className=" flex items-ceneter">
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
                  </div>
                );
              })}
          </div>
        )}
      </section>

      {/* /// */}
      <StopPoint></StopPoint>
    </>
  );
};

export default ForSearch;

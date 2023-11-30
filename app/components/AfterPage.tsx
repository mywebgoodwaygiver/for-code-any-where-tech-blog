"use client";

import React, { useContext } from "react";
import { latestPost, popularPost } from "./context/ContextProvider";
import Link from "next/link";
import Spinner from "../ContantComponents/Spinner";
import Image from "next/image";

const AfterPage: React.FC = () => {
  const { latestPostData } = useContext(latestPost)!;
  const { popularPostData } = useContext(popularPost)!;

  return (
    <>
      <section className="bg-white dark:bg-gray-900 dark:text-white">
        <div className="maincontainerAfterPage grid grid-cols-2 dark:bg-gray-900 dark:text-white gap-3 pb-4 px-4  mx-auto max-w-screen-xl text-center rounded bg-gray-50">
          <div
            style={{ borderColor: "wheat" }}
            className="latestContainer    border-4   pl-0.5"
          >
            <div className="flex items-center latestContant">
              <h3 className="font-bold  border-b-2 border-dashed border-pink-500 text-2xl text-start block pl-2 pb-1">
                Latest
              </h3>
              <Image
                width={32}
                height={32}
                className="h-8 w-8 ml-2 dark:filter dark:invert"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlh9PF0i_UKcoE9U8SWHNG7CX2BhNeoLXmeIa-ACRdKv4VRGfgwri13zzQ4qf8XLce6TyEMX5C6A74F3JoxcQPwJcxRB_9sDZlztXBRR1e1MuUdmLGiw4CzE8_KsRu824nYp1R5Wr0teLnBGR5OIO-A-CUi3J6hWxKGxv5x7JdD2iSj9qlV6_zysZHBhA/w400-h400/latesticon.png"
                alt="new img"
              />
            </div>
            {!latestPostData.length ? (
              <Spinner />
            ) : (
              <div>
                {latestPostData.map((post) => (
                  <Link href={`/posts${post.link}`} key={post._id}>
                    <div className=" flex my-2 hover:scale-105 hover:border-2 duration-300 transition-transform hover:border-blue-400 rounded-md shadow-lg">
                      {/* hover:shadow-lg  hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 */}
                      <Image
                        width={142}
                        height={80}
                        className=" latestCotainerImage h-20 border-2 border-black rounded-sm"
                        src={`${post.thumbnail}`}
                        alt=""
                      />
                      <div className="infoInText font-medium flex flex-col">
                        <span className=" w-auto pl-4 text-start">
                          {post.title}
                        </span>
                        <span className="views pl-4	 flex justify-start items-center">
                          <b className="px-2 text-blue-500">Views</b>{" "}
                          <svg
                            className="w-5 h-5 pr-0.5 font-bold text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 14"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                              <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                            </g>
                          </svg>
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ borderColor: "wheat" }}
            className="PopularContainer border-4 border-blue-500 pl-0.5"
          >
            <div className="flex items-center">
              <h3 className="font-bold  border-b-2 border-dashed border-lime-500 text-2xl text-start block pl-2 pb-1">
                Popular
              </h3>
              <Image
                width={32}
                height={32}
                className="h-8 w-8 ml-2 dark:filter dark:invert"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png"
                alt="popular img"
              />
            </div>
            {!popularPostData.length ? (
              <Spinner />
            ) : (
              <div>
                {popularPostData.map((post) => (
                  <Link href={`/post${post.link}`} key={post._id}>
                    <div className=" flex my-2 hover:scale-105 hover:border-2 hover:border-blue-400 rounded-md shadow-lg">
                      <Image
                        width={142}
                        height={80}
                        className="h-20 border-2 border-black rounded-sm"
                        src={`${post.thumbnail}`}
                        alt=""
                      />
                      <div className="infoInText font-medium flex flex-col">
                        <span className="w-full  text-start pl-4">
                          {post.title}
                        </span>
                        <span className="views pl-4	 flex justify-start items-center">
                          <b className="px-2 text-blue-500">Views</b>{" "}
                          <svg
                            className="w-5 h-5 pr-0.5 font-bold text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 14"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                              <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                            </g>
                          </svg>
                          {post.views}
                        </span>
                      </div>{" "}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* hi bhai ji  */}
    </>
  );
};

export default AfterPage;

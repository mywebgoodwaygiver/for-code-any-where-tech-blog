"use client";

import React, { useContext } from "react";
import { popularPost } from "./context/ContextProvider";
import Link from "next/link";
import StopPoint from "../ContantComponents/StopPoint";
import Spinner from "../ContantComponents/Spinner";
import Image from 'next/image';

const Popular = () => {
  const { popularPostData } = useContext(popularPost)!;

  return (
    <>
      <section className="bg-blue-100 rounded-sm  dark:bg-gray-900 px-1 drop-shadow-md">
        <div className="py-2 px-0 mx-auto max-w-screen-xl ">
          <div className="flex  items-center mb-4">
            <h2 className="my-3 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
              Popular{" "}
            </h2>{" "}
            <Image
 width={650}
 height={650}

 
              className="h-8 w-8 dark:filter dark:invert"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png"
              alt=""
            />
          </div>
          {popularPostData.length === 0 ? (
            <Spinner></Spinner>
          ) : (
            <div className="grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
              {popularPostData.map((post, index) => (
                <div
                  key={post._id}
                  className="hover:shadow-lg hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link href={`/posts${post.link}`}>
                    <Image
 width={650}
 height={650}

 
                      className="w-full rounded-lg"
                      src={`${post.thumbnail}`}
                      alt="Bonnie Avatar"
                    />

                    <div className="p-2">
                      <h3 className="text-sm font-[600] tracking-tight text-gray-900 dark:text-white">
                        <span className="font-medium">{post.title} </span>
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
      <StopPoint></StopPoint>
    </>
  );
};

export default Popular;

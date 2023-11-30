'use client'

import React from "react";
import Typewriter from "./Typewriter";
import Link from "next/link";
import Image from 'next/image';
const ConnectWithMeMedia: React.FC = () => {
  const words:string[] = ["#YouTube", "#FaceBook", "#Instagram"];

  return (
    <>
      <div className="bg-gray-100 rounded shadow-lg p-4 dark:bg-gray-900 dark:border dark:border-white ">
        <h1 className="text-2xl  block text-center font-semibold dark:text-white">
          Feel Connected With Me On
        </h1>
        <Typewriter words={words}></Typewriter>
        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="py-4 px-4  mx-auto max-w-screen-xl text-center lg:py-8 lg:px-4">
            <div
              className="flex justify-around"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="text-center text-gray-500  dark:text-gray-400">
                <Link target="_blank" href="https://youtube.com/@goodwaygiver" passHref>
            
                    <Image
 width={650}
 height={650}

 
                      className="mx-auto mb-4 w-12 h-auto rounded-full border border-red-500 p-1"
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtjm00gGaVKpffquELDG8a7fkQtD4sQu0brKoX0Ui9ianXLfJ4SSmtdDn9E1KB-gYXHrV75Ji5Y-tu6kLiPEiHAZechmKMFEgqZ-z18h2KaB4k5YD2Qz4lrri_W_ufvPodsmHa-M2-CL4Lz_0fC2S84YVdOP7s4O4JjuLF1RDZBbfVwRrW6szC0knixI8/s240/unnamed%20(2).webp"
                      alt="Bonnie Avatar"
                    />
                    <h3 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      <b>Good Way Giver</b>
                    </h3>
                    <p>YouTube</p>
                 
                </Link>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400">
                <Link
                  href="https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL"
                  passHref target="_blank"
                >
                  
                    <Image
 width={650}
 height={650}

 
                      className="mx-auto mb-4 w-12 h-auto rounded-full border border-blue-300 p-1"
                      src="https://play-lh.googleusercontent.com/LYXR81vaeuI2KIy4xQarox4qAYnrkWnmKOwl1JoLIJuCRUoK9dqPGAAjELsAf1J_qw=w240-h480-rw"
                      alt="Helene Avatar"
                    />
                    <h3 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      <b>Good Way Giver</b>
                    </h3>
                    <p>FaceBook</p>
                  </Link>
              
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400">
                <Link
                  href="https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA=="
                  passHref target="_blank"
                >
                 
                    <Image
 width={650}
 height={650}

 
                      className="mx-auto mb-4 w-12 h-auto border border-red-500 rounded-full p-1"
                      src="https://play-lh.googleusercontent.com/h9THn4Ou1Qz9_CpTVxtatkF8yZV9YP2T3D6-ZxMvsnV0TbLL_LiVIMmTprcosjq0SPHu=w240-h480-rw"
                      alt="Jese Avatar"
                    />

                    <h3 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                      <b>Good Way Giver</b>
                    </h3>
                    <p>Instagram</p>
              
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConnectWithMeMedia;

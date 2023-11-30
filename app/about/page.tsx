'use client'

import React from "react";
import StopPoint from "../ContantComponents/StopPoint";
import Image from 'next/image';
const AboutPage = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About Me
            </h1>
            <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-medium">
              I'm Shivam Kumar, I am from India and I am a Full Stack Web App
              Developer also I am a youtuber I create Tech related Videos on
              there.
            </p>
            <div className="iknow mb-4 border font-medium text-gray-400 rounded py-1 px-1 text-xl">
              <div className="iknow flex items-center">
                {" "}
                <p className="font-bold text-xl md:text-md py-3 pr-1.5">
                  I Know
                </p>{" "}
                <svg
                  style={{ color: "#00a7ff" }}
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0eff0e"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                  />
                  <path
                    fill="#fff"
                    d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                  />
                </svg>
              </div>
              <input defaultChecked readOnly  type="checkbox" className="mr-1 rounded " />
              <p className="mr-1 inline-block">React.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded " />{" "}
              <p className="mr-1 inline-block">NextJs.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />
              <p className="mr-1 inline-block">JavaScript.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />
              <p className="mr-1 inline-block">TypeScript.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />
              <p className="mr-1 inline-block">NodeJs.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />
              <p className="mr-1 inline-block">Express.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />
              <p className="mr-1 inline-block">Tailwind.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />{" "}
              <p className="mr-1 inline-block">Bootstrap.</p>
              <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />
              <p className="mr-1 inline-block">React Bootstrap.</p>
              {/* <input defaultChecked readOnly type="checkbox" className="mr-1 rounded" />React. */}
            </div>

            <a
              target="_blank"
              href="https://shop.goodwaygiver.site"
              className="inline-flex   items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-200  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <b className="px-1 ">Contact Me</b>{" "}
              <b className="dark:filter dark:invert">
                <svg
                  className="w-6 h-6 hover:text-white text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ff dark:#fff"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                  <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                </svg>
              </b>
            </a>
          </div>
          <div className=" flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
            <Image
 width={650}
 height={650}

 
              className="rounded-full w-20 h-20"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif"
              alt="GWG Logo"
            />
          </div>
        </div>
      </div>
      <StopPoint></StopPoint>
    </>
  );
};

export default AboutPage;

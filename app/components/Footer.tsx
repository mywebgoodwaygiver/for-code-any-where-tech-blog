"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className=" bg-white pt-4 dark:bg-gray-800">
        <div className="mx-4 max-w-screen-xl border-t-2 border-black dark:border-none px-4">
          <div className="md:flex md:justify-between mt-2 ">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  width={40}
                  height={40}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3XnABTUt4Qc9bJpf67KlHp0T06Tc4UuwbFeNBOs95cQ5CaoWitFztCbjNXMkqbQGig4QpEqZMJlNh8cDvkll7n7M_9km8jZRCZbWEcxIAM98aWZ-aCkEr0NprFxi9kKoTpFYZt_ghD5rSf_QvUl-f3fSWuErxi81MLrTcqQyT2OFmYMtTHMPQJ_8FzRo/w640-h640/Copy%20of%20GWG%20(192%20x%20192%20px).png"
                  className="mr-3 h-10 rounded-full"
                  alt="Good Way Giver Logo"
                />
                <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Good Way Giver
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 footerulLinks">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Services
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      target="_blank"
                      href="https://shop.goodwaygiver.site/"
                      className="hover:underline hover:ml-1.5"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://shop.goodwaygiver.site/"
                      className="hover:underline hover:ml-1.5"
                    >
                      Affiliated Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@GoodWayGiver"
                      className="hover:underline hover:ml-1.5 "
                    >
                      YouTube
                    </Link>
                  </li>
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      target="_blank"
                      href="https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA=="
                      className="hover:underline hover:ml-1.5"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL"
                      className="hover:underline hover:ml-1.5 "
                    >
                      FaceBook
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  More
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      target="_blank"
                      href="/about"
                      className="hover:underline hover:ml-1.5 "
                    >
                      About Me
                    </Link>
                  </li>
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      target="_blank"
                      href="/contax"
                      className="hover:underline hover:ml-1.5"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5">
                    <Link
                      href={"/privacy-policy"}
                      target="_blank"
                      className="hover:underline hover:ml-1.5"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/terms-conditions"}
                      target="_blank"
                      className="hover:underline hover:ml-1.5"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" border-gray-200 sm:mx-auto dark:border-gray-500" />
          <div className=" my-3 socel-media-icons sm:flex sm:items-center sm:justify-between sm:flex-row ">
            <span className="text-sm font-semibold text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="/" className="hover:underline ">
                Good Way Giver
              </Link>
              . All Well
            </span>
            <div className=" flex mt-4 space-x-6 sm:justify-center sm:items-center sm:mt-0">
              {/* FaceBook */}
              <Link
                href="https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="blue"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {/* youtube */}
              <Link
                href="https://www.youtube.com/@GoodWayGiver"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 20 14"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {/* insta */}
              <Link
                href="https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="red"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <hr className=" mb-1 border-gray-200 sm:mx-auto dark:border-white  " />
        </div>
      </footer>
    </>
  );
};

export default Footer;

"use client";

import React, {
  HtmlHTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  postdata,
  mySearchInput,
  showSpiner,
  typingInput,
  latestPost,
  popularPost,
} from "./context/ContextProvider";
import {
  getLatestPostFunc,
  getPopularPostFunc,
  getPostsFunc,
} from "../apiCalls/Apis";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaSearch } from "react-icons/fa";

interface Props {}

function MyNavbar(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { typing, setTyping } = useContext(typingInput);

  const [urlNow, setUrlNow] = useState("home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Use type assertion to tell TypeScript that 'e.target' is an HTMLAnchorElement
    const anchorElement = e.target as HTMLAnchorElement;

    // Toggle the state on button click
    setUrlNow(anchorElement.id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { postData, setPostData } = useContext(postdata);
  const { searchInput, setSearchInput } = useContext(mySearchInput);
  const { showSpin, setShowSpin } = useContext(showSpiner);
  // const { urlNow, setUrlNow } = useContext(currentUrl);
  const [tempInp, setTempInp] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isInputEmpty = (inputValue: string) => /^\s*$/.test(inputValue);

  const focusInput = () => {
    if (typing === true && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handlesetUrl = (url: string) => {
    // Your logic here
    console.log("Link clicked", url);
  };

  const changeInpValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target.value;
    console.log("Search value:", search);

    setTyping(true);

    const searchempty = isInputEmpty(search);
    console.log(searchempty);

    if (!searchempty) {
      setTempInp(search);
      console.log("searchInput =<>>>>", tempInp);
    }

    const isempty = isInputEmpty(tempInp);

    if (isempty) {
      setShowSpin(false);
      return setPostData([]);
    }
  };

  const handleAfterEvent = async () => {
    let trimedtempInp = tempInp.trim();

    setSearchInput(trimedtempInp.length === 1 ? "" : trimedtempInp);
    setIsSearchOpen(false);
    setShowSpin(true);

    const response = await getPostsFunc(searchInput);
    let data: any;

    if (typeof response === "string") {
      // Handle the case where there is an error (response is a string)
      console.error("Error:", response);
    } else {
      // Handle the case where the request was successful (response is an AxiosResponse)
      data = response.data;
    }

    // Now you can use 'data' without TypeScript errors
    console.log("data.postdata: ", data.postdata);
    setPostData(data.postdata);
    setShowSpin(false);
  };

  const handleSeachPost = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    handleAfterEvent();
  };

  //
  const { setLatestPostData } = useContext(latestPost);
  const { setPopularPostData } = useContext(popularPost);

  const handleIsSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const getLatestPost = async () => {
    const response = await getLatestPostFunc();
    let data: any;

    if (typeof response === "string") {
      // Handle the case where there is an error (response is a string)
      console.error("Error:", response);
    } else {
      // Handle the case where the request was successful (response is an AxiosResponse)
      data = response.data;
    }

    // Now you can use 'data' without TypeScript errors
    console.log(data);
    setLatestPostData(data);
  };
  const getPopularPost = async () => {
    const response = await getPopularPostFunc();

    let data: any;

    if (typeof response === "string") {
      // Handle the case where there is an error (response is a string)
      console.error("Error:", response);
    } else {
      // Handle the case where the request was successful (response is an AxiosResponse)
      data = response.data;
    }

    // Now you can use 'data' without TypeScript errors
    console.log(data);
    setPopularPostData(data);
  };

  const handleKeyDownSearch = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // e.preventDefault();
    // console.log(e.target.)
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();

      handleAfterEvent();
    }
  };

  useEffect(() => {
    getLatestPost();
    getPopularPost();
    focusInput();
  }, []);
  console.log("urlNow ", urlNow);
  return (
    <>
      <div className="mb-[3rem]">
        <div>
          <header className="bg-gray-50 mb-6 md:mb-4 ">
            <nav className="flex shadow-lg z-30 justify-between fixed top-0 bg-gray-50  dark:bg-gray-900 dark:shadow-blue-300 dark:shadow-sm items-center w-[100%] mx-auto px-1 py-3 ">
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3XnABTUt4Qc9bJpf67KlHp0T06Tc4UuwbFeNBOs95cQ5CaoWitFztCbjNXMkqbQGig4QpEqZMJlNh8cDvkll7n7M_9km8jZRCZbWEcxIAM98aWZ-aCkEr0NprFxi9kKoTpFYZt_ghD5rSf_QvUl-f3fSWuErxi81MLrTcqQyT2OFmYMtTHMPQJ_8FzRo/w640-h640/Copy%20of%20GWG%20(192%20x%20192%20px).png"
                    className="h-10 mr-1 rounded-full"
                    alt="GoodWayGiver Logo"
                  />
                  <span className="self-center text-xl sm:2xl font-semibold whitespace-nowrap dark:text-white">
                    <b className="text-blue-500">G</b>ood
                    <b className="text-[coral]">W</b>ay
                    <b className="text-[#ff00bb]">G</b>iver
                  </span>
                </Link>
              </div>
              <div
                className={`nav-links duration-500 md:static fixed justify-center  left-0 text-justify bg-gray-50 dark:bg-gray-900 dark:text-white md:min-h-fit  w-[100%] ${
                  isMenuOpen ? "top-[65px]" : "top-[-100%] "
                } md:w-auto flex w-full items-center `}
              >
                <ul className="flex md:flex-row flex-col items-start md:items-center text-bold lg:gap-[3.5vw] gap-4  ">
                  <li className="font-semibold text-lg">
                    <Link
                      href={"/"}
                      className={`block  ${
                        urlNow === "home"
                          ? "text-blue-700 dark:text-white underline underline-offset-8"
                          : "text-black"
                      }   dark:hover:text-white dark:text-gray-400 hover:text-blue-500 hover:underline hover:underline-offset-8`}
                      onClick={handleClick}
                      id="home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="font-semibold text-lg">
                    <Link
                      href={"/about"}
                      className={`block  ${
                        urlNow === "about"
                          ? "text-blue-700 dark:text-white underline underline-offset-8"
                          : "text-black"
                      }   dark:hover:text-white dark:text-gray-400 hover:text-blue-500 hover:underline hover:underline-offset-8`}
                      onClick={handleClick}
                      id="about"
                    >
                      About
                    </Link>
                  </li>
                  <li
                    className="font-semibold text-lg"
                    onClick={() => handlesetUrl("services")}
                  >
                    <Link
                      href={"/services"}
                      className={`block  ${
                        urlNow === "services"
                          ? "text-blue-700 dark:text-white underline underline-offset-8"
                          : "text-black"
                      }   dark:hover:text-white dark:text-gray-400 hover:text-blue-500 hover:underline hover:underline-offset-8`}
                      onClick={handleClick}
                      id="services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="font-semibold text-lg    ">
                    <div
                    // className={` ${
                    //   urlNow === "contact"
                    //     ? "text-blue-700 dark:text-white underline underline-offset-8"
                    //     : "text-black "
                    // } dark:text-gray-400  `}
                    >
                      <div className="dropdown dropdown-hover">
                        <label
                          tabIndex={0}
                          className={`dark:hover:text-white hover:text-blue-500 dark:text-gray-400 ${
                            urlNow === "contact"
                              ? "text-blue-700 dark:text-white underline underline-offset-8"
                              : "text-black"
                          }  font-semibold text-lg inline-flex bg-none  border-0 w-full justify-center items-center  rounded-md   `}
                        >
                          More
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <Link
                              href={"/services"}
                              className={`p-1 text-sm flex items-center  hover:text-white dark:hover:text-white hover:bg-blue-500 rounded-md  w-[100%]  ${
                                urlNow === "contact"
                                  ? "text-white bg-blue-500 rounded-md"
                                  : "text-black dark:text-white"
                              }   dark:hover:text-white`}
                              onClick={handleClick}
                              id="contact"
                            >
                               <p
                                title="Contact me"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start pr-1"
                              >
                                Contact
                              </p>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://shop.goodwaygiver.site"
                              passHref
                              target="_blank"
                              className="mt-1 p-1 text-sm flex items-center  hover:text-white dark:hover:text-white hover:bg-blue-500 rounded-md  w-[100%] "
                            >
                              <p
                                title="Go to Our Shop"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start pr-1"
                              >
                                Shop 🛍️
                              </p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-[0.6rem]">
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className={`relative hidden md:flex md:items-center `}>
                    <div className="absolute   inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className={`w-4 h-4 text-gray-500  dark:text-gray-400 hidden md:block `}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="default-search mySearch"
                      className="block w-full h-[38px] px-4 pl-10 text-sm border-r-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search...."
                      ref={inputRef}
                      // value={searchInput}
                      style={{ borderRadius: "12px 0px 0px 45px" }}
                      onKeyDown={handleKeyDownSearch}
                      onChange={(e) => changeInpValue(e)}
                    />{" "}
                    <button
                      type="button"
                      style={{ borderRadius: "0px 43px 12px 0px" }}
                      onClick={(e) => handleSeachPost(e)}
                      className="text-white  bg-gradient-to-r from-blue-500 border-l-0 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-[0.55rem] text-center m-0"
                    >
                      Search
                    </button>
                  </div>
                </form>
                {/* <ion-icon onClick={toggleMenu} name={isMenuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden"></ion-icon> */}
                <FaSearch
                  className="h-6 w-6 cursor-pointer block md:hidden dark:text-white"
                  onClick={handleIsSearchOpen}
                ></FaSearch>

                {!isMenuOpen && (
                  <svg
                    onClick={toggleMenu}
                    className="text-3xl focus:ring-4  cursor-pointer block md:hidden w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                )}
                {isMenuOpen && (
                  <svg
                    onClick={toggleMenu}
                    className="w-5 h-5 text-gray-800 focus:ring-4  dark:text-white md:w-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                )}
              </div>
            </nav>
          </header>
        </div>
        {/* <hr className=" border border-t-2 text-black rounded-lg" /> */}
        {isSearchOpen && (
          <div className="serachforphone">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div
                className={`fixed w-[100%] top-[3.5rem] z-[30] bg-gray-50 flex items-center
            p-[3px] md:hidden dark:bg-gray-900`}
              >
                <div className="absolute   inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className={`w-4 h-4   text-gray-500  dark:text-gray-400 block
                ml-2`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="default-search mySearch text-semibold"
                  className="block w-full h-[38px] px-4 pl-10 text-sm border-r-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search ..."
                  required
                  ref={inputRef}
                  onChange={(e) => changeInpValue(e)}
                  // value={searchInput}
                  onKeyDown={handleKeyDownSearch}
                  style={{ borderRadius: "12px 0px 0px 45px" }}
                />
                <button
                  style={{ borderRadius: "0px 43px 12px 0px" }}
                  type="button"
                  onClick={(e) => handleSeachPost(e)}
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br m-0 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-[0.55rem] text-center "
                >
                  Search
                </button>
              </div>
            </form>{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default MyNavbar;

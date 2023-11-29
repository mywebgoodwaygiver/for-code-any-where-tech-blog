'use client'

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { checkUrl } from "./UrlNow";
import DarkMode from "../components/DarkMode";

interface DropdownConstantProps {}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const DropdownConstant: React.FC<DropdownConstantProps> = () => {
  const urlNow = checkUrl();

  return (
    <>
      <div className="flex items-center justify-center ">
        <Menu as="div" className="relative inline-block border-0 text-left">
          <div>
            <Menu.Button
              className={`dark:hover:text-white hover:text-blue-500 dark:text-gray-400 ${
                urlNow === "contact" ? "text-blue-700 dark:text-white" : "text-black"
              }  font-semibold text-lg inline-flex bg-none  border-0 w-full justify-center items-center  rounded-md   `}
            >
              More
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-0.5 w-[170px] text-justify origin-top-right rounded-md bg-white shadow-lg ring-1 hover:text-white ring-black ring-opacity-5 focus:outline-none">
              <div className="py-0">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/contact"
                      passHref
               
                        className={classNames(
                          urlNow === "contact"
                            ? "text-blue-700 hover:text-white"
                            : "text-black ",
                          "block px-4 py-2 text-sm  hover:text-white  hover:bg-blue-500 rounded-md  w-[100%] "
                        )}
                      >
                        Contact
                 
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="https://shop.goodwaygiver.site"
                      passHref
                  
                        target="_blank"
                        className={classNames(
                          active ? "bg-blue-500 text-white" : "text-gray-700",
                          " px-4 py-2 text-sm flex items-center  hover:bg-blue-500 rounded-md  w-[100%] "
                        )}
                      >
                        <p className="pr-1">Our Shop</p>
                        <svg
                          className="w-4 h-4 text-gray-800 hover:text-white dark:hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                     
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  <p
                    className={`
                    block border-t-2 text-lg text-start  dark:text-gray-400 border-t-1 hover:text-white   rounded-md  w-[100%]
                  `}
                  >
                    <DarkMode></DarkMode>
                  </p>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default DropdownConstant;

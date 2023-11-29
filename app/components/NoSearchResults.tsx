import React from "react";

const NoSearchResults = () => {
  return (
    <>
    <div className="w-[100%] flex flex-col justify-center items-center">   <section className="bg-[azure] dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-primary-600  text-[red] dark:text-primary-500 dark:text-white">
              No Results found
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>

            <button
              type="button"
              className="text-white font-extrabold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              No Search Results
            </button>
          </div>
        </div>
      </section></div>
   
    </>
  );
};

export default NoSearchResults;

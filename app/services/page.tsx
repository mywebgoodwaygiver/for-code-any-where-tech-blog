import React from "react";

const ServicesPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
          <div className="mr-auto place-self-center  lg:col-span-7">
            <h1 className="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Our Services
            </h1>
            <h1 className="max-w-2xl mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
              1. Good Way Giver Shop
            </h1>
            <p className="max-w-2xl mb-6 mx-4 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This is our eCommerce website, where you'll discover a fantastic selection of products handpicked just for you. We've joined Amazon's affiliate program to bring you the best deals and top-quality items. It's as simple as this: you browse, you shop, and we earn a little something for helping you find what you need and a better product.
            </p>
            <a
              target="_blank"
              href="https://shop.goodwaygiver.site"
              className="inline-flex mx-4  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-200  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <b className="px-1 ">Go To Shop</b>{" "}
              <svg
                className="w-6 h-6 dark:filter dark:invert hover:text-white text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ff "
                viewBox="0 0 18 18"
              >
                <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
              </svg>
            </a>
          </div>
          <div className=" flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
            <img
            className="rounded-full"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif"
              alt="GWG Logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

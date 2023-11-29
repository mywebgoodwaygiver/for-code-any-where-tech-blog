'use client'

import React, { useContext, useEffect } from 'react';
import { Mode } from './context/ContextProvider';

const DarkMode: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(Mode)!;

  useEffect(() => {
    const currentTheme = localStorage.getItem('color-theme');
    console.log("mode=> ", currentTheme);

    if (currentTheme === "dark") {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, [setIsDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('color-theme', newMode ? 'dark' : 'light');
    setIsDarkMode(newMode);
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className={`text-black w-[100%]  py-2 dark:text-gray-200 hover:bg-blue-500 hover:text-white  focus:outline-none flex focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm`}
      onClick={toggleDarkMode}
    >
      <div className="text ml-4 text-md pr-1 text-start font-semibold hover:text-white dark:hover:text-white text-black dark:text-black">
        {isDarkMode ? "Light" : "Dark"}
      </div>
      <svg
        className={`w-5 h-5 ${!isDarkMode ? '' : 'hidden'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark mode SVG path */}
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        ></path>
      </svg>
      <svg
        className={`w-5 h-5 ${isDarkMode ? '' : 'hidden'} hover:text-white`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Light mode SVG path */}
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default DarkMode;

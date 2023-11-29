'use client'


import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  textStyle?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 100, textStyle }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    const typingInterval = speed; // Adjust typing speed here

    const type = () => {
      const word = words[currentWordIndex];
      setCurrentWord((prevWord) => {
        if (isDeleting) {
          if (prevWord.length > 0) {
            return prevWord.slice(0, -1);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            return "";
          }
        } else {
          if (prevWord.length < word.length) {
            return word.slice(0, prevWord.length + 1);
          } else {
            setIsDeleting(true);
            return prevWord;
          }
        }
      });
    };

    const cursorInterval = 500; // Adjust cursor blinking speed here

    const toggleCursor = () => {
      setCursorVisible((prev) => !prev);
    };

    const typingIntervalId = setInterval(type, typingInterval);
    const cursorIntervalId = setInterval(toggleCursor, cursorInterval);

    return () => {
      clearInterval(typingIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, [currentWord, currentWordIndex, isDeleting, speed, words]);

  return (
    <>
      <p
        className={`typing-effect block text-center h-6 ${
          currentWordIndex === 0 ? ` ${textStyle || "text-red-500"}` : "" || 
          currentWordIndex === 1 ? "text-blue-500" : "" || 
          currentWordIndex === 2 ? "text-red-500" : ""
        }`}
      >
        {currentWord}
        {cursorVisible && <b className="pl-1 text-red-500">|</b>}
      </p>
    </>
  );
};

export default Typewriter;

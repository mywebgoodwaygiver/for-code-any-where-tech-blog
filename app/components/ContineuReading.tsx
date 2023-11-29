'use client'

import React, { useState, useEffect } from "react";

function ContineuReading() {
  const words: string[] = ["Continue Reading"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingInterval = 100; // Adjust typing speed here

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
  }, [currentWord, currentWordIndex, isDeleting]);

  return (
    <>
      <p className={`typing-effect block text-center h-6 text-black `}>
        {currentWord}
        {cursorVisible && <b className="pl-1 text-black">&#187;&#187;</b>}
      </p>
    </>
  );
}

export default ContineuReading;

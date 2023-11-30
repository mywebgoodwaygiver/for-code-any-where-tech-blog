"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IncrementViewsProps {
  url: string;
}

const IncrementViews: React.FC<IncrementViewsProps> = ({ url }) => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const handleIncrementViews = async () => {
    if (timer >= 15) {
      // Make a request to your backend to increment views for this post.
      await axios.post(`https://data.goodwaygiver.site/post/increment-views/${url}`);
      // https://data.goodwaygiver.site/post/increment-views/
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer >= 15) {
          clearInterval(id); // Clear the interval when the timer reaches 16
          return prevTimer;
        }
        return prevTimer + 1;
      });
    }, 1000);

    // Store the interval ID for cleanup.
    setIntervalId(id);

    // Clean up the interval when the component unmounts.
    return () => clearInterval(intervalId!); // Add a null check to intervalId
  }, [intervalId]);



  useEffect(() => {
    handleIncrementViews();
  }, [timer]);

  return <></>; // Replace with your actual component JSX
};

export default IncrementViews;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IncrementViews({ url }) {

  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

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
    return () => clearInterval(intervalId);
  }, []);

  const handleIncrementViews = async () => {
    if (timer >= 15) {
      // Make a request to your backend to increment views for this post.
      await axios.post(`https://data.goodwaygiver.site/post/increment-views/${url}`);
      // https://data.goodwaygiver.site/post/increment-views/
    }
  };
handleIncrementViews();

  return (
 <></>
  );
}

export default IncrementViews;

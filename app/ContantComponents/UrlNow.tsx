"use client"
import { useEffect, useState } from 'react';

export const checkUrl = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Check if we are in the client-side environment
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  switch (currentPath) {
    case "/about":
      return "about";
    case "/contact":
      return "contact";
    case "/services":
      return "services";
    default:
      return "home";
  }
};



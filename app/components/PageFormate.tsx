
'use client'


import React, { ReactNode } from 'react';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import AfterPage from './AfterPage';

interface PageFormatProps {
  children: ReactNode;
}

const PageFormate: React.FC<PageFormatProps> = ({ children }) => {
  return (
    <>
      <MyNavbar />
      {children}
      <AfterPage />
      <Footer />
    </>
  );
};

export default PageFormate;

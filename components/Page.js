import React, { createContext } from 'react';
// import Image from "next/image";

import Header from './Header';
import Navbar from './Navbar';
import Contact from './Contact';

const Page = ({ siteTitle, ...props }) => {
  return (
    <main>
      <Header siteTitle={siteTitle} />
      <Navbar />
      <img
        className="background-callout"
        id="first-callout"
        src="/img/site/callout1.svg"
        alt="first color callout"
      />
      {props.children}
      <Contact />
    </main>
  );
};

export default Page;

import React, { createContext } from 'react';
import Image from 'next/image';

import Header from './Header';
import Navbar from './Navbar';
import Contact from './Contact';

const Page = ({ siteTitle, ...props }) => {
  return (
    <main>
      <Header siteTitle={siteTitle} />
      <Navbar />
      <div className="background-callout" id="first-callout">
        <Image fill src="/img/site/callout1.svg" alt="first color callout" />
      </div>
      {props.children}
      <Contact />
    </main>
  );
};

export default Page;

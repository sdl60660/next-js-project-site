import React, { createContext } from 'react';
import Image from 'next/image';

import Header from './Header';
import Navbar from './Navbar';
import Contact from './Contact';

const Page = ({ siteTitle, description, showCallout = true, ...props }) => {
  return (
    <main>
      <Header siteTitle={siteTitle} description={description} />
      <Navbar />
      {showCallout === true && (
        <div className="background-callout" id="first-callout">
          <Image
            fill
            src="/img/site/callout1.svg"
            alt="first color callout"
            priority
          />
        </div>
      )}
      {props.children}
      <Contact />
    </main>
  );
};

export default Page;

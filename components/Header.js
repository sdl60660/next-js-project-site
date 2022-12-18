import React from "react";
import Head from "next/head";

const Header = ({
  siteTitle,
  description = "Sam Learner code/visualization portfolio site.",
}) => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />

      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />

      <link rel="icon" href="/img/site/callout1_cropped.svg" />
      <link rel="apple-touch-icon" href="/img/site/callout1_cropped.svg" />
    </Head>
  );
};

export default Header;

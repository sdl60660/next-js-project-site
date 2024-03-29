import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f3f3f3" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.samlearner.com/" />
        <meta
          property="og:image"
          content="https://www.samlearner.com/img/site/callout1.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.samlearner.com/" />
        <meta
          property="twitter:image"
          content="https://www.samlearner.com/img/site/callout1.svg"
        />

        {/* Downloaded fonts are now being loaded in in /asset/fonts */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Roboto+Mono:wght@400;500;600;700&family=Noto+Serif+TC:wght@500;700&family=Noto+Serif+TC:wght@500;700&family=Yantramanav:wght@300;400;500;700&display=block"
          rel="stylesheet"
          as="font"
        /> */}

        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CK69LSY3T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1CK69LSY3T');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

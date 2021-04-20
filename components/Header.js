import React from 'react';
import Head from 'next/head'

const Header = ({ siteTitle }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#f3f3f3" />

            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content="Sam Learner code/visualization portfolio site." />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content="Sam Learner code/visualization portfolio site." />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content="Sam Learner code/visualization portfolio site."></meta>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Yantramanav:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-1CK69LSY3T"
            />
            <script
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-1CK69LSY3T');
                `,
            }}
            />
        </Head>
    )
}

export default Header;
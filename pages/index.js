import Head from 'next/head'
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#f3f3f3" />

        <title>Sam Learner Projects</title>
        <meta name="title" content="Sam Learner Projects" />
        <meta name="description" content="Sam Learner code/visualization portfolio site." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sam Learner Projects" />
        <meta property="og:description" content="Sam Learner code/visualization portfolio site." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Sam Learner Projects" />
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
      <img class="background-callout" id="first-callout" src="/img/callout1.svg" alt="first color callout"/>
      <Projects />
      <Contact />
    </div>
  )
}

// <img class="background-callout" id="second-callout" src="/img/callout2.svg" alt="second color callout"/>

import Head from 'next/head'
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import styles from '../styles/Home.module.css'

import projectData from '../public/data/project_data.json';
import contactData from '../public/data/contact_data.json';

// console.log(projectData, contactData);

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
      <Projects />
      <Contact />
    </div>
  )
}

import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <img class="background-callout" id="first-callout" src="/img/callout1.svg" alt="first color callout"/>
      <Projects />
      <Contact />
    </div>
  )
}

// <img class="background-callout" id="second-callout" src="/img/callout2.svg" alt="second color callout"/>

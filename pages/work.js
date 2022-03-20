import Header from "../components/Header";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Header siteTitle={"Sam Learner - Work"} />
      <Navbar />
      <img
        className="background-callout"
        id="first-callout"
        src="/img/site/callout1.svg"
        alt="first color callout"
      />
      <Work />
      <Contact />
    </div>
  );
}

// <img class="background-callout" id="second-callout" src="/img/site/callout2.svg" alt="second color callout"/>

import Header from "../../components/Header";
import WorkDisplay from "../../components/WorkDisplay";
import Contact from "../../components/Contact"
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function Work() {
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
      <WorkDisplay />
      <Contact />
    </div>
  );
}

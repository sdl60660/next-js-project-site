import Header from "../../components/Header";
import ProjectDisplay from "../../components/ProjectDisplay";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <Header siteTitle={"Sam Learner - Projects"} />
      <Navbar />
      <img
        className="background-callout"
        id="first-callout"
        src="/img/site/callout1.svg"
        alt="first color callout"
      />
      <ProjectDisplay />
      <Contact />
    </div>
  );
}

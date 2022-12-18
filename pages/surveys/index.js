import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";

import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/Surveys.module.scss";

export default function Surveys() {
  return (
    <div>
      <Header siteTitle={"Sam Learner - Surveys"} />
      <Navbar />
      <div className={styles.container} id={styles["project-container"]}>
        <div className={styles.row}>
          <h2 className={styles["project-header"]}>Surveys</h2>
        </div>

        <div className={styles["intro-text"]}>
          <p>
            I've got some longer-term project ideas or interests that involve collecting some crowd-sourced
            data. I'm leaving a running list of these active projects with links to collection forms
            here to passively collect some responses and feel free to contribute if you feel
            inclined. None of these will involve submitting contact information or
            personally-identifying information:
          </p>
          <ul>
            <li>
              <Link href={"/surveys/handwriting"}>Handwriting Samples</Link>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}
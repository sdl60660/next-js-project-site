import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";

import styles from "../../styles/Surveys.module.scss";

export default function Home() {
  return (
    <div>
      <Header siteTitle={"Sam Learner - Handwriting Samples"} />
      <Navbar />
      <div className={styles.container} id={styles["project-container"]}>
        <div className={styles.row}>
          <h2 className={styles["project-header"]}>Handwriting Samples</h2>
        </div>
      </div>
      <Contact />
    </div>
  );
}

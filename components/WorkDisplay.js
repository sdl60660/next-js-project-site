import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Project from "./Project";
import workData from "../public/data/work_data.json";

const Work = () => {
  const [featuredProject, setFeaturedProject] = useState(null);

  return (
    <div className={styles.container} id={styles["project-container"]}>
      <div className={styles.row}>
        <h2 className={styles["project-header"]}>Work</h2>
      </div>

      <div className={styles.row}>
        {workData
          .filter(({ visible }) => visible === "true")
          .map((project) => (
            <Project
              {...project}
              featuredProject={featuredProject}
              setFeaturedProject={setFeaturedProject}
            />
          ))}
      </div>
    </div>
  );
};

export default Work;

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import Project from './Project';
import projectData from '../public/data/project_data.json';

const Projects = () => {
    const [featuredProject, setFeaturedProject] = useState(null);

    return (
        <div className={styles.container} id={styles["project-container"]}>
            <div className={styles.row}>
                <h2 id={styles["project-header"]}>Web Projects</h2>
            </div>

            <div className={styles.row}>
            {
                projectData
                    .filter(({ visible }) => visible === "true")
                    .map((project) => (
                        <Project {...project} featuredProject={featuredProject} setFeaturedProject={setFeaturedProject} />
                ))
            }
            </div>

            <br/>

            <div className={styles.row}>
                <h2 id={styles["project-header"]}>Other Projects</h2>
            </div>

            <div className={styles.row}>
                <Project project_link={'/drumset'} title={"Light-Up Drumset"} image={"drumset-preview.png"} added_classes={"dark-fill"} featuredProject={featuredProject} setFeaturedProject={setFeaturedProject} />
            </div>
        </div>
    )
  }

export default Projects;
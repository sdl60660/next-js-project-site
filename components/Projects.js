import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import projectData from '../public/data/project_data.json';

const Projects = () => {
    return (
        <div className={styles.container} id={styles["project-container"]}>
            <div className={styles.row}>
            <h2 id={styles["project-header"]}>Projects</h2>
            </div>

            <div className={styles.row}>
            {
                projectData.map(({ project_link, title, image, added_classes }) => (
                    <a key={title} target="_blank" href={project_link} className={styles.project}>
                        <div className={styles["project__image-wrapper"]}>
                        <div className={`${styles["project__preview-image"]} ${added_classes !== "" ? styles[added_classes] : ""}`}>
                            <img src={`/img/${image}`} alt={title} />
                        </div>
                        <span className={styles.caption}>{title}</span>
                        </div>
                    </a>
                ))
            }
            </div>
        </div>
    )
  }

export default Projects;
  
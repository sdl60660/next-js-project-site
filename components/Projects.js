import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import projectData from '../public/data/project_data.json';

const Projects = () => {
    const [featuredProject, setFeaturedProject] = useState(null);

    useEffect(() => {

    })

    return (
        <div className={styles.container} id={styles["project-container"]}>
            <div className={styles.row}>
            <h2 id={styles["project-header"]}>Projects</h2>
            </div>

            <div className={styles.row}>
            {
                projectData
                    .filter(({ visible }) => visible === "true")
                    .map(({ project_link, title, image, added_classes }) => (
                        <a
                            key={title}
                            target="_blank"
                            href={project_link}
                            className={styles.project}
                        >
                            <div className={styles["project__image-wrapper"]}>
                                <div
                                    className={`${styles["project__preview-image"]} ${added_classes !== "" ? styles[added_classes] : ""}`}
                                    data-info={JSON.stringify(title)}
                                    onMouseEnter={(e) => {
                                        setFeaturedProject(e.target.dataset.info);
                                        // featuredProject.current = e.target.dataset.info;
                                        // console.log(featuredProject.current)
                                    }}
                                    onMouseLeave={() => { setFeaturedProject(null) }}
                                    style={{
                                            opacity: featuredProject === null ? 0.8 : featuredProject === JSON.stringify(title) ? 1.0 : 0.5,
                                            transform: featuredProject === JSON.stringify(title) ? "scale(1.05)" : "scale(1)"
                                        }}
                                >
                                    <img src={`/img/${image}`} alt={title} data-info={JSON.stringify(title)} />
                                </div>
                                <span className={styles.caption}>{title.split('\n').map((chunk, i) => <div key={i}>{chunk}</div>)}</span>
                            </div>
                        </a>
                ))
            }
            </div>
        </div>
    )
  }

export default Projects;
  
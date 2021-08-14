import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Project = ({ project_link, title, image, added_classes, featuredProject, setFeaturedProject }) => {
    return (
        <Link href={project_link}>
            <a
                key={title}
                target={project_link.includes(".") ? "_blank" : ""}
                className={styles.project}
            >
                <div className={styles["project__image-wrapper"]}>
                    <div
                        className={`${styles["project__preview-image"]} ${added_classes !== "" ? styles[added_classes] : ""}`}
                        data-info={JSON.stringify(title)}
                        onMouseEnter={(e) => {
                            setFeaturedProject(e.target.dataset.info);
                        }}
                        onMouseLeave={() => { setFeaturedProject(null) }}
                        style={{transform: featuredProject === JSON.stringify(title) ? "scale(1.05)" : "scale(1)"}}
                    >
                        <img src={`/img/${image}`} alt={title} data-info={JSON.stringify(title)} style={{ opacity: featuredProject === null ? 0.8 : featuredProject === JSON.stringify(title) ? 1.0 : 0.5}}/>
                    </div>
                    <span className={styles.caption}>{title.split('\n').map((chunk, i) => <div key={i}>{chunk}</div>)}</span>
                </div>
            </a>
        </Link>
    )
}

export default Project;

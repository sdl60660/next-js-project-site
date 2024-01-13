import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';
import Project from './Project';
import projectData from '../public/data/project_data.json';

const ProjectDisplay = () => {
  const [featuredProject, setFeaturedProject] = useState(null);

  return (
    <div className={styles.container} id={styles['project-container']}>
      <div className={classNames(styles.row, styles['header-row'])}>
        <h2 className={styles['project-header']}>Web Projects</h2>
      </div>

      <div className={styles.row}>
        {projectData
          .filter(({ visible }) => visible === 'true')
          .map((project, index) => (
            <Project
              key={project.project_link}
              {...project}
              featuredProject={featuredProject}
              setFeaturedProject={setFeaturedProject}
              index={index}
            />
          ))}
      </div>

      <br />

      <div className={classNames(styles.row, styles['header-row'])}>
        <h2 className={styles['project-header']}>Other Projects</h2>
      </div>

      <div className={styles.row}>
        <Project
          project_link={'/projects/drumset'}
          title={'Light-Up Drumset'}
          image={'projects/drumset-preview.png'}
          added_classes={'dark-fill'}
          featuredProject={featuredProject}
          setFeaturedProject={setFeaturedProject}
        />
      </div>
    </div>
  );
};

export default ProjectDisplay;

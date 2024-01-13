import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from '../styles/Home.module.scss';
import Project from './Project';
import workData from '../public/data/work_data.json';

const Work = () => {
  const [featuredProject, setFeaturedProject] = useState(null);

  return (
    <div className={styles.container} id={styles['project-container']}>
      <div className={classNames(styles.row, styles['header-row'])}>
        <h2 className={styles['project-header']}>Work</h2>
      </div>

      <div className={styles.row}>
        {workData
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
    </div>
  );
};

export default Work;

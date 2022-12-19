import React, { useState, useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ColorThief from 'colorthief';

import { useMediaQuery } from './util/media-query';

import styles from '../styles/Home.module.scss';

const getImageColor = (imageRef) => {
  const colorThief = new ColorThief();
  return colorThief.getColor(imageRef);
};

const publicationStyleInfo = [
  {
    name: 'Financial Times',
    backgroundColor: '#fff1e5',
    color: '#000000',
  },
  {
    name: 'New York Times',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  {
    name: 'The Pudding',
    backgroundColor: '#a973ff',
    color: '#ffffff',
  },
];

const Project = ({
  project_link,
  title,
  image,
  publication,
  date,
  added_classes,
  featuredProject,
  setFeaturedProject,
  overrideBackground = false,
  background_color = null,
  index = 1000,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(
    background_color || '#f9f9f9',
  );
  const imageRef = useRef(null);

  const isMobile = useMediaQuery(768);

  const pubTagStyle =
    (publication && publicationStyleInfo.find((d) => publication === d.name)) ||
    {};

  useEffect(() => {
    if (imageRef.current === null || background_color !== null) {
      return;
    }

    try {
      const color = getImageColor(imageRef.current);
      setBackgroundColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    } catch {
      return;
    }
  }, [imageRef]);

  return (
    <Link
      href={project_link}
      key={title}
      target={project_link.includes('.') ? '_blank' : ''}
      rel="noreferrer"
      className={styles.project}
    >
      <div className={styles['project__image-wrapper']}>
        <div
          key={'image'}
          className={`${styles['project__preview-image']} ${
            added_classes !== '' ? styles[added_classes] : ''
          }`}
          data-info={JSON.stringify(title)}
          onMouseEnter={(e) => {
            setFeaturedProject(e.target.dataset.info);
          }}
          onMouseLeave={() => {
            setFeaturedProject(null);
          }}
          style={{
            transform:
              featuredProject === JSON.stringify(title)
                ? 'scale(1.05)'
                : 'scale(1)',
            backgroundColor: overrideBackground ? backgroundColor : null,
          }}
        >
          <div className={styles['inner-wrapper']}>
            <Image
              ref={imageRef}
              src={`/img/${image}`}
              fill
              alt={title}
              data-info={JSON.stringify(title)}
              onLoad={() => {
                if (background_color === null && overrideBackground === true) {
                  const color = getImageColor(imageRef.current);
                  setBackgroundColor(
                    `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                  );
                }
              }}
              style={{
                opacity: featuredProject === JSON.stringify(title) ? 1.0 : 0.9,
                objectFit: 'contain',
              }}
              sizes="(max-width: 768px) 300px,
              (max-width: 1050px) 300px,
              300px"
              priority={isMobile ? index < 2 : index < 6}
            />
          </div>
        </div>
        <div className={styles.caption} key={'caption'}>
          <p>
            {title}
            {publication && (
              <span className={styles['pub-info']} style={{ ...pubTagStyle }}>
                {publication}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Project;

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ColorThief from 'colorthief';

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
    color: '#000000',
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
}) => {
  const [backgroundColor, setBackgroundColor] = useState('#f9f9f9');
  const imageRef = useRef(null);

  const pubTagStyle =
    (publication && publicationStyleInfo.find((d) => publication === d.name)) ||
    {};

  useEffect(() => {
    if (!imageRef.current) {
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
                const color = getImageColor(imageRef.current);
                setBackgroundColor(
                  `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                );
              }}
              style={{
                opacity: featuredProject === JSON.stringify(title) ? 1.0 : 0.9,
                objectFit: 'contain',
              }}
              sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
            />
          </div>
        </div>
        <div className={styles.caption} key={'caption'}>
          <p>
            {title}
            {publication && (
              <span className={styles['pub-info']} style={{...pubTagStyle}}>
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

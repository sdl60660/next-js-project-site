import React, { useState, useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ColorThief from 'colorthief';
import classNames from 'classnames';

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
  pdf_path,
  title,
  image,
  publication,
  date,
  added_classes = [],
  featuredProject,
  setFeaturedProject,
  overrideBackground = false,
  background_color = null,
  objectPosition = '50% 50%',
  index = 1000,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(background_color || '#f9f9f9');
  const imageRef = useRef(null);
  const isMobile = useMediaQuery(768);

  const pubTagStyle =
    (publication && publicationStyleInfo.find((d) => publication === d.name)) || {};

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
    <div className={styles.project}>
      <div className={styles['project__image-wrapper']}>
        <Link
          href={project_link}
          key={`${title}-image`}
          target={project_link.includes('.') ? '_blank' : ''}
          rel="noreferrer"
        >
          <div
            key={'image'}
            className={classNames(
              styles['project__preview-image'],
              ...added_classes.map((d) => styles[d]),
            )}
            data-info={JSON.stringify(title)}
            style={{
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
                    setBackgroundColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
                  }
                }}
                style={{
                  objectPosition,
                }}
                sizes="(max-width: 768px) 350px,
              (max-width: 1050px) 450px, 600px"
                priority={isMobile ? index < 2 : index < 6}
              />
            </div>
          </div>
        </Link>
        <div className={styles.caption} key={'caption'}>
          <p>
            <Link
              href={project_link}
              key={`${title}-title`}
              target={project_link.includes('.') ? '_blank' : ''}
              rel="noreferrer"
            >
              {title}
            </Link>
            {pdf_path && (
              <>
                {' '}
                [
                <Link
                  key={`${title}-pdf-link`}
                  className={styles['pdf-link']}
                  href={pdf_path}
                  target="_blank"
                  rel="noreferrer"
                >
                  PDF
                </Link>
                ]
              </>
            )}
            {publication && (
              <Link
                href={project_link}
                key={`${title}-publication-pill`}
                target={project_link.includes('.') ? '_blank' : ''}
                rel="noreferrer"
              >
                <span className={styles['pub-info']} style={{ ...pubTagStyle }}>
                  {publication}
                </span>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;

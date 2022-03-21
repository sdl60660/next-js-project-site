import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ColorThief from "colorthief";

import styles from "../styles/Home.module.css";

const getImageColor = (imageRef) => {
  const colorThief = new ColorThief();
  // const img = document.querySelector(imageRef);
  return colorThief.getColor(imageRef);
};

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
  const [backgroundColor, setBackgroundColor] = useState("#f9f9f9");
  const imageRef = useRef(null);

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
    <Link href={project_link}>
      <a key={title} target={project_link.includes(".") ? "_blank" : ""} className={styles.project}>
        <div className={styles["project__image-wrapper"]}>
          <div
            className={`${styles["project__preview-image"]} ${
              added_classes !== "" ? styles[added_classes] : ""
            }`}
            data-info={JSON.stringify(title)}
            onMouseEnter={(e) => {
              setFeaturedProject(e.target.dataset.info);
            }}
            onMouseLeave={() => {
              setFeaturedProject(null);
            }}
            style={{
              transform: featuredProject === JSON.stringify(title) ? "scale(1.05)" : "scale(1)",
              backgroundColor: overrideBackground ? backgroundColor : null,
            }}
          >
            <img
              ref={imageRef}
              src={`/img/${image}`}
              alt={title}
              data-info={JSON.stringify(title)}
              onLoad={() => {
                const color = getImageColor(imageRef.current);
                setBackgroundColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
              }}
              style={{
                opacity: featuredProject === JSON.stringify(title) ? 1.0 : 0.9,
              }}
            />
          </div>
          <div className={styles.caption}>
            <p>
              {title}
              {publication && (
                <>
                  {" "}
                  •{" "}
                  <span className={styles["pub-info"]}>
                    {publication}
                    {/* {new Date(date).toLocaleDateString("default", {
                      month: "short",
                      year: "numeric",
                    })} */}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Project;

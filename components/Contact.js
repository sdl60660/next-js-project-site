import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import contactData from "../public/data/contact_data.json";

const Contact = () => {
  return (
    <div id={styles["contact-info-wrapper"]}>
      <div id={styles["contact-info"]}>
        {contactData.map(({ title, link, image }) => (
          <a key={title} title={title} target="_blank" href={link} rel="noreferrer">
            <Image
              width="32"
              height="32"
              className={styles["icon-img"]}
              src={`/img/${image}`}
              alt={title}
              priority
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

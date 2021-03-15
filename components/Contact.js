import React from 'react';
import styles from '../styles/Home.module.css';

import contactData from '../public/data/contact_data.json';

const Contact = () => {
    return (
        <div id={styles["contact-info-wrapper"]}>
            <div id={styles["contact-info"]}>
                { contactData.map(({title, link, image}) => (
                    <a key={title} title={title} target="_blank" href={link}>
                        <img className={styles["icon-img"]} src={`/img/${image}`} alt={title} />
                    </a>
                ))}
            </div>
        </div>
    )
  }

export default Contact;
  
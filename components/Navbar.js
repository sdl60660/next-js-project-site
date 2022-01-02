import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__main-site-link"]}>
        <Link href="/">
          <a>
            <button>Main Site</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

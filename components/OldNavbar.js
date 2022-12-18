import React from "react";
import Link from "next/link";
import styles from "../styles/OldNavbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__main-site-link"]}>
        <Link href="/">
          <button>Main Site</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

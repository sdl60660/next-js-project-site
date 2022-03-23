import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const NavbarLink = ({ path, label }) => {
  const router = useRouter();
  const truePath = router.pathname === "/" ? "/projects" : router.pathname;

  return (
    <Link href={path}>
      <div>
        <a
          className={`${styles["navbar-link"]} ${
            truePath.includes(path) ? styles["active-link"] : null
          }`}
        >
          {label}
        </a>
      </div>
    </Link>
  );
};

export default NavbarLink;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const NavbarLink = ({ path, label }) => {
  const router = useRouter();
  const truePath = router.pathname === "/" ? "/projects" : router.pathname;

  return (
    <Link
      href={path}
      className={`${styles["navbar-link"]} ${
        truePath.includes(path) ? styles["active-link"] : null
      }`}
    >
      <div>{label}</div>
    </Link>
  );
};

export default NavbarLink;

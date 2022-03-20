import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const NavbarLink = ({ path, label }) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div>
        <a
          className={`${styles["navbar-link"]} ${
            router.pathname === path ? styles["active-link"] : null
          }`}
        >
          {label}
        </a>
      </div>
    </Link>
  );
};

export default NavbarLink;

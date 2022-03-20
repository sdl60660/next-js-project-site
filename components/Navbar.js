import React from "react";
import NavbarLink from "./NavbarLink";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarLink path={"/"} label={"Projects"} />
      <NavbarLink path={"/work"} label={"Work"} />
    </div>
  );
};

export default Navbar;

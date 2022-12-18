import React from "react";
import NavbarLink from "./NavbarLink";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarLink path={"/projects"} label={"Projects"} />
      <NavbarLink path={"/work"} label={"Work"} />
      {/* <NavbarLink path={"/surveys"} label={"Surveys"} /> */}
    </div>
  );
};

export default Navbar;

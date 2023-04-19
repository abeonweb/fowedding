"use client"
import React from "react";
import styles from "../css/navigation.module.css";
import {Link} from "react-router-dom"
import { Fade } from "react-awesome-reveal";
import { scrollIntoTheView } from "../utils/scroll.js";
import useOpen from "../utils/useOpen";

const Navigation = () => {
  const { open, handleClick } = useOpen();

  return (
    <header
      id="header"
      className={`${styles.header} ${open ? styles.navOpen : null}`}
    >
      <div className={styles.navContent}>
        <div className={styles.navLogo}>
          <div>
            <Link href="/" onClick={() => {scrollIntoTheView("home")}} className={styles.navTitleLink}>
              <h1 className={styles.pageTitle}>Folake &amp; Oluwole</h1>
            </Link>
          </div>
        </div>
        <div onClick={handleClick} className={styles.menuIcon}>
          <span className={styles.hamburger}></span>
        </div>

        <nav className={styles.nav}>
          <Fade>
            <ul className={styles.navList}>
              <li
                className={styles.navListItem}
                onClick={() => {scrollIntoTheView("home"); handleClick()}}
              >
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li
                className={styles.navListItem}
                onClick={() => {scrollIntoTheView("gallery"); handleClick()}}
              >
                <Link
                  href="#gallery"
                  className={styles.navLink}
                >
                  Gallery
                </Link>
              </li>
              <li
                className={styles.navListItem}
                onClick={() => {scrollIntoTheView("locations"); handleClick()}}
              >
                <Link
                  href="#locations"
                  className={styles.navLink}
                >
                  Locations
                </Link>
              </li>
              <li
                className={styles.navListItem}
                onClick={() => {scrollIntoTheView("story"); handleClick()}}
              >
                <Link
                  href="#story"
                  className={styles.navLink}
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </Fade>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

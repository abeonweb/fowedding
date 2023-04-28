"use client";
import React from "react";
import styles from "../css/navigation.module.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { scrollIntoTheView } from "../utils/scroll.js";
import useOpen from "../utils/useOpen";

const Navigation = ({setSection}) => {
  const { open, handleClick } = useOpen();

  return (
    <header
      id="header"
      className={`${styles.header} ${open ? styles.navOpen : null}`}
    >
      <div className={styles.navContent}>
        <div className={styles.navLogo}>
          <div>
            <Link
              to="/"
              className={styles.navTitleLink}
              onClick={()=>{
                setSection("home"); 
                handleClick(false)}}
            >
              <h1 className={styles.pageTitle}>Folake &amp; Oluwole</h1>
            </Link>
          </div>
        </div>
        <div onClick={()=>handleClick(open? false: true)} className={styles.menuIcon}>
          <span className={styles.hamburger}></span>
        </div>

        <nav className={styles.nav}>
          <Fade>
            <ul className={styles.navList}>
              {/* <li className={styles.navListItem}>
                <Link
                  to="/"
                  className={styles.navLink}
                  onClick={() => {
                    scrollIntoTheView("home");
                    handleClick(false);
                  }}
                  >
                  <div>Home</div>
                </Link>
                  </li> */}
              {/* <li className={styles.navListItem}>
                <Link
                to="/info"
                className={styles.navLink}
                onClick={() => {
                  scrollIntoTheView("info");
                  handleClick(false);
                }}
                >
                <div>Information</div>
                </Link>
              </li> */}
              <li className={styles.navListItem}>
                <Link
                  to="/"
                  className={styles.navLink}
                  onClick={() => {
                    setSection("story");
                    handleClick(false);
                  }}
                >
                  <div>Our Story</div>
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link
                  to="/gallery"
                  className={styles.navLink}
                  onClick={() => {
                    scrollIntoTheView("gallery");
                    handleClick(false);
                  }}
                >
                  <div>Gallery</div>
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link
                  to="/programs"
                  className={styles.navLink}
                  onClick={() => handleClick(false)}
                >
                  <div>Programs</div>
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link
                  to="/locations"
                  className={styles.navLink}
                  onClick={() => handleClick(false)}
                >
                  <div>Locations</div>
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

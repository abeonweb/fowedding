import React from "react";
import styles from "../css/location.module.css";

const Map = ({ image, link }) => {
  const imageData = require(`../images/${image}.png`);
  return (
    <div className={styles.map}>
      <a href={link} target="_blank" rel="noreferrer">
        <img className={styles.mapImage} src={imageData} alt="" />
      </a>
    </div>
  );
};

export default Map;

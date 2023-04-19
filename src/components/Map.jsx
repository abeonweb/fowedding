import React from "react";
import styles from "../css/location.module.css";

const Map = ({image}) => {
  const imageData = require(`../images/${image}.png`)
  return (
    <div className={styles.map}>
      <img className={styles.mapImage} src={imageData} alt=""/>
    </div>
  );
};

export default Map;

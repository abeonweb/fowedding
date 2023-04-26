import React from "react";
import styles from "../css/program.module.css";
import Page1 from "./programs/wedding/Page1";
import Page2 from "./programs/wedding/Page2";
import Page3 from "./programs/wedding/Page3";
import Page4 from "./programs/wedding/Page4";

const Program = () => {
  return (
    <div id="program" className={styles.program}>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      
    </div>
  );
};

export default Program;

import React from "react";
import styles from "../../../css/program.module.css";

const Page1 = () => {
  return (
    <div className={styles.page}>
      <p className={styles.page1Para}>RECEPTION PROGRAMME</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>AT</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>
        BRAVA EVENT CENTER
      </p>
      <p className={`${styles.page1Para} ${styles.darker}`}>
        PLOT 8, GUINESS ROAD, OFF WEMCO ROAD, IKEJA
      </p>
      <ol className={styles.serviceList}>
        <li className={styles.subHeading}>Introduction | Welcome</li>
        <li className={styles.subHeading}>Introducing the Chairman</li>
        <li className={styles.subHeading}>Couple&apos;s Parent Grand Entry</li>
        <li className={styles.subHeading}>Couple&apos;s Grand Entry</li>
        <li className={styles.subHeading}>Opening Prayer</li>
        <li className={styles.subHeading}>Chairman&apos;s Remark</li>
        <li className={styles.subHeading}>Oriki</li>
        <li className={styles.subHeading}>Cutting of Cake</li>
        <li className={styles.subHeading}>First Assignment</li>
        <li className={styles.subHeading}> Toast</li>
        <li className={styles.subHeading}> Couple&apos;s First Dance</li>
        <li className={styles.subHeading}> Father and Daughter Dance </li>
        <li className={styles.subHeading}> Mother and Son Dance </li>
        <li className={styles.subHeading}> Who is next?</li>
        <li className={styles.subHeading}> Presentation of gifts</li>
        <li className={styles.subHeading}> Vote of Thanks </li>
        <li className={styles.subHeading}> Closing Prayers</li>
        <li className={styles.subHeading}> Dance! Dance!! Dance!!!</li>
      </ol>
    </div>
  );
};

export default Page1;

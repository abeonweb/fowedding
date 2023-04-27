import React from "react";
import styles from "../../../css/program.module.css";

const Page1 = () => {
  return (
    <div className={styles.page}>
      <p className={styles.page1Para}>ENGAGEMENT CEREMONY</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>BETWEEN</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>FOLAKE OLAWUNMI</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>AND</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>OLUWOLE OLUSOLA</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>ON</p>
      <p className={styles.page1Para}>THURSDAY 11 MAY, 2023</p>
      <p className={styles.page1Para}>TIME: 12:00 PM</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>AT</p>
      <p className={styles.page1Para}>THE EVENT PLACE (BOLAJOKO HALL)</p>
      <p className={styles.page1Para}>OFF CADBURY ROAD, AGIDINGBI,</p>
      <p className={styles.page1Para}>ALAUSA CBD, IKEJA.</p>
    </div>
  );
};

export default Page1;

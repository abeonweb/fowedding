import React from "react";
import styles from "../../../css/program.module.css";

const Page1 = () => {
  return (
    <div className={styles.page}>
      <p className={styles.page1Para}>ORDER OF SERVICE</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>FOR</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>THE HOLY SOLEMNIZATION</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>BETWEEN</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>FOLAKE OLAWUNMI</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>AND</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>OLUWOLE OLUSOLA</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>ON</p>
      <p className={styles.page1Para}>SATURDAY 13 MAY, 2023</p>
      <p className={styles.page1Para}>TIME: 10:00 PM</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>AT</p>
      <p className={styles.page1Para}>FIRST BAPTIST CHURCH</p>
      <p className={styles.page1Para}>(PREVAILERS&apos; SANCTUARY)</p>
      <p className={styles.page1Para}>(MEMBER NIGERIAN BAPTIST CONVENTION)</p>

      <p className={`${styles.page1Para} ${styles.smaller}`}>
        1, CHURCH STREET OFF OLOWU STREET,
      </p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>OFF OLOWU STREET IKEJA, LAGOS.</p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>
        RO. BOX 165, IKEJA-LAGOS |TEL: 08033968682
      </p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>
        E-MAIL: infof.fbcikeja.org |
        <span style={{ color: "rgb(5, 99, 193)" }}>
          <u>
            <a href="http://www.fbcikeja.org/"> www.fbcikeja.org</a>
          </u>
        </span>
      </p>
      <h3 className={`${styles.page1SubHeading} ${styles.smaller}`}>
        VISION STATEMENT
      </h3>
      <p className={`${styles.page1Para} ${styles.smaller}`}>
        Partnering with the Holy Spirit for transformation of nations.
      </p>
      <h3 className={`${styles.page1SubHeading} ${styles.smaller}`}>
        MISSION STATEMENT
      </h3>
      <p className={`${styles.page1Para} ${styles.smaller}`}>
        To attract seekers into God&apos;s family; building them up under a continual
        process of life enhancement, sustaining them in an atmosphere of God&apos;s
        love and power, to facilitate their transformation unto the full stature
        of their potentials and their calling in Christ Jesus.
      </p>
      <h3 className={`${styles.page1SubHeading} ${styles.smaller}`}>OUR PURPOSES</h3>
      <p className={`${styles.page1Para} ${styles.smaller}`}>
        (Matthew 22:35-37) (Act 1:8) (Matthew 28:19-20) (Matthew 7:7-8) (Matthew
        22:35-39) (James 1:27)
      </p>
    </div>
  );
};

export default Page1;

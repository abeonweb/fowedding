import React from "react";
import styles from "../../../css/program.module.css";

const Page1 = () => {
  return (
    <div className={styles.page}>
      <p className={styles.subHeading}>OUR SINCERE GRATITUDE</p>
      <p className={`${styles.page1Para} ${styles.darker}`}>
        To the Almighty ancient of days who has never left our side. The one who
        no man can question and who has made this beautiful moment possible.
      </p>
      <p className={`${styles.page1Para} ${styles.darker}`}>
        To our parents for their love, support, counselling and prayers and to
        all our friends and well-wishers for sharing in our joy.
      </p>
      <p className={`${styles.page1Para} ${styles.darker}`}>
        May the Almighty God reward you abundantly, God bless you all.
      </p>
      <p className={`${styles.page1Para} ${styles.smaller}`}>
        Folake & Oluwole
      </p>
    </div>
  );
};

export default Page1;

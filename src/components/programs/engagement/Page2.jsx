import styles from "../../../css/program.module.css";

const Page2 = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.subHeading}>Officiating Ministers</h2>
      <ul className={styles.page2List1}>
        <li>
          <p className={styles.page2ListPara}>
            Revd. Dr. Kolawole Oluwaseun Ogokunle
          </p>
          <p className={styles.smallerText}>Senior Pastor, FBC Ikeja</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Revd. P.O. Okunlola</p>
          <p className={styles.smallerText}>Children Minister, FBC Ikeja</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>The Deaconate FBC, Ikeja</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Revd. Isaac Fadeyi</p>
          <p className={styles.smallerText}>
            Glorious Mission International Ilorin
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Page2;

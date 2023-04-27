import styles from "../../../css/program.module.css";

const Page2 = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.subHeading}>OFFICIATING MINISTERS</h2>
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
          <p className={styles.page2ListPara}>
            Pastor Dele Adegbite FBC, Ikeja
          </p>
          <p className={styles.smallerText}>The Deaconate FBC, Ikeja</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Revd. Isaac Fadeyi</p>
          <p className={styles.smallerText}>
            Glorious Mission International Ilorin
          </p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Prophet M.O. Obaloni</p>
          <p className={styles.smallerText}>
            General Overseer of The Divine Glorious Hour Ministry Owo
          </p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Mr. D.Y. Ogunlana</p>
        </li>
      </ul>

      <h2 className={styles.subHeading}>ORDER OF WORSHIP</h2>

      <ol className={styles.page2List2}>
        <li>
          <div className={styles.page2List2Split}>
            <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
              Bridal Processional Hymn:
            </p>
            <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
              BH134 “All hail the power of Jesus name”
            </p>
          </div>
        </li>
        <li>
          <p className={styles.page2ListPara}>Call To Worship</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Opening Prayer</p>
        </li>
        <li>
          <div className={styles.page2List2Split}>
            <p className={`${styles.page2ListPara} ${styles.paragraph}`}>Hymn: </p>
            <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
              YBH188 “Amazing grace”
            </p>
          </div>
        </li>
        <li>
          <p className={styles.page2ListPara}>Exhortation</p>
        </li>
        <li>
          <div className={styles.page2List2Split}>
            <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
              Congregational hymn:{" "}
            </p>
            <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
              And can it be that I should gain
            </p>
          </div>
        </li>
        <li>
          <p className={styles.page2ListPara}>Charge and Declaration</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Joining and Blessing</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Special Prayer for the Couple</p>
        </li>
        <li>
          <div className={styles.page2List2Split}>
            <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
              Congregational Hymn:{" "}
            </p>
            <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
              {" "}
              “God give us Christian home”
            </p>
          </div>
        </li>
        <li>
          <ul className={styles.page2List2InnerList}>
            <li className={styles.page2List2InnerListItem}>a&#41; Signing of marriage register</li>
            <li className={styles.page2List2InnerListItem}>b&#41; Presentation of Marriage Certificate</li>
          </ul>
        </li>
        <li>
          <p className={styles.page2ListPara}>Scripture Reading</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Choir Ministration</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Message</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Marriage Thanksgiving</p>
        </li>
        <li>
          <p className={styles.page2ListPara}>
            Greetings, Recognition And Announcement
          </p>
        </li>
        <li>
          <p className={styles.page2ListPara}>Closing Prayer</p>
        </li>
        <li>
          <div className={styles.page2List2Split}>
            <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
              Recessional Hymn:{" "}
            </p>
            <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
              BH266 Standing on the promises”
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Page2;

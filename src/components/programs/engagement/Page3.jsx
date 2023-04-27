import styles from "../../../css/program.module.css";

const Page3 = () => (
  <div className={styles.page}>
    <h2 className={styles.subHeading}>Programme</h2>

    <ol className={styles.page2List2}>
      <li>
        <div className={styles.page2List2Split}>
          Bride’s family to be seated
        </div>
      </li>
      <li>Arrival of Groom’s family accompanying Oluwole with the letter</li>
      <li>
        <div className={styles.page2List2Split}>
          <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
            Hymn 1:
          </p>
          <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
            Praise my soul, the King of Heaven
          </p>
        </div>
      </li>
      <li>
        <p className={styles.page2ListPara}>Prayer</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>
          A minute silence in honor of Bride’s mother Late Mrs. Abosede Ayinke
          Oke
        </p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Exchange of letters </p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Arrival of the Bride – Folake</p>
      </li>
      <li>
        <div className={styles.page2List2Split}>
          <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
            Hymn 2:
          </p>
          <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
            God give us Christian homes BH377
          </p>
        </div>
      </li>
      <li>
      <p className={styles.page2ListPara}>Ministration:</p>
        <ul className={styles.page2List2InnerList}>
          <li className={styles.page2List2InnerListItem}><p className={styles.page2ListPara}>a&#41; Admonitions</p></li>
          <li className={styles.page2List2InnerListItem}>
          <p className={styles.page2ListPara}>b&#41; Special Prayer session</p>
          </li>
        </ul>
      </li>
      <li>
        <p className={styles.page2ListPara}>Introduction of both Families</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>
          Presentation of the Betrothal Gifts
        </p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Blessing of the Engagement Ring</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Prayer for the Couple</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>
          Handing over the Bride to her parents-in-law
        </p>
      </li>
      <li>
        <div className={styles.page2List2Split}>
          <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
            Closing Hymn:
          </p>
          <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
            IMMORTAL, INVISIBLE
          </p>
        </div>
      </li>
      <li>
        <p className={styles.page2ListPara}>Grace</p>
      </li>
    </ol>
  </div>
);

export default Page3;

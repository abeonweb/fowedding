import styles from "../../../css/program.module.css";

const Page3 = () => (
  <div className={styles.page}>
    <h2 className={styles.subHeading}>Programme</h2>

    <ol className={styles.page2List2}>
      <li>
        <div className={styles.page2List2Split}>Praises</div>
      </li>
      <li>Prayers</li>
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
        <p className={styles.page2ListPara}>
          Purpose of our gathering, The 2 Alagas
        </p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Ministration:</p>
        <ul className={styles.page2List2InnerList}>
          <li className={styles.page2List2InnerListItem}>
            <p className={styles.page2ListPara}>a&#41; Here he comes</p>
          </li>
          <li className={styles.page2List2InnerListItem}>
            <p className={styles.page2ListPara}>b&#41; Here she comes</p>
          </li>
        </ul>
      </li>
      <li>
        <p className={styles.page2ListPara}>
          A minute silence in honor of Bride&apos;s mother Late Mrs. Abosede
          Ayinke Oke & Father of the Groom Late Chief Samuel Adedayo Fagbemi
        </p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Short Exhortation</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Exchange of letters </p>
      </li>
      <li>
        <div className={styles.page2List2Split}>
          <p className={`${styles.page2ListPara} ${styles.paragraph}`}>
            Hymn 2:
          </p>
          <p className={`${styles.page2ListPara2} ${styles.paragraph}`}>
            BH377 God give us Christian homes
          </p>
        </div>
      </li>
      <li>
        <p className={styles.page2ListPara}>Introduction of both Families</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Engagement </p>
      </li>
      <li>
        <p className={styles.page2ListPara}>
          Prayer for the Couple from both Parents
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
        <p className={styles.page2ListPara}>Closing prayers and Benediction.</p>
      </li>
      <li>
        <p className={styles.page2ListPara}>Entertainment of guests</p>
      </li>
    </ol>
  </div>
);

export default Page3;

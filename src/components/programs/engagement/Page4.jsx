import styles from "../../../css/program.module.css";

const Page4 = () => {
  return (
    <div className={styles.page}>
          <h2 className={styles.subHeading}>Hymn 1: “PRAISE, MY SOUL, THE KING OF HEAVEN”</h2>
          <ol className={styles.pageList}>
            <li className={styles.pageList}>
              Praise, my soul, the King of Heaven To His feet thy tribute
              bring Ransomed, healed. restored, forgiven Evermore His praises
              sing: Alleluia! Alleluia! Praise the everlasting King.
            </li>
            <li className={styles.pageList}>
              Praise Him for His grace and favor To our fathers in distress
              Praise Him, still the same forever, Slow to chide, and swift to
              bless, Alleluia! Alleluia! Glorious in His faithfulness
            </li>
            <li className={styles.pageList}>
              Father like He tends and spares us; Well our feeble frame he
              knows; In His hands He gently bears us; Rescues us from all our
              foes; Alleluia! Alleluia! Widely His mercy flows
            </li>
            <li className={styles.pageList}>
              Angels in the height, adore Him; Ye behold Him face to face
              Saint triumphant, bow before him Gather in from every race
              Alleluia! Alleluia! Praise with us the God of grace, Amen.
            </li>
          </ol>
    </div>
  );
};

export default Page4;

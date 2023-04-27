import styles from "../../../css/program.module.css";

const Page6 = () => {
  return (
    <div className={styles.page}>
      <ol className={styles.serviceList} start={"9"}>
        <li className={styles.subHeading}>SPECIAL PRAYER FOR THE COUPLE</li>
        <li className={styles.subHeading}>
          CONGREGATIONAL HYMN: “GOD GIVE US CHRISTIAN HOME”
          <ol className={styles.pageList}>
            <li className={styles.pageList}>
              God, give us Christian homes! Homes where the Bible is loved
              and taught, Homes where the master&apos;s will is sought, Homes
              crowned with beauty, Your love has wrought; God, give us Christian
              homes; God, give us Christian homes!
            </li>

            <li className={styles.pageList}>
              God, give us Christian homes! Homes where the father is true
              and strong, Homes that are free from the blight of wrong, Homes
              that are joyous with love and song; God, give us Christian homes;
              God, give us Christian homes!
            </li>

            <li className={styles.pageList}>
              God, give us Christian homes! Homes, where the mother, in
              caring quest, Strives to show others your way is best, Homes where
              the Lord is an honored guest; God, give us Christian homes; God,
              give us Christian homes!
            </li>

            <li className={styles.pageList}>
              God, give us Christian home! Homes, where the children are led
              to know Christ in His beauty who loves them so, Homes, where the
              altar fires burn and glow; God, give us Christian homes; God, give
              us Christian homes!
            </li>
          </ol>
        </li>
        <li className={`${styles.subHeading} ${styles.subHeadingWithList}`}>
          <br />
          <ol className={styles.subHeadingList}>
            <li className={styles.subHeadingListItem}>
              SIGNING OF MARRIAGE REGISTER
            </li>
            <li className={styles.subHeadingListItem}>
              PRESENTATION OF MARRIAGE CERTIFICATE
            </li>
          </ol>
        </li>
        <li className={styles.subHeading}> SCRIPTURE READING</li>
        <li className={styles.subHeading}> CHOIR MINISTRATION </li>
        <li className={styles.subHeading}> MESSAGE</li>
        <li className={styles.subHeading}> MARRIAGE THANKSGIVING</li>
        <li className={styles.subHeading}>
          GREETINGS, RECOGNITION AND ANNOUNCEMENTS
        </li>
        <li className={styles.subHeading}> CLOSING PRAYER </li>
        <li className={styles.subHeading}>
           RECESSIONAL HYMN: BH 266 “STANDING ON PROMISES”
          <ol className={styles.pageList}>
            <li className={styles.pageList}>
              Standing on the promises of Christ my King, Through eternal
              ages may his praises ring; Glory in the highest, I will shout and
              sing, Standing on the promises of God.
              <br />
              <br />
              <span className={styles.highlightSpan}>Refrain:</span> Standing,
              standing, Standing on the promises of God my savior; Standing,
              standing, I&apos;m standing on the promises of God.
            </li>

            <li className={styles.pageList}>
              Standing on the promises that cannot fail, When the howling
              storms of doubt and fear assail, By the living Word of God I shall
              prevail, Standing on the promises of God. <br />
              <span className={styles.highlightSpan}>(Refrain)</span>.
            </li>

            <li className={styles.pageList}>
              Standing on the promises of Christ the Lord, Bound to him
              eternally by love&apos;s strong cord, Overcoming daily with the
              Spirit&apos;s sword, Standing on the promises of God. <br />
              <span className={styles.highlightSpan}>(Refrain)</span>.
            </li>

            <li className={styles.pageList}>
              Standing on the promises I cannot fall, Listening every moment
              to the Spirit&apos;s call, Resting in my savior as my all in all,
              Standing on the promises of God. <br />
              <span className={styles.highlightSpan}>(Refrain)</span>.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Page6;

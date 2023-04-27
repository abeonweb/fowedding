import styles from "../../../css/program.module.css";

const Page4 = () => {
  return (
    <div className={styles.page}>
      <ol className={styles.serviceList} start={"6"}>
        <li className={styles.subHeading}>
          CONGREGATIONAL HYMN: “AND CAN IT BE”
          <ol className={styles.pageList}>
            <li className={styles.pageList}>
              And can it be that I should gain An interest in the Savior&apos;s
              blood? Died he for me, who caused His pain? For me, who Him to
              death pursued? Amazing love! How can it be That thou, my God,
              should die for me? Refrain: Amazing love! How can it be That thou,
              my God, should die for me?
            </li>
            <li className={styles.pageList}>
              ‘Tis mystery all! The immortal dies! Who can explore His strange
              design? In vain the first born seraph tries To sound the depths of
              love divine! Tis mercy all! Let earth adore, Let angels minds
              inquire no more. (Refrain)
            </li>
            <li className={styles.pageList}>
              He left His father&apos;s throne above, So free, so infinite His
              grace; Emptied himself of all but love, And bled for Adam&apos;s
              helpless race; ‘Tis mercy all, immense and free; For, O my God, it
              found out me. (Refrain)
            </li>
            <li className={styles.pageList}>
              Long my imprisoned spirit lay Fast bound in sin and nature&apos;s
              night; Thine eye diffused a quickening ray, I woke, the dungeon
              flamed with light; My chains fell off, my heart was free; I rose,
              went forth and followed Thee. (Refrain)
            </li>
            <li className={styles.pageList}>
              No condemnation now I dread; Jesus, and all in Him is mine! Alive
              in HIM, my living Head, And clothed in righteousness divine,
              boldly approach the eternal throne, And claim the crown, through
              Christ my own. (Refrain) Amen.
            </li>
          </ol>
        </li>

        <li className={styles.subHeading}>CHARGE AND DECLARATION</li>
      </ol>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Minister:</span> I charge you
        both as you will answer on the day of God&apos;s judgement when the
        secret of all hearts shall be disclosed. If any of you know of any
        impediment or reason why you may not be lawfully joined in Holy
        Matrimony confess it now.
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Groom:</span> I,{" "}
        <span className={styles.italicHighlightSpan}>
          Oluwole Olusola Fagbemi
        </span>{" "}
        solemnly declare that I do not know of any impediment or reason why I,{" "}
        <span className={styles.italicHighlightSpan}>
          Oluwole Olusola Fagbemi
        </span>{" "}
        may not be joined in Holy Matrimony to{" "}
        <span className={styles.italicHighlightSpan}>Folake Olawunmi Oke</span>.
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Bride:</span> I,{" "}
        <span className={styles.italicHighlightSpan}>Folake Olawunmi Oke</span>{" "}
        solemnly declare that I do not know of any impediment or reason why I,{" "}
        <span className={styles.italicHighlightSpan}>Folake Olawunmi Oke</span>{" "}
        will not be joined in Holy Matrimony to{" "}
        <span className={styles.italicHighlightSpan}>
          Oluwole Olusola Fagbemi
        </span>
        .
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Minister:</span>{" "}
        <span className={styles.italicHighlightSpan}>
          Oluwole Olusola Fagbemi
        </span>
        , will you willingly and joyfully take this woman as your lawful wedded
        wife to live together according to God&apos;s law in the Holy Estate of
        Matrimony?
        <br /> Will you love her, comfort, honor and care for her, forsaking all
        others and keeping unto her as long as you both shall live?
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Groom:</span> Yes I will, May God
        help me so to do. Amen,
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Minister:</span>{" "}
        <span className={styles.italicHighlightSpan}>Folake Olawunmi Oke</span>
        , will you willingly and joyfully take this man as your lawful wedded
        husband to live together according to God&apos;s law in the Holy Estate
        of Matrimony?
        <br /> Will you love him, comfort him, honor and care for him, forsaking
        all others and keeping unto him as long as you both shall live?
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Bride:</span> Yes I will, May God
        help me so to do. Amen.
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Minister:</span> Who gives this
        woman to this man in marriage?
      </p>
      <p className={styles.page4charge}>
        <span className={styles.highlightSpan}>Response:</span> I,{" "}
        <span className={styles.italicHighlightSpan}>Mr. Abiodun Oke</span> on
        behalf of the family gives Folake to Oluwole as wife.
      </p>
    </div>
  );
};

export default Page4;

import styles from "../../../css/program.module.css";

const Page1 = () => (
  <div className={styles.page}>
    <ol className={styles.serviceList}>
      <li className={styles.subHeading}>
        ORDER OF PHOTOGRAPHY WITH COUPLE:
        <ol className={styles.pageList}>
          <li className={styles.pageListItem}>Officiating Ministers</li>
          <li className={styles.pageListItem}>Both Parents</li>
          <li className={styles.pageListItem}>Bride&apos;s Parent</li>
          <li className={styles.pageListItem}>Groom&apos;s Parent</li>
          <li className={styles.pageListItem}>Bride&apos;s Family</li>
          <li className={styles.pageListItem}>Groom&apos;s Family</li>
          <li className={styles.pageListItem}>Bride&apos;s Friends</li>
          <li className={styles.pageListItem}>Groom&apos;s Friends</li>
          <li className={styles.pageListItem}>Bridal Train</li>
          <li className={styles.pageListItem}> Bride&apos;s Siblings</li>
          <li className={styles.pageListItem}> Groom&apos;s Siblings</li>
          <li className={styles.pageListItem}> First Baptist Church</li>
          <li className={styles.pageListItem}> Deaconate</li>
          <li className={styles.pageListItem}> Bride and Chief Bride&apos;s Maid</li>
          <li className={styles.pageListItem}> Groom and Best Man</li>
          <li className={styles.pageListItem}> Couple Alone</li>
        </ol>
      </li>
    </ol>
  </div>
);

export default Page1;

import styles from "../../../css/program.module.css";

const Page1 = () => (
  <div className={styles.page}>
    <ol className={styles.serviceList}>
      <li className={styles.subHeading}>
        ORDER OF PHOTOGRAPHY WITH COUPLE:
        <ol className={styles.pageList}>
          <li className={styles.pageList}>Officiating Ministers</li>
          <li className={styles.pageList}>Both Parents</li>
          <li className={styles.pageList}>Bride&apos;s Parent</li>
          <li className={styles.pageList}>Groom&apos;s Parent</li>
          <li className={styles.pageList}>Bride&apos;s Family</li>
          <li className={styles.pageList}>Groom&apos;s Family</li>
          <li className={styles.pageList}>Bride&apos;s Friends</li>
          <li className={styles.pageList}>Groom&apos;s Friends</li>
          <li className={styles.pageList}>Bridal Train</li>
          <li className={styles.pageList}> Bride&apos;s Siblings</li>
          <li className={styles.pageList}> Groom&apos;s Siblings</li>
          <li className={styles.pageList}> First Baptist Church</li>
          <li className={styles.pageList}> Deaconate</li>
          <li className={styles.pageList}> Bride and Chief Bride&apos;s Maid</li>
          <li className={styles.pageList}> Groom and Best Man</li>
          <li className={styles.pageList}> Couple Alone</li>
        </ol>
      </li>
    </ol>
  </div>
);

export default Page1;

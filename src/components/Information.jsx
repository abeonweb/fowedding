import styles from "../css/info.module.css";

const Information = () => {
  return (
    <div id="info" className={styles.section}>
      <h1 className={styles.sectionTitle}>Information of Interest</h1>
      <article>
        <h2 className={styles.articleTitle}>Hotels</h2>
        <p className={styles.message}>
          For those of our friends and family that are coming from out of town,
          here is a list of hotels. If you have not already booked, try to do so
          in advance.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Watercress hotel</li>
          <li className={styles.listItem}>Safron hotel</li>
          <li className={styles.listItem}>Derembrandt hotel</li>
          <li className={styles.listItem}>Ibis hotel ikeja</li>
          <li className={styles.listItem}>Ivy hotel Adeniyi Jones</li>
          <li className={styles.listItem}>Lagos Marriott hotel</li>
          <li className={styles.listItem}>Radisson blue hotel</li>
          <li className={styles.listItem}>Protea hotel</li>
        </ul>
      </article>
    </div>
  );
};

export default Information;

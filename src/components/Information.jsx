import styles from "../css/info.module.css";

const Information = () => {
  return (
    <div id="info" className={styles.section}>
      <h1 className={styles.sectionTitle}>Information of Interest</h1>
      <article>
        <h2>Hotels</h2>
        <p>
          For those of our friends and family that are coming from out of town,
          here is a list of hotels. If you have not already booked, try to do so
          in advance.
        </p>
        <ul>
          <li>Watercress hotel</li>
          <li>Safron hotel</li>
          <li>Derembrandt hotel</li>
          <li>Ibis hotel ikeja</li>
          <li>Ivy hotel Adeniyi Jones</li>
          <li>Lagos Marriott hotel</li>
          <li>Radisson blue hotel</li>
          <li>Protea hotel</li>
        </ul>
      </article>
    </div>
  );
};

export default Information;

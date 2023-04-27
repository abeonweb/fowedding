import styles from "../css/info.module.css";
import Locations from "./Locations";
import Programs from "./Programs";

const Information = () => {
  return (
    <div id="info" className={styles.section}>
      <h1 className={styles.sectionTitle}>Information of Interest</h1>
      <Locations />
      <Programs />
    </div>
  );
};

export default Information;

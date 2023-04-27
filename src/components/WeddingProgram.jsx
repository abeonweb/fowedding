import styles from "../css/program.module.css";
import Page1 from "./programs/wedding/Page1";
import Page2 from "./programs/wedding/Page2";
import Page3 from "./programs/wedding/Page3";
import Page4 from "./programs/wedding/Page4";
import Page5 from "./programs/wedding/Page5";
import Page6 from "./programs/wedding/Page6";

const WeddingProgram = () => {
  return (
    <div className={styles.program}>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      
    </div>
  );
};

export default WeddingProgram;

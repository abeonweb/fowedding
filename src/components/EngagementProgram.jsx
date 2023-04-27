import styles from "../css/program.module.css";
import Page1 from "./programs/engagement/Page1";
import Page2 from "./programs/engagement/Page2";
import Page3 from "./programs/engagement/Page3";
import Page4 from "./programs/engagement/Page4";
import Page5 from "./programs/engagement/Page5";
import Page6 from "./programs/engagement/Page6";
import Page7 from "./programs/engagement/Page7";

const EngagementProgram = () => {
  return (
    <div className={styles.program}>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  );
};

export default EngagementProgram;

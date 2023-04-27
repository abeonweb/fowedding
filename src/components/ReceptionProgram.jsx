import styles from "../css/program.module.css";
import Page1 from "./programs/reception/Page1";
import Page2 from "./programs/reception/Page2";

const ReceptionProgram = () => {
  return (
    <div className={styles.program}>
        <Page1/>
        <Page2/>
    </div>
  )
}

export default ReceptionProgram
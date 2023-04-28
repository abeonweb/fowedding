import { useEffect} from "react";
import styles from "../css/home.module.css";
import Splash from "./Splash";
import About from "./About";
import { scrollIntoTheView } from "../utils/scroll";


export default function Home({section}) {

  useEffect(() => {
    scrollIntoTheView(section);
  }, [section]);

  return (
    <main id="home" className={`${styles.home}`}>
      <Splash />
      <About/>
    </main>
  );
}

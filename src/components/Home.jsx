import styles from "../css/home.module.css";
import Splash from "./Splash";
import Gallery from "./Gallery";
import Locations from "./Locations";
import About from "./About";

export default function Home() {
  return (
    <main id="home" className={`${styles.home}`}>
      <div className={styles.overlay}></div>
      <Splash />
      <Gallery />
      <About />
      <Locations />
    </main>
  );
}

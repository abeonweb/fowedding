import styles from "../css/page.module.css";
import Splash from "./Splash";
import Gallery from "./Gallery";
import Locations from "./Locations";

export default function Home() {
  return (
    <main id="home" className={`${styles.home}`}>
      <Splash />
      <Gallery />
      <Locations />
    </main>
  );
}

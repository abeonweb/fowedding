import React from "react";
import WaterWave from "react-water-wave";
import styles from "../css/splash.module.css"

const Splash = () => {
  return (
    <WaterWave 
      imageUrl={"https://res.cloudinary.com/abeonweb/image/upload/v1682182063/blackslab_n2blsh.jpg"} 
      perturbance={0.025}
      resolution={256}
      style={{ width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: "25%" }}
    >
      {() => (
        <section id="splash" className={styles.splashImageContainer}>
          <img className={styles.logo} src={require("../images/fo_logo.png")} alt=""/>
        </section>
      )}
    </WaterWave>
  );
};

export default Splash;

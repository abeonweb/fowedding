// "use client";
import React from "react";
import WaterWave from "react-water-wave";
import styles from "../css/splash.module.css"

const Splash = () => {
  return (
    <WaterWave 
      imageUrl={"https://res.cloudinary.com/abeonweb/image/upload/v1681971420/blackslab2_nqixz0.jpg"} 
      perturbance={0.03}
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

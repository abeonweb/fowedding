// "use client";
import React from "react";
import WaterWave from "react-water-wave";
import styles from "../css/splash.module.css"

const Splash = () => {
  return (
    <WaterWave imageUrl={"https://res.cloudinary.com/abeonweb/image/upload/c_scale,w_1200/v1681302015/background_yvr46u.jpg"} 
    style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
    >
      {() => (
        <section id="splash" className={styles.splashImageContainer}>   

        </section>
      )}
    </WaterWave>
  );
};

export default Splash;

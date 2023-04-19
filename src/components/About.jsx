import React from "react";
import styles from "../css/about.module.css";

const About = () => {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.text}>
          Folake met Wole in 2004 while visiting her friend who lived nearby.
          Even though thy became friends, there was no interest in a
          relationship beyond that.
        </p>
        <p className={styles.text}>
          He was a shy guy. She could talk up a full novel. Their paths always
          intersected because they had mutual friends and turns out Wole was
          even a friend of her cousin as well.
        </p>
        <p className={styles.text}>
          She leaves to go to college in the U.S. He goes to Convenat
          University. They lose touch.
        </p>
        <p className={styles.text}>
          About ten years later she moves back to Nigeria and reconnects with a
          few of her friend and sees Wole again. They start talking about life
          and different situations, become fast friends again.
        </p>
        <p className={styles.text}>
          Visit after visit to see each other and sparks start to fly between.
          The both of them still felt like it was the wrong time. He felt like
          her personality was just too much for him while.
        </p>
        <p className={styles.text}>
          He moves to Ibadan to start a job and She remains in Lagos.
        </p>
        <p className={styles.text}>They lose touch again.</p>
        <p className={styles.text}>
          Folake relocated back to the US in 2020 but she and Wole reconnected,
          realized they loved each other and couldn't imagine letting go again.
          This time they started a long distance relationship involving lots of
          travel, late night calls and I miss yous. Wole proposed right after
          Christmas 2022 and they are getting married May 13th, 2023 by God's
          grace.
        </p>
        <p className={styles.text}>Please come celebrate with them.</p>
      </div>
    </section>
  );
};

export default About;

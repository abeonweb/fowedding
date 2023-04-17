import React, {useEffect} from 'react'
import styles from "../css/location.module.css"
import {Link} from "react-router-dom"
import {scrollIntoTheView} from "../utils/scroll"

const Locations = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollIntoTheView);

    return function () {
      window.removeEventListener("scroll", scrollIntoTheView);
    };
  },[]);

  // function scrolled() {
  //   const navbar = document.querySelector(".navbar");
  //   const sharedLayout = document.querySelector("#shared-layout");
  //   if (navbar !== null && sharedLayout !== null){
  //       if (window.scrollY > navbar.clientHeight) {
  //           console.log("adding to navbar class");
  //           sharedLayout.classList.add(`sticky`);
  //       } else {
  //           sharedLayout.classList.remove(`sticky`);
  //           console.log("nothing");
  //       }
  //   } 
  // }
  return (
    <section id="locations" className={styles.section}>
        <h1>Information of Interest</h1>
        <nav>
          <ul>
            <li><Link to="#engagement" onClick={()=> scrollIntoTheView("engagement")}>Engagement</Link></li>
            <li><Link to="#wedding" onClick={()=> scrollIntoTheView("wedding")}>Wedding</Link></li>
            <li><Link to="#reception" onClick={()=> scrollIntoTheView("reception")}>Reception</Link></li>
          </ul>
        </nav>
        <div id="engagement" className={styles.location}>
            <h2>Engagement - Time</h2>
            <h3>Event Hall - Ikeja</h3>
            <h4>Time: 10am</h4>
            {/*Add a map*/}
            {/*Additional info*/}
        </div>
        <div id="wedding"className={styles.location}>
            <h2>Wedding at Church - Time</h2>
            <h3>First Baptist Church - Ikeja</h3>
            <h4>Time: 10am</h4>
            {/*Add a map*/}
            {/*Additional info*/}
        </div>
        <div id="reception"className={styles.location}>
            <h2>Reception - Time</h2>
            <h3>Event Hall - Ikeja</h3>
            <h4>Time: 10am</h4>
            {/*Add a map*/}
            {/*Additional info*/}
        </div>
    </section>
  )
}

export default Locations
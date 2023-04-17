import styles from "../css/gallery.module.css";
import {photos} from "../data"


const photosList = photos.map(({src, width, height})=>{
  let imageSource = require(`../images/${src}.jpg`)
    return (
      <img 
        key={src} 
        src={imageSource} 
        alt="" 
        width={width} 
        height={height} 
        className={styles.photo}
      />
    )}
  )

const Gallery = () => {
  return (
    
    <section id="gallery" className={`${styles.section}`}>
      <div className={styles.container}>
        {photosList}
      </div>
    </section>
  );
};

export default Gallery;
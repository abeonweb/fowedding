
import styles from "../css/gallery.module.css";
import { photos } from "../data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const photosList = photos.map(({ src, width, height }) => {
  let imageSource = require(`../images/${src}.jpg`);
  return (
    <img
      key={src}
      src={imageSource}
      alt=""
      width={width}
      height={height}
      styles={{width: "100%", display: "block"}}
      className={styles.photo}
    />
  );
});

const Gallery = () => {
  return (
    <section id="gallery" className={`${styles.section}`}>
      <h2 className={styles.sectionTitle}>Some of our photos</h2>
      <div className={styles.container}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry columnsCount={4} gutter="10px">{photosList}</Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default Gallery;


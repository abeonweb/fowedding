import styles from "../css/gallery.module.css";
import { photos } from "../data";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const photosList = photos.map(({ key, src, width, height }) => {
  const imageSource = require(`../images/${src}.jpg`);
  const thumbImageSource = require(`../images/${src}_thumb.jpeg`);
  return (
    <Item
      key={key}
      original={imageSource}
      thumbnail={thumbImageSource}
      width={width}
      height={height}
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src={imageSource}
          alt=""
          className={styles.photo}
        />
      )}
    </Item>
  );
});

const PhotoGallery = () => {
  return (
    <section id="gallery" className={`${styles.section}`}>
      <h2 className={styles.sectionTitle}>Some of our photos</h2>
        <Gallery>
          <div
           className={styles.container}
           style={{
              display: "grid",
              gridTemplateColumns: "240px 171px 171px",
              gridTemplateRows: "254px 254px",
              gridGap: 24,
            }}
          >
            {photosList}
          </div>
        </Gallery>
    </section>
  );
};

export default PhotoGallery;

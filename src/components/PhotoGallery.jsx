import styles from "../css/gallery.module.css";
import { photos } from "../data";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import useMediaQuery from "../utils/useMediaQuery";
// import {search, mapImageResources} from "../lib/cloudinary"
const shuffleArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
const imageToItems = (photos) => {
  shuffleArray(photos)
  const allImages = photos.map(({ id, src, width, height }) => {
    const imageSource = require(`../images/${src}.jpg`);

    return (
      <Item
        key={id}
        id={id}
        original={imageSource}
        width={width}
        height={height}
      >
        {({ ref, open }) => (
          <img
            key={id}
            ref={ref}
            onClick={open}
            src={imageSource}
            alt=""
            /*loading="lazy"*/
            className={styles.photo}
          />
        )}
      </Item>
    );
  });

  return allImages;
};

const PhotoGallery = () => {
  // const [images, setImages] = useState([]);
  // const [nextCursor, setNextCursor] = useState("");
  // const [totalCount, setTotalCount] = useState(0);
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     const results = await search();
  //     const { resources } = results;
  //     const images = mapImageResources(resources);
  //     setImages(images)
  //     // setNextCursor(nextCursor)
  //     // setTotalCount(totalCount)
  //   }
  //   fetchData()
  // },[])
  const photosList = imageToItems(photos);
  const matches = useMediaQuery("(min-width: 590px)");

  const galleryStyles = {
    container: (isMobile) => ({
      display: "grid",
      gridTemplateColumns: isMobile ? "171px 210px 171px" : "170px 141px",
      // gridTemplateRows: "254px 254px",
      gridGap: 18,
    }),
  };

  return (
    <section id="gallery" className={`${styles.section}`}>
      <h2 className={styles.sectionTitle}>Some of our photos</h2>
      <div
        key={`photoDiv`}
        style={galleryStyles.container(matches)} //pass a boolean to styles obj
      >
        <Gallery key={"photoGallery"}>{photosList}</Gallery>
      </div>
    </section>
  );
};

export default PhotoGallery;

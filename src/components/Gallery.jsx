import { useContext } from "react";
import { PhotosContext } from "../assets/contexts/PhotosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const toggleLike = (index) => {
    const updatedPhotos = photos.map((photo, i) =>
      i === index ? { ...photo, liked: !photo.liked } : photo
    );
    setPhotos(updatedPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((element, i) => (
        <div 
          className="photo" 
          style={{ backgroundImage: `url(${element.src.tiny})` }} 
          key={i} 
          onClick={() => toggleLike(i)}
        >
          <IconHeart filled={element.liked} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

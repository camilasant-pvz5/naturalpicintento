import { useContext } from "react";
import { PhotosContext } from "../assets/contexts/PhotosContext";
import IconHeart from "../components/IconHeart"; // Asegúrate de que la ruta sea correcta

const Favorites = () => {
  const { photos } = useContext(PhotosContext);

  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo, i) => (
          <div 
            className="photo" 
            style={{ backgroundImage: `url(${photo.src.tiny})` }} 
            key={i}
          >
            <IconHeart filled={photo.liked} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

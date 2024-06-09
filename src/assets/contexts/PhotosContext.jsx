import { createContext, useEffect, useState } from "react"

// exportamos el contexto y el provider 
export const PhotosContext= createContext()




export default function PhotosProvider({children}) {
    const [photos, setPhotos] = useState([])
    const getPics = async ()=>{
        const response = await fetch  ("/photos.json")
        const {photos:photosdb} = await response.json()
        setPhotos (photosdb);
    
    };

    useEffect(() => {
        getPics()
    },[]); 
    
  return (
  
    <PhotosContext.Provider value={{photos, setPhotos}} > 
           {children}
    </PhotosContext.Provider>
  )
}


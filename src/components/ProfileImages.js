import { fetchProfileImages } from "../utils";
import { useState, useEffect } from 'react'
import "../styles/profileImages.css"

const ProfileImages = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchProfileImages(setImages)
    }, [])

    return ( 
        <section className="profile_images-container">
            {images.map((image, i) => {
                return (
                    <img 
                        src={image.download_url}
                        alt={`My profile pic number ${i}`}
                        className="profile_images"
                    />
                )
            })}
        </section>
     )
}
 
export default ProfileImages;
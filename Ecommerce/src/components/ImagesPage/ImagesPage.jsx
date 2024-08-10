import React, { useState } from 'react';
import './ImagesPage.css';
import product from '../../assets/images/image-product-1.jpg';
import mini1 from '../../assets/images/image-product-1-thumbnail.jpg';
import mini2 from '../../assets/images/image-product-2-thumbnail.jpg';
import mini3 from '../../assets/images/image-product-3-thumbnail.jpg';
import mini4 from '../../assets/images/image-product-4-thumbnail.jpg';
import Info from '../Info/Info';
import next from '../../assets/images/icon-next.svg'
import previous from '../../assets/images/icon-previous.svg'
import Lightbox from '../Lightbox/Lightbox';

function ImagesPage() {
    const [mainImage, setMainImage] = useState(product);
    const [activeThumbnail, setActiveThumbnail] = useState(mini1);
    const [isLightboxVisible, setIsLightboxVisible] = useState(false);
    const thumbnails = [mini1, mini2, mini3, mini4];
    const [currentIndex, setCurrentIndex] = useState(thumbnails.indexOf(mini1));

    const handleThumbnailClick = (image) => {
        setMainImage(image);
        setActiveThumbnail(image);
        setCurrentIndex(thumbnails.indexOf(image));
    }
 
    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % thumbnails.length;
        setMainImage(thumbnails[nextIndex]);
        setActiveThumbnail(thumbnails[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        setMainImage(thumbnails[prevIndex]);
        setActiveThumbnail(thumbnails[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    return (
        <div id='content'>
            <div id='pictures'>
                <button id='next'  onClick={handleNext}><img src={next} /></button>
                <img id='product' src={mainImage} onClick={() => setIsLightboxVisible(true)} />
                <button id='previous' onClick={handlePrevious}><img src={previous} /></button>
                <div id='thumbnails'>
                    <img src={mini1}  className={activeThumbnail === mini1 ? 'active' : ''} onClick={() => handleThumbnailClick(mini1)} />
                    <img src={mini2}  className={activeThumbnail === mini2 ? 'active' : ''}  onClick={() => handleThumbnailClick(mini2)} />
                    <img src={mini3}  className={activeThumbnail === mini3 ? 'active' : ''}  onClick={() => handleThumbnailClick(mini3)} />
                    <img src={mini4}  className={activeThumbnail === mini4 ? 'active' : ''}  onClick={() => handleThumbnailClick(mini4)} />
                </div>
            </div>
            <Info />
            <Lightbox
                isVisible={isLightboxVisible}
                onClose={() => setIsLightboxVisible(false)}
                mainImage={mainImage}
                thumbnails={thumbnails}
                currentIndex={currentIndex}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onThumbnailClick={handleThumbnailClick}
            />
        </div>
    );
}

export default ImagesPage;
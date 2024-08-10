import React from 'react';
import './Lightbox.css';
import next from '../../assets/images/icon-next.svg';
import previous from '../../assets/images/icon-previous.svg';

const Lightbox = ({ isVisible, onClose, mainImage, thumbnails, onNext, onPrevious }) => {
    if (!isVisible) return null;

    return (
        <div className="lightbox">
            <button className="lightbox-close" onClick={onClose}>X</button>
            <button className="lightbox-previous" onClick={onPrevious}>
                <img src={previous} />
            </button>
            <img  className="lightbox-image" src={mainImage}  />
            <button className="lightbox-next" onClick={onNext}>
                <img src={next}  />
            </button>
            <div id='lightbox-thumbnails'>
                {thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail}
                        className={thumbnail === mainImage ? 'active-thumbnail' : ''}
                        onClick={() => onThumbnailClick(thumbnail)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Lightbox;

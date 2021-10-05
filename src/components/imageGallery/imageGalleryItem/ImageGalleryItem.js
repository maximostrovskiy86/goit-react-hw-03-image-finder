import React from "react";
import style from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({src, alt, modalUrl, onClickCurrentImage}) => {
    return (
        <>
            <li className={style.ImageGalleryItem}>
                <img
                    src={src}
                    alt={alt}
                    className={style.ImageGalleryItemImage}
                    data-url={modalUrl}
                    onClick={onClickCurrentImage}
                />
            </li>
        </>
    );
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    modalUrl: PropTypes.string.isRequired,
    onClickCurrentImage: PropTypes.func.isRequired,
}

export default ImageGalleryItem
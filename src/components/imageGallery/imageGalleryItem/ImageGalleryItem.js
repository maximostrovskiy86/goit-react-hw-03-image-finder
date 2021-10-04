import React from "react";
import style from "./ImageGalleryItem.module.css";

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

export default ImageGalleryItem;
import React, { useState, useCallback } from "react";
//import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../executedWorks/photos";

import style from './executedWorksMobile.module.css'
import {NavLink} from "react-router-dom";
import backArrow from "../../../assets/imgs/onHomeArrow.svg";
import Nav from "../NavMobile/NavMobile";

//import GalleryWrapper from "./GalleryWrapper/GalleryWrapper";

const ExecutedWorksMobile = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className={style.galleryBlockWrapper}>
            <NavLink className={style.link} to={'/'}> <img  className={style.imgLink} src={backArrow} alt={''}/> </NavLink>


            <div className={style.galleryBlock}>
                <div className={style.backgroundLine}></div>
                <div className={style.navWrapper}>
                    <Nav />
                </div>
            <h2>Примеры наших работ</h2>

            <div>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
            </div>


        </div>
    )
}

export default ExecutedWorksMobile
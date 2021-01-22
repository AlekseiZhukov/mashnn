import React from 'react'

import style from './executedWorks.module.css'

import GalleryWrapper from "./GalleryWrapper/GalleryWrapper";


const ExecutedWorks = () => {
    return (<div className={style.galleryBlock}>
            <h2>Примеры наших работ</h2>

            <GalleryWrapper />


        </div>
    )
}

export default ExecutedWorks
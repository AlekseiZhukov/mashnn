import React from 'react';
import Gallery from 'react-grid-gallery';
import MajorSlider from "../MajorSlider/MajorSlider";
//import ExecutedWorks from "../executedWorks/executedWorks";
import style from './HomePage.module.css'

import photo1 from '../../assets/imgs/photoGallery/1.jpg'
import photo2 from '../../assets/imgs/photoGallery/2.jpg'

const IMAGES = [
    {
        src: photo1,
        thumbnail: photo1,
        thumbnailWidth: 100,
        thumbnailHeight: 300,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: photo2,
        thumbnail: photo2,
        thumbnailWidth: 100,
        thumbnailHeight: 300,
        tags: [{value: "Ocean2", title: "Ocean2"}, {value: "People2", title: "People2"}],
        caption: "Boats2 (Jeshu John2 - designerspics.com)"
    },
]
const GalleryWrapper = () => {
    return ( <div className={style.galleryBlock}><Gallery images={IMAGES}/> </div>)
}




const HomePage = () => {
    return (<>
        <MajorSlider />
        <h2>Примеры наших работ</h2>
        <GalleryWrapper />
        </>
    )
}

export default HomePage
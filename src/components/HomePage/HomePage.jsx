import React from 'react';
import MajorSlider from "../MajorSlider/MajorSlider";
import img1 from '../../assets/imgs/photoGallery/1.jpg'
import img2 from '../../assets/imgs/photoGallery/2.jpg'
import img3 from '../../assets/imgs/photoGallery/3.jpg'
import img4 from '../../assets/imgs/photoGallery/61.jpg'
import style from './HomePage.module.css'
import {NavLink} from "react-router-dom";

import Fade from 'react-reveal/Fade';

import ContactUs from "../Form/Form";


const HomePage = () => {

    return (<>
        <MajorSlider />

        <div className={style.section} >

            <div className={style.textWrapper} >
                {/*<div className={style.backgroundBlock}></div>*/}
                {/*<div className={style.backgroundBlock2}> </div>h2*/}


                <Fade> <h2 >О НАС</h2></Fade >

                <Fade><p><span className={style.bigLetter}>М</span>ашиностроительная промышленность является ведущей отраслью народного хозяйства, которое определяет дальнейшее ускорение и развитие научно-технического процесса в других отраслях. Основными задачами машиностроения является непрерывное повышение качества машин и оборудования, совершенствование роста производительности труда на предприятиях. Выполнению этих задач способствуют организация работы на основе современных средств производства, внедрение передовой технологии и прогрессивной технологической оснастки.</p></Fade >
                    <Fade><p><span className={style.bigLetter}>Н</span>аша компания специализируется на разработке, поставке и изготовлении не стандартного оборудования и комплектующих для предприятий металлургической, химической, нефте-химической и других отраслей промышленности.</p></Fade >
                        <Fade><p><span className={style.bigLetter}>М</span>ы нацелены на оперативное решение сложных технических и технологических вопросов в области обработки металлов и их сплавов при изготовлении деталей и сборочных единиц по <strong>Вашим чертежам.</strong></p></Fade >
                            <Fade><p><span className={style.bigLetter}>О</span>пыт накопленный нашими специалистами за годы работы в области обработки металлов позволяет нам с уверенностью производить детали и сборочные единицы с высокой долей ответственности за качество выпускаемой нами продукции.</p></Fade >

            </div>

            <Fade  >
            <div className={style.subBlockWrapper}>
                <div className={style.shadingDiv}></div>
                <div className={style.imgWrapper}>
                    <img src={img1} alt={''} width={300} height={200}/>
                    <img src={img2} alt={''} width={300} height={200}/>
                    <img src={img3} alt={''} width={300} height={200}/>
                    <img src={img4} alt={''} width={300} height={200}/>
                </div>
                <NavLink className={style.linckTo} to={'/photos'}>примеры наших работ...</NavLink>
            </div>
            </Fade >
        </div>

        <Fade>
            <ContactUs />
        </Fade >
        </>
    )
}

export default HomePage
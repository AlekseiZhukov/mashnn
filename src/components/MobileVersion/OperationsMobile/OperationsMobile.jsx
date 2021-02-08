import React from 'react';
import style from './OperationsMobile.module.css'
import SliderShow from "../SliderShowMobile/SliderShowMobile";

import backArrow from '../../../assets/imgs/onHomeArrow.svg'
import Fade from 'react-reveal/Fade';
import {NavLink} from "react-router-dom";
import NavMobile from "../NavMobile/NavMobile";
import ContactUsMobile from "../FormMobile/FormMobile";


const OperationsMobile = (props) => {
         
    return (<>

        <div className={style.block}>
            <NavLink className={style.link} to={'/'}> <img  className={style.imgLink} src={backArrow} alt={''}/> </NavLink>
            <div className={style.backgroundLine}></div>
            <div className={style.navWrapper}>
                <NavMobile />
            </div>
            <Fade>
            <div className={style.wrapperBlock} style={{ background: `url('${props.data.backgroundImage}') no-repeat center center`}}>
                <h2>{props.data.title}</h2>
                <p>{props.data.description} </p>
                <p>{props.data.description2} </p>
            </div>
            </Fade>
            { props.data.dataFromSlider ? <Fade><SliderShow obj={props.data.dataFromSlider}/></Fade>
            : <Fade><div className={style.optionsParamBlockWrapper}>
                    <div>
                        <img className={style.img} src={props.data.image} alt={''} width={'300px'} height={'auto'} />
                    </div>

                <div className={style.textBlockWrapper}>
                    <h3>{props.data.subtitle}</h3>
                    <p><span className={style.subTitle}>{props.data.titleParam1}</span><span>{props.data.param1}</span></p>
                    <p><span className={style.subTitle}>{props.data.titleParam2}</span><span>{props.data.param2}</span></p>
                    <p><span className={style.subTitle}>{props.data.titleParam3}</span><span>{props.data.param3}</span></p>
                    <p><span className={style.subTitle}>{props.data.titleParam4}</span><span>{props.data.param4}</span></p>
                    <p><span className={style.subTitle}>{props.data.titleParam5}</span><span>{props.data.param5}</span></p>
                </div>

                </div></Fade>}

        </div>
            <Fade ><ContactUsMobile /></Fade>
        </>
    )

}
export default OperationsMobile
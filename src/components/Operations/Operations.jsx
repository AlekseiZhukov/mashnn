import React from 'react';
import style from './Operations.module.css'
import SliderShow from "../SliderShow/SliderShow";
import backArrow from '../../assets/imgs/onHomeArrow.svg'
import {NavLink} from "react-router-dom";
import Nav from "../Header/Nav/Nav";
import ContactUs from "../Form/Form";
import Bounce from 'react-reveal/Bounce';


const Operations = (props) => {

    return (
        <>
        <div className={style.block}>
            <NavLink className={style.link} to={'/'}> <img  className={style.imgLink} src={backArrow} alt={''}/> </NavLink>
            <div className={style.backgroundLine}></div>
            <div className={style.navWrapper}>
                <Nav />
            </div>
            <Bounce left cascade>
            <div className={style.wrapperBlock} style={{ background: `url('${props.data.backgroundImage}') no-repeat center center`}}>
                <h2>{props.data.title}</h2>
                <p>{props.data.description} </p>
                <p>{props.data.description2} </p>
            </div>
            </Bounce>
            {props.data.dataFromSlider ? <Bounce left ><SliderShow obj={props.data.dataFromSlider}/></Bounce>
            : <Bounce left cascade><div className={style.optionsParamBlockWrapper}>
                   <div className={style.textBlockWrapper}>
                        <h3>{props.data.subtitle}</h3>
                        <p><span className={style.subTitle}>{props.data.titleParam1}</span><span>{props.data.param1}</span></p>
                        <p><span className={style.subTitle}>{props.data.titleParam2}</span><span>{props.data.param2}</span></p>
                        <p><span className={style.subTitle}>{props.data.titleParam3}</span><span>{props.data.param3}</span></p>
                        <p><span className={style.subTitle}>{props.data.titleParam4}</span><span>{props.data.param4}</span></p>
                        <p><span className={style.subTitle}>{props.data.titleParam5}</span><span>{props.data.param5}</span></p>
                       <img className={style.img2} src={props.data.image2} alt={''} width={'300px'} height={'auto'} />
                    </div>
                    <div>
                        <img className={style.img} src={props.data.image} alt={''} width={'300px'} height={'auto'} />
                    </div>

            </div></Bounce>}

        </div><Bounce left >
            <ContactUs /></Bounce>
            </>
    )

}
export default Operations
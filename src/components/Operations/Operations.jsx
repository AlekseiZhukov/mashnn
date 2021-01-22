import React from 'react';
import style from './Operations.module.css'
import SliderShow from "../SliderShow/SliderShow";

import backArrow from '../../assets/imgs/onHomeArrow.svg'

import {NavLink} from "react-router-dom";
import Nav from "../Header/Nav/Nav";


const Operations = (props) => {

    return (

        <div className={style.block}>
            <NavLink className={style.link} to={'/'}> <img  className={style.imgLink} src={backArrow} alt={''}/> </NavLink>
            <div className={style.backgroundLine}></div>
            <div className={style.navWrapper}>
                <Nav />
            </div>
            <div className={style.wrapperBlock} style={{ background: `url('${props.data.backgroundImage}') no-repeat center center`}}>
                <h2>{props.data.title}</h2>
                <p>{props.data.description} </p>
                <p>{props.data.description2} </p>
            </div>
            {props.data.dataFromSlider ? <SliderShow obj={props.data.dataFromSlider}/> : <div>
                <h2>{props.data.subtitle}</h2>
                <div>
                    <p><span>{props.data.titleParam1}</span><span>{props.data.param1}</span></p>
                    <p><span>{props.data.titleParam2}</span><span>{props.data.param2}</span></p>
                    <p><span>{props.data.titleParam3}</span><span>{props.data.param3}</span></p>
                </div>
                <div>
                    <img src={props.data.image} alt={''} width={'300px'} height={'auto'} />
                </div>
            </div>}

        </div>
    )

}
export default Operations
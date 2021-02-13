import React from 'react';
import style from './Contact.module.css'
import backArrow from '../../assets/imgs/onHomeArrow.svg'
import {NavLink} from "react-router-dom";
import Nav from "../Header/Nav/Nav";
import logo from '../../assets/imgs/logo.svg'
import Roll from 'react-reveal/Roll';
import filePdf from '../../assets/Реквизиты-ООО-МАШИНОСТРОЕНИЕ-НН-1.pdf'

const Contact = () => {

    return ( <div className={style.blockBackground} >
            <div className={style.blockBackgroundShadow}></div>
        <div className={style.block} >
            <NavLink className={style.link} to={'/'}> <img  className={style.imgLink} src={backArrow} alt={''}/> </NavLink>
            <div className={style.backgroundLine}></div>
            <div className={style.navWrapper}>
                <Nav />
            </div>
            <div className={style.wrapperLogo}>
                <img className={style.logoSlider} src={logo} alt={'logo'} />
            </div>
            <Roll left>
            <div className={style.ListWrapper} itemScope itemType="http://schema.org/Organization">
                <h2 >Контакты</h2>
                <h3 itemProp="name">ООО «Машиностроение НН»</h3>
                <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress"><strong>Адрес:</strong> <span itemProp="addressLocality">г. Нижний Новгород</span>, пос. Черепичный, д. 14 «В», офис 3</p>
                <p><strong>email:</strong> <span itemProp="email">info@mashnn.ru</span></p>
                <p><strong>Тел.:</strong> <span itemProp="telephone">8 (831) 212 - 98 - 68</span></p>
                <p>Вы можете <span className={style.fileDownload}><a  href={filePdf} download={true}>скачать</a></span> реквизиты</p>
            </div></Roll>
        </div>
        </div>
    )
}

export default Contact
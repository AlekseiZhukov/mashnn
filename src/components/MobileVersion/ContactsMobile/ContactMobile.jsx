import React from 'react';
import style from './ContactMobile.module.css';
import backArrow from '../../../assets/imgs/onHomeArrow.svg';
import {NavLink} from "react-router-dom";
import NavMobile from "../NavMobile/NavMobile";
import logo from '../../../assets/imgs/logo.svg';
import Roll from 'react-reveal/Roll';
import filePdf from '../../../assets/Реквизиты-ООО-МАШИНОСТРОЕНИЕ-НН-1.pdf';
import {dataAddress} from '../../../assets/dataAddress'
const ContactMobile = () => {
    const {address, email, name, phone, multiChanelPhone} = dataAddress
    return ( <div className={style.blockBackground} >
            <div className={style.blockBackgroundShadow} />
        <div className={style.block} >
            <NavLink className={style.link} to={'/'}> <img  className={style.imgLink} src={backArrow} alt={''}/> </NavLink>
            <div className={style.backgroundLine}/>
            <div className={style.navWrapper}>
                <NavMobile />
            </div>
            <div className={style.wrapperLogo}>
                <img className={style.logoSlider} src={logo} alt={'logo'} />
            </div>
            <Roll left>
            <div className={style.ListWrapper} itemScope itemType="http://schema.org/Organization">
                <h2>Контакты</h2>
                <h3 itemProp="name">{name}</h3>
                <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress"><strong>Адрес:</strong> <span itemProp="addressLocality">{address.city}</span>,<br/> {address.street}, д. {address.house}, офис {address.office}</p>
                <p><strong>email:</strong> <span itemProp="email">{email}</span></p>
                <p><strong>Тел.:</strong> <span itemProp="telephone">{multiChanelPhone},</span></p>
                <p>Тел.:<span itemProp="telephone">{phone}</span></p>
                <p><strong>Тел.:</strong> <span className={style.fileDownload}><a  href={filePdf} download={true}>скачать</a></span> реквизиты</p>
            </div></Roll>
        </div>
        </div>

    )
}

export default ContactMobile
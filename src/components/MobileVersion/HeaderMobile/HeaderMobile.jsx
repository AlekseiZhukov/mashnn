import React from 'react';
import style from './HeaderMobile.module.css'
const HeaderMobile = () => {
    return (
        <div className={style.block}>
            <div className={style.wrapper}>
                <div className={style.wrapperLink}>
                    <div className={style.link1}><a href="tel:+78312129868">+7 (831) 212 98 68</a></div>
                    <div className={style.link2}><a href="mailto:info@mashnn.ru">info@mashnn.ru</a></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile
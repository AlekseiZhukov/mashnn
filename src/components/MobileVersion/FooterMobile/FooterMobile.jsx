import React from 'react';
import style from './FooterMobile.module.css'
import logoFooter from '../../../assets/imgs/logoFooter.svg'
import hand from '../../../assets/imgs/hand.jpg'
import RequisitesMobile from "./RequisitesMobile/RequisitesMobile";

class FooterMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRequisites: false
        }
    }

    handleClickButton = () => {
        this.setState ({
            showRequisites: true
        })
    }
    handleClickClose = () => {
        this.setState ({
            showRequisites: false
        })
    }

    render() {
    return (
        <div className={style.footerMobile}>
            {this.state.showRequisites ? <RequisitesMobile handleClickClose={this.handleClickClose}/> : null}
            <div className={style.wrapperMobile}>
                <div className={style.wrapperBlocksMobile}>
                    <div className={style.wrapperTwoBlocksMobile}>

                        <div className={style.blockMobile}>
                            <img className={style.logoFooterMobile} src={logoFooter} alt='logoFooter' width={'60px'} height={'auto'}/>
                            <img className={style.handMobile} src={hand} alt='logoFooter' width={'60px'} height={'auto'} />
                        </div>

                        <div className={style.blockMobile}>
                            <p>ООО «Машиностроение НН»</p>
                            <ul>

                                <li>Адрес: г. Нижний Новгород, пос. Черепичный, д. 14 «В», офис 3</li>
                                <li>email: info@mashnn.ru</li>
                                <li>Тел. 8 (831) 212 - 98 - 68</li>
                            </ul>
                            <button className={style.buttonMobile} onClick={this.handleClickButton}>показать реквизиты</button>
                        </div>
                    </div>
                    <div className={style.blockMapMobile}>
                        <iframe className={style.mapMobile} title={'map'}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A504eb2da70bad389482e2e04107d4199c2bbb13d85fac188fd9ddb7059980e24&amp;source=constructor"
                            width="665" height="400" frameBorder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
    }
}

export default FooterMobile
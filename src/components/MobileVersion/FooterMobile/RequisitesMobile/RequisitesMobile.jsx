import React from 'react';
import style from './RequisitesMobile.module.css'
import logo from '../../../../assets/imgs/logo.svg'

class RequisitesMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: true
            })
        }, 0)
    }


    render () {
    return (
        <div className={!this.state.show ? style.blockMobile: style.moveBlockMobile }>

            <div className={style.pageMobile}>
                <div className={style.closeButtonMobile} onClick={this.props.handleClickClose}>X</div>
                <div className={style.wrapperLogoMobile}>
                    <img className={style.logoSliderMobile} src={logo} alt={'logo'} />
                </div>

                <div className={style.blockRequisitesMobile}>
                    <h3>РЕКВИЗИТЫ</h3>
                    <p>Общество с ограниченной ответственностью<br />
                    «Машиностроение НН» <br />(ООО «Машиностроение НН»)</p>
                    <div>
                    <ul className={style.listMobile}>
                        <li><strong>Юридиче ский адрес:</strong> 603136, г. Н.Новгород, ул.
                        Академика Сахарова, д. 105, кв. 161</li>
                        <li><strong>Почтовый адрес:</strong> 603162, г. Н.Новгород, ул. Академика
                        Сахарова, д. 105, кв. 161</li>
                        <li><strong>ИНН</strong> 5261121390</li>
                        <li><strong>КПП</strong> 526101001</li>
                        <li><strong>ОГРН</strong> 1195275000282</li>
                        <li><strong>ОКПО</strong> 35410191</li>
                        <li><strong>ОКВЭД</strong> 25.62</li>
                        <li><strong>р/с:</strong> 40702810642000040153 в ВОЛГО-ВЯТСКИЙ БАНК ПАО
                        СБЕРБАНК в г. Нижний Новгород</li>
                            <ul>
                                <li><strong>БИК</strong> 042202603</li>
                                <li><strong>к/с:</strong> 30101810900000000603</li>
                            </ul>
                        <li><strong>Генеральный директор</strong> Савельев Сергей Александрович
                        действует на основании <strong>Устава</strong></li>
                        <li>сайт: www.mashnn.ru; e-mail: info@mashnn.ru</li>
                        <li>Тел. 8 (831) 212-98-68</li>
                    </ul>
                    </div>
                </div>

            </div>
        </div>
    )
    }
}

export default RequisitesMobile

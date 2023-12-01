import React from 'react';
import style from './Requisites.module.css'
import logo from '../../../assets/imgs/logo.svg'

class Requisites extends React.Component {
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
        <div className={!this.state.show ? style.block : style.moveBlock }>

            <div className={style.page}>
                <div className={style.closeButton} onClick={this.props.handleClickClose}>X</div>
                <div className={style.wrapperLogo}>
                    <img className={style.logoSlider} src={logo} alt={'logo'} />
                </div>

                <div className={style.blockRequisites}>
                    <h3>РЕКВИЗИТЫ</h3>
                    <p>Общество с ограниченной ответственностью<br />
                    «Машиностроение НН» <br />(ООО «Машиностроение НН»)</p>
                    <div>
                    <ul className={style.list}>
                        <li><strong>Юридиче ский адрес:</strong> 603009, г. Н.Новгород, ул.
                        Вологдина, д. 1, пом. П1</li>
                        <li><strong>Почтовый адрес:</strong> 603009, г. Н.Новгород, ул. Вологдина, д. 1, пом. П1</li>
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
                        <li>Многоканальный тел. 8 (831) 267-28-00</li>
                    </ul>
                    </div>
                </div>

            </div>
        </div>
    )
    }
}

export default Requisites

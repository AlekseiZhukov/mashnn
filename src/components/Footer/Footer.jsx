import React from 'react';
import style from './Footer.module.css'
import logoFooter from '../../assets/imgs/logoFooter.svg'
import hand from '../../assets/imgs/hand.jpg'
import Requisites from "./Requisites/Requisites";
import {dataAddress} from "../../assets/dataAddress.js"

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRequisites: false,
            dataAddress: dataAddress
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
        const {address, email, name, phone} = this.state.dataAddress
    return (
        <div className={style.footer}>
            {this.state.showRequisites ? <Requisites handleClickClose={this.handleClickClose}/> : null}
            <div className={style.wrapper}>
                <div className={style.wrapperBlocks}>

                        <div className={style.emptyBlock}>
                            <img className={style.logoFooter} src={logoFooter} alt='logoFooter' width={'60px'} height={'auto'}/>
                            <img className={style.hand} src={hand} alt='logoFooter' width={'60px'} height={'auto'} />
                        </div>

                        <div className={style.block}>
                            <ul>
                                <li>{name}</li>
                                <li>Адрес: {address.city}, <br /> {address.village},<br /> {address.street}, д. {address.house}, офис {address.office}</li>
                                <li>email: {email}</li>
                                <li>Тел. {phone}</li>
                            </ul>
                            <button className={style.buttonFooter} onClick={this.handleClickButton}>показать реквизиты</button>
                        </div>

                    <div className={style.block}>

                        <iframe className={style.map} title={'map'}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A504eb2da70bad389482e2e04107d4199c2bbb13d85fac188fd9ddb7059980e24&amp;source=constructor"
                            width="665" height="400" frameBorder="0"></iframe>
                    </div>

                </div>
            </div>

        </div>
    )
    }
}

export default Footer
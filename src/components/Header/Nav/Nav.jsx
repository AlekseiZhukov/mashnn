import React from 'react';
import style from './Nav.module.css'
import nav from '../../../assets/imgs/nav.svg'
import navRevers from '../../../assets/imgs/navRevers.svg'
import {NavLink} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        }
    }
     hendlClickNav = () => {

             this.setState({
                 showNav: !this.state.showNav
             })

     }



    render () {

        return (

            <div className={style.block}  >
                <div className={style.blockImg}  onClick={this.hendlClickNav}>
                    <img className={style.img} alt='' src={nav} />

                </div>
                <div className={!this.state.showNav ? style.blockNav : style.showBlockNav}>
                    <div className={style.blockImg}  onClick={this.hendlClickNav}>
                        <img className={style.img2} alt='' src={navRevers} />
                    </div>
                    <ul className={style.navList}>
                        <li> <span className={style.titleList}>услуги:</span>
                            <ul className={style.subNavList}>
                                <li> <NavLink activeClassName={style.selectedLink} to={'/turning'}>Токарная обработка</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/milling'}>Фрезерная обработка</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/boring'}>Расточные работы</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/grinding'}>Шлифовка</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/gearCutting'}>Зубонарезные работы</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/heatTreatment'}>Термическая обработка</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/welding'}>Сварочные работы</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/plasmaLaserCutting'}>Плазменная и лазерная резка</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/electroerosiveCutting'}>Электроэрозионная резка</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/sheetBending'}>Листогибочные работы</NavLink></li>
                                <li><NavLink activeClassName={style.selectedLink} to={'/examples'}> Примеры наших работы</NavLink></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav
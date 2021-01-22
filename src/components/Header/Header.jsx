import React from 'react';
import style from './Header.module.css'
import Nav from "./Nav/Nav";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            move: false
        }
    }
     updateMove = () => {
       let d = window.pageYOffset

         if (d === 0) {
             this.setState({
                 move:false
             })
         } else {
             this.setState({
                 move: true
             })
         }
     }

    componentDidMount() {
        window.addEventListener('scroll', this.updateMove)

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateMove)
    }

    render () {

    return (

        <div className={!this.state.move ? style.block : style.blockMove}>
            <div className={style.wrapper}>
                <div className={style.wrapperLink}>
                    <div className={style.link1}><a href="tel:+78312129868">+7 (831) 212 98 68</a></div>
                    <div className={style.link2}><a href="mailto:info@mashnn.ru">info@mashnn.ru</a></div>
                    <Nav />
                </div>
            </div>
        </div>
    )
    }
}

export default Header
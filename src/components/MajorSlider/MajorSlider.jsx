import React from 'react';
import {content} from './content';
import Slider from 'react-animated-slider';
import Header from "../Header/Header";
import './custom.css';
import {NavLink} from "react-router-dom";


const MajorSliderMobile = () => {


    return (<>

        <Header />
        <Slider  autoplay={4000} duration={1000}>
            {content.map((item, index) => (
                <div
                    key={index}
                    className='sliderContent'
                    style={{ background: `url('${item.image}') no-repeat center center`}}
                >
                    <div className='inner'>

                        <h1>{item.title}</h1>
                        { item.logo ? <img className='logoSlider' src={item.logo} alt='logo' width={'500px'} height={'auto'}/> : null}
                        <p>{item.description}</p>
                        { item.button ? <NavLink className='pathButton' to={`${item.path}`}><div className='button'>{item.button}</div></NavLink> : null}
                    </div>
                    <section>

                    </section>
                </div>
            ))}
        </Slider>
        </>
    )
}

export default MajorSliderMobile;

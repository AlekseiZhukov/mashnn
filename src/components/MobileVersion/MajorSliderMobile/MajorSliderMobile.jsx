import React from 'react';
import {content} from '../../MajorSlider/content';
import Slider from 'react-animated-slider';
import HeaderMobile from "../HeaderMobile/HeaderMobile";

import './customMobile.css';
import {NavLink} from "react-router-dom";

const MajorSliderMobile = () => {



    return (<>
        <HeaderMobile />
        <Slider autoplay={3000} className={'slider mobile'}>
            {content.map((item, index) => (
                <div
                    key={index}
                    className='sliderContent mobile'
                    style={{ background: `url('${item.imageM}') no-repeat center center`}}
                >
                    <div className='inner mobile'>

                        <h1>{item.title}</h1>
                        { item.logo ? <img className='logoSlider mobile' src={item.logo} alt='logo' width={'500px'} height={'auto'}/> : null}
                        <p>{item.description}</p>
                        { item.button ? <NavLink className='pathButton mobile' to={`${item.path}`}><div className='buttonMobile'>{item.button}</div></NavLink> : null}
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

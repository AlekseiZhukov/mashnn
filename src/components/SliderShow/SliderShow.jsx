import React from 'react'
import Slider from 'react-slick'

import './slick.css'
import './slick-theme.css'
import style from './SliderShow.module.css'

class SliderShow extends React.Component {

	render() {


		const settings = {
			fade: true,
			dots: true,
			infinite: true,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
		}

		return (
			<div >

				<Slider {...settings} >
                    {this.props.obj.map((item, index) => (
                        <div key={index} className={style.wrapperBlockSlider}>
                            <img className={style.img} src={item.image} alt={''} width={'300px'} height={'auto'}/>
                            <div className={style.blockSlider}>
                                <h3>{item.title}</h3>
								<p><span className={style.subTitle}>{item.titleParam1}</span><span>{item.param1}</span></p>
								<p><span className={style.subTitle}>{item.titleParam2}</span><span>{item.param2}</span></p>
								<p><span className={style.subTitle}>{item.titleParam3}</span><span>{item.param3}</span></p>
								<p><span className={style.subTitle}>{item.titleParam4}</span><span>{item.param4}</span></p>
								{ item.titleParam5 ? <p><span className={style.subTitle}>{item.titleParam5}</span><span>{item.param5}</span></p> : null}
                            </div>
                        </div>
                    ))}


				</Slider>

			</div>
		)
	}
}

export default SliderShow

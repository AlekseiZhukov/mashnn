import React from 'react'
import Slider from 'react-slick'

import style from './SliderShowMobile.module.css'

function SampleNextArrow(props) {
	const { className,  onClick } = props;
	return (
		<div
			className={className}
			style={{  display: "block",  top: "230px",	right: "24px",  }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{ display: "block", top: "230px", left: "-7px",
				"z-index": "1" }}
			onClick={onClick}
		/>
	);
}

class SliderShowMobile extends React.Component {



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
			className: "mobile",
			dotsClass:'dotMobile',

			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
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
								<p><span className={style.subTitle}>{item.titleParam5}</span><span>{item.param5}</span></p>

							</div>
                        </div>
                    ))}


				</Slider>

			</div>
		)
	}
}

export default SliderShowMobile

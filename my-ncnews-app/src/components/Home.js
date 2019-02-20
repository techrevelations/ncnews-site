import React, {Component} from 'react';
import Carousel from './Carousel';

export default class Home extends Component {
	render() {
		return (
			<div className="home-page">
				{/* {<Carousel />} */}
				<div>{<img className="Background" src={'/media/background.png'} alt="Read All About it" />}</div>
			</div>
		);
	}
}

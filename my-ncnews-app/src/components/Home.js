import React, {Component} from 'react';

export default class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<div>{<img className="Background" src={'/media/background.png'} alt="Read All About it" />}</div>
			</div>
		);
	}
}

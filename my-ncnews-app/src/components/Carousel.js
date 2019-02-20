import React, {Component} from 'react';
import {getArticles} from '../CallAPI';

export default class Carousel extends Component {
	state = {
		articles: []
	};
	render() {
		let count = 0;
		const {articles} = this.state;
		return (
			<div className="slider">
				{/*
        {articles.reduce(article => {
          let randomItem = articles[Math.floor(Math.random() * articles.length)]
          // console.log(randomItem)
          return <p> {randomItem.title} </p>
        })} */}

				{articles.map((article, index) => {
					let randomItem = articles[Math.floor(Math.random() * articles.length)];

					if (article === randomItem || index === articles.length - 1) {
						count++;

						return (
							<div className="slides" id={count}>
								<h3>Featured Article</h3>
								<h4>{randomItem.title}:</h4>
								<h5>{randomItem.body}</h5>
							</div>
						);
						// }
						// <p>{article.body}</p>
					}
				})}
			</div>
		);
	}
	async componentDidMount() {
		const articles = await getArticles();
		this.setState({
			articles: articles
		});
	}
}

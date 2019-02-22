import React, {Component, Fragment} from 'react';
import {getArticles, sortArticles} from '../CallAPI';
import {Link} from '@reach/router';
import Card from './Card';
import throttel from 'lodash';

export default class Articles extends Component {
	state = {
		articles: [],
		page: 1
	};
	render() {
		const {articles} = this.state;
		const {user} = this.props;
		return !articles[0] || !user ? (
			<div>
				<p>Loading articles...</p>
				<p>You must be logged in to view articles</p>
			</div>
		) : (
			<div className="Articles">
				<h1 className="ArtTitle">Articles</h1>
				<Card className="Cats" getArticlesByCatagory={this.getArticlesByCatagory} />

				{/* <h2 className='gridItem'>Article</h2> */}
				<div className="articleList">
					{articles.map(article => {
						const year = article.created_at.substring(0, 4);
						const month = article.created_at.substring(5, 7);
						const monthInitial = {
							'01': 'jan',
							'02': 'feb',
							'03': 'mar',
							'04': 'apr',
							'05': 'may',
							'06': 'jun',
							'07': 'jul',
							'08': 'aug',
							'09': 'sep',
							'10': 'oct',
							'11': 'nov',
							'12': 'dec'
						};
						const day = article.created_at.substring(8, 10);
						return (
							<div className="articleCard">
								<Fragment key={article.article_id}>
									<Link to={`/articles/${article.article_id}`} className="gridItem">
										{article.title}
									</Link>{' '}
								</Fragment>
								<h5 className="ArtBody"> {article.body.substring(0, 250) + '...'}</h5>
								<div className="ArtAuthor">
									<img
										id="Artlogo"
										src={'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024'}
										alt="logo"
									/>
								</div>
								<div className="ArtTime">
									<span className="day">{day}</span>
									<span className="month">{monthInitial[month]}</span>
									<span class="year">{year}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	async componentDidMount() {
		const articles = await getArticles();
		// this.addScrollEventListener();
		this.setState({
			articles: articles
		});
	}

	addScrollEventListener = () => {
		document.querySelector('.Articles').addEventListener('scroll', this.handleScroll);
	};

	// handleScroll = throttel(event => {
	// 	const {clientHeight, scrollTop, scrollHeight} = event.target;
	// 	const distanceFromBottom = scrollHeight + scrollTop;
	// }, 1000);

	getArticlesByCatagory = async criteria => {
		const {} = this.state;
		const articles = await sortArticles(criteria);
		// console.log(articles)
		this.setState({
			articles: articles
		});
	};
}

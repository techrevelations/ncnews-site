import React, {Component, Fragment} from 'react';
import {getArticles, sortArticles} from '../CallAPI';
import {Link} from '@reach/router';
import Card from './Card';

export default class Articles extends Component {
	state = {
		articles: []
	};
	render() {
		const {articles} = this.state;
		return !articles[0] ? (
			<p>Loading articles...</p>
		) : (
			<div>
				<h1>Articles</h1>
				<h1>King Luke</h1>
				<Card getArticlesByCatagory={this.getArticlesByCatagory} />

				{/* <h2 className='gridItem'>Article</h2> */}
				{articles.map(article => {
					return (
						<p>
							<Fragment key={article.article_id}>
								<Link to={`/articles/${article.article_id}`} className="gridItem">
									{article.title}
								</Link>{' '}
							</Fragment>
							<h4>{article.author}</h4>
							<h5>{article.created_at}</h5>
						</p>
					);
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

	getArticlesByCatagory = async criteria => {
		const articles = await sortArticles(criteria);
		// console.log(articles)
		this.setState({
			articles: articles
		});
	};
}

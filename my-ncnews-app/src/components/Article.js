import React, {Component, Fragment} from 'react';
import {getArticleById, getComments, voteOnArticle} from '../CallAPI';
import {Link} from '@reach/router';
import Comment from './Comment';
import DeleteArticle from './DeleteArticle';
import axios from 'axios';

const BASE_URL = 'https://nc-news-stack.herokuapp.com/api';

export default class Article extends Component {
	state = {
		article: [],
		comments: [],
		voteChange: 0,
		hasError: false
	};
	render() {
		const {article, comments, hasError} = this.state;
		if (hasError === true) {
			return <p>Something went wrong</p>;
		}
		return !article[0] ? (
			<p>Loading articles...</p>
		) : (
			<div className="Article">
				<h2 className="ArticleTitle">{article[0].title}</h2>

				<h3 className="ArticleBody">{article[0].body}</h3>
				<div className="ArticleTopic" key={article[0].topic}>
					<Link to={`/topics/${article[0].topic}/articles`}>Read more articles about {article[0].topic}</Link>
				</div>
				<br />
				<div className="ArticleAuthor" key={article[0].author}>
					<Link to={`/users/${article[0].author}`}>Read more articles by {article[0].author}</Link>
				</div>

				<h5 className="ArticleTimeStamp">{article[0].created_at.substring(0, 10)}</h5>
				{this.props.user.username === article[0].author && (
					<div className="ArticleDelete">
						<DeleteArticle article_id={this.props.article_id} removeArticle={this.removeArticle} />
					</div>
				)}
				<div className="ArticleVotes">
					<h5 className="VotesCount">{article[0].votes}</h5>
					<button
						disabled={this.state.voteChange === 1}
						className="Greenlogo"
						onClick={() => this.handleVoteClick(1)}
					>
						<img
							id="logo"
							src={
								'http://uploads.friendsresilience.org/wp-content/uploads/2017/01/23002444/Paula-Barrett-Thumbs-Up-Actions.jpg'
							}
							alt="upVote"
						/>
					</button>
					<button
						disabled={this.state.voteChange === -1}
						className="Redlogo"
						onClick={() => this.handleVoteClick(-1)}
					>
						<img
							id="logo"
							src={'https://openclipart.org/download/285479/Thumbs-down-Circle.svg'}
							alt="downVote"
						/>
					</button>
				</div>
				<div className="ArticleComments">
					<h3>Comments</h3>
					{comments.map(comment => {
						// console.log(comment)
						return (
							<div className="CommentCard">
								<Comment comment={comment} key={comment.comment_id} article={this.props.article_id} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
	handleVoteClick = voteInc => {
		const voteCheck = this.state.voteChange + voteInc;
		this.setState({voteChange: voteCheck});
		voteOnArticle(voteInc, this.props.article_id).then(article => {
			console.log(article);
			this.setState(prevState => {
				return {
					article: [
						{
							...prevState.article[0],
							votes: article[0].votes
						}
					]
					//voteChange
				};
			});
		});
	};

	async componentDidMount() {
		const article = await getArticleById(this.props.article_id);
		const comments = await getComments(this.props.article_id, this.state.comment_id);
		this.setState({
			comments: comments,
			article: article
		});
		// 	.catch(err => {
		// 	console.log(err);
		// 	this.setState({hasError: true});
		// });
	}

	removeArticle = id => {
		axios.delete(`${BASE_URL}/articles/${id}`).then(() => {
			this.props.navigate('/articles');
		});
	};
}

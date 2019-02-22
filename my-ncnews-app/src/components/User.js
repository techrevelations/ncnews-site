import React, {Component, Fragment} from 'react';
import {getUserById} from '../CallAPI';
import {getArticles} from '../CallAPI';
import {Link} from '@reach/router';

export default class User extends Component {
	state = {
		user: '',
		articles: []
	};
	render() {
		const {user, articles} = this.state;
		console.log(user);
		return (
			<div className="SingleUser">
				<div className="SingleUserName">{user.username}</div>
				<div className="SingleName">{user.name}</div>
				<div className="singlePic">
					<img
						id="Userlogo"
						src={'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024'}
						alt="logo"
					/>
				</div>
				<div className="SingleArtTitle">Articles By {user.username} </div>
				<div className="SingleArticles">
					{articles.map(article => {
						console.log(article);
						if (article.author === user.username) {
							return (
								<p>
									<Fragment key={article.article_id}>
										<Link to={`/articles/${article.article_id}`} className="gridItem">
											{article.title}
										</Link>{' '}
									</Fragment>
								</p>
							);
						}
					})}
				</div>
			</div>
		);
	}
	async componentDidMount() {
		const articles = await getArticles();
		this.setState({
			articles: articles
		});
		const user = await getUserById(this.props.username);
		this.setState({
			user: user
		});
	}
}

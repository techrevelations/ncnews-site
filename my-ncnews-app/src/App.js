import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import {Router} from '@reach/router';
import Articles from './components/Articles';
import Nav from './components/Nav';
import Users from './components/Users';
import User from './components/User';
// import Slogan from './components/Slogan';
import Auth from './components/Auth';
import Article from './components/Article';
import Topics from './components/Topics';
import TopicArticles from './components/TopicArticles';
import NotFound from './NotFound';
import * as api from './CallAPI';

class App extends Component {
	state = {
		user: ''
	};
	render() {
		console.log(this.state.user);
		return (
			<div className="App">
				<Nav />
				{/* <Slogan /> */}
				<div className="Auth">
					<Auth
						password={this.password}
						user={this.state.user}
						setUser={this.setUser}
						clearUser={this.clearUser}
					/>
				</div>
				<Router className="default">
					<Home path="/" />
					<Articles path="/articles" />
					<Article path="/articles/:article_id" />
					<Users path="/users" />
					<User path="/users/:username" />
					<Topics path="/topics" />
					<TopicArticles path="topics/:slug/articles" />
					<NotFound default />
				</Router>
			</div>
		);
	}
	setUser = username => {
		return api.getUserById(username).then(user => this.setState({user}));
	};

	clearUser = () => {
		this.setState({user: ''});
	};
}

export default App;

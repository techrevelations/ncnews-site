import React, {Component, Fragment} from 'react';
import {getTopics} from '../CallAPI';
import {Link} from '@reach/router';

export default class Topics extends Component {
	state = {
		topics: []
	};
	render() {
		const {topics} = this.state;
		const {user} = this.props;
		return !topics[0] || !user ? (
			<div>
				<p>Loading topics...</p>
				<p>You must be logged in to view topics</p>
			</div>
		) : (
			<div>
				<h1>Topics</h1>
				{/* <h2 className='gridItem'>Article</h2> */}
				{topics.map(topic => {
					return (
						<p>
							<Fragment key={topic.slug}>
								<Link to={`/topics/${topic.slug}/articles`} className="gridItem">
									{topic.slug}
								</Link>{' '}
							</Fragment>
						</p>
					);
				})}
			</div>
		);
	}

	async componentDidMount() {
		const topics = await getTopics();
		this.setState({
			topics: topics
		});
	}
}

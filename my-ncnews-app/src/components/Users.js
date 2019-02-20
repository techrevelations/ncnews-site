import React, {Component, Fragment} from 'react';
import {getUsers} from '../CallAPI';
import {Link} from '@reach/router';

export default class Users extends Component {
	state = {
		users: []
	};
	render() {
		const {users} = this.state;
		const {user} = this.props;
		return !users[0] || !user ? (
			<div>
				<p>Loading users...</p>
				<p>You must be logged in to view users</p>
			</div>
		) : (
			<div>
				<h1>Users</h1>
				{/* <h2 className='gridItem'>Article</h2> */}
				{users.map(user => {
					return (
						<p>
							<Fragment key={user.username}>
								<Link to={`/users/${user.username}`} className="AnotherItem">
									{user.username}
								</Link>{' '}
								<img
									id="logo"
									src={'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024'}
									alt="logo"
								/>
							</Fragment>
						</p>
					);
				})}
			</div>
		);
	}

	async componentDidMount() {
		const users = await getUsers();
		this.setState({
			users: users
		});
	}
}

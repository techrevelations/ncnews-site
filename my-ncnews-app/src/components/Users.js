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
			<div className="Users">
				<h1 className="UsersTitle">Users</h1>
				{/* <h2 className='gridItem'>Article</h2> */}
				<div className="UserList">
					{users.map(user => {
						return (
							<div className="UserCard" key={user.username}>
								<Link to={`/users/${user.username}`} className="UserName">
									{user.username}
								</Link>{' '}
								<div className="UserPic">
									<img
										id="logo"
										src={'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024'}
										alt="logo"
									/>
								</div>
							</div>
						);
					})}
				</div>
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

import React, {Component} from 'react';

//const BASE_URL = 'https://nc-news-stack.herokuapp.com/api';
export default class Auth extends Component {
	state = {
		Username: '',
		password: ''
	};
	render() {
		const {user} = this.props;

		if (user)
			return (
				<div>
					Welcome back {this.props.user.username} <br />
					<button id="signin" onClick={this.handleLogOut}>
						LogOut
					</button>
					{/* {<div className="body">{this.props.children}</div>} */}
				</div>
			);
		else {
			return (
				<div>
					{this.props.user === undefined && <p>Sorry this username does not exist</p>}

					<form>
						<h1 id="title">Login Here</h1>
						<input
							id="auth"
							type="text"
							onChange={this.handleUserChange}
							value={this.state.user}
							placeholder="Enter username..."
						/>
						<input
							id="auth"
							type="password"
							onChange={this.handlePassChange}
							value={this.state.password}
							placeholder="Enter password..."
						/>
						<button id="signin" type="submit" onClick={this.handleSubmit}>
							Submit
						</button>
					</form>
				</div>
			);
		}
	}

	handleUserChange = e => {
		const {value} = e.target;
		this.setState({
			Username: value
		});
	};

	handlePassChange = e => {
		const {value} = e.target;
		this.setState({
			password: value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
		const {Username, password} = this.state;
		if (!Username || !password) alert('Please complete all fields!');
		else {
			this.props.setUser(Username);
		}
	};
	handleLogOut = event => {
		event.preventDefault();
		this.setState({password: ''});
		this.props.clearUser();
	};
	//console.log(setUser, password);
	// axios
	// 	.get(`${BASE_URL}/users/${Username}`)
	// 	.then(({data}) => {
	// 		if (data) {
	// 			this.props.setUser(setUser);
	// 			this.setState({
	// 				user: ''
	// 			});
	// }
	// })
}

//     name: userName,
//     password: password
//   })
//   this.props.login(currentUser)
//   this.setState({ userName: '', password: '' })
// }

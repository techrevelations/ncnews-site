import React, {Component} from 'react';

export default class Card extends Component {
	constructor() {
		super();

		this.state = {
			showMenu: false
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();

		this.setState({showMenu: true}, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({showMenu: false}, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

	render() {
		return (
			<div>
				<button id="sortBy" onClick={this.showMenu}>
					Sort By
				</button>

				{this.state.showMenu ? (
					<div
						className="menu"
						ref={element => {
							this.dropdownMenu = element;
						}}
					>
						<button id="sortBy" onClick={() => this.props.getArticlesByCatagory('created_at')}>
							{' '}
							Recent{' '}
						</button>
						<button id="sortBy" onClick={() => this.props.getArticlesByCatagory('comment_count')}>
							{' '}
							Comments{' '}
						</button>
						<button id="sortBy" onClick={() => this.props.getArticlesByCatagory('votes')}>
							{' '}
							Votes{' '}
						</button>
					</div>
				) : null}
			</div>
		);
	}
}

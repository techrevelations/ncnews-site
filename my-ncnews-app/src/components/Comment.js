import React, {Component} from 'react';
// import { voteOnComment } from '../CallAPI'
import axios from 'axios';

class Comment extends Component {
	state = {
		comment: this.props.comment,
		voteChange: 0
	};
	render() {
		const {comment, voteChange} = this.state;
		return (
			<div>
				<p>{comment.body}</p>
				<h5>By: {comment.author}</h5>
				<h5>Votes: {comment.votes + voteChange}</h5>
				<button
					className="Commentlogo"
					disabled={this.state.voteChange === 1}
					type="button"
					onClick={() => this.handleVoteClick(comment.comment_id, 1)}
				>
					<img
						id="Commentlogo"
						src={
							'http://uploads.friendsresilience.org/wp-content/uploads/2017/01/23002444/Paula-Barrett-Thumbs-Up-Actions.jpg'
						}
						alt="upVote"
					/>
				</button>
				<button
					className="Commentlogo"
					disabled={this.state.voteChange === -1}
					type="button"
					onClick={() => this.handleVoteClick(comment.comment_id, -1)}
				>
					<img
						id="Commentlogo"
						src={'https://openclipart.org/download/285479/Thumbs-down-Circle.svg'}
						alt="downVote"
					/>
				</button>
				<br />
			</div>
		);
	}
	// handleVoteClick = (comm_id, num) => {
	//   const { article } = this.props
	//   const add = this.props.comment.votes + num
	//   console.log(add)
	//   voteOnComment(num, article, comm_id).then(comment => {
	//     console.log(add, article, comm_id)
	//     this.setState(prevState => {
	//       console.log(prevState, this.state.voteChange)
	//       return {
	//         comment: {
	//           ...this.props.comment,
	//           votes: add
	//         },
	//         voteChange: this.state.voteChange + num
	//       }
	//     })
	//   })
	// }

	handleVoteClick = (comm_id, num) => {
		const {article} = this.props;
		const voteChecker = this.state.voteChange + num;
		this.setState({
			voteChange: voteChecker
		});
		const add = {inc_votes: num};
		axios
			.patch(`https://nc-news-stack.herokuapp.com/api/articles/${article}/comments/${comm_id}`, add)
			.then(({data}) => {});
	};
}

export default Comment;

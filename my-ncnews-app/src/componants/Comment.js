import React, { Component } from 'react'
import { voteOnComment } from '../CallAPI'

class Comment extends Component {
  state = {
    comment: [],
    voteChange: 0
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.comment.body}</p>
        <h5>By: {this.props.comment.author}</h5>
        <h5>Votes: {this.props.comment.votes}</h5>
        <button onClick={() => this.handleVoteClick(1)}>
          <img
            id='logo'
            src={
              'http://uploads.friendsresilience.org/wp-content/uploads/2017/01/23002444/Paula-Barrett-Thumbs-Up-Actions.jpg'
            }
            alt='upVote'
          />
        </button>
        <button onClick={() => this.handleVoteClick(-1)}>
          <img id='logo' src={'https://openclipart.org/download/285479/Thumbs-down-Circle.svg'} alt='downVote' />
        </button>
        <br /> <br /> <br />
      </div>
    )
  }
  handleVoteClick = voteChange => {
    voteOnComment(voteChange, this.props.article, this.props.comment.comment_id).then(comment => {
      console.log(comment)
      this.setState(prevState => {
        console.log(prevState)
        return {
          comment: [
            {
              ...this.props.comment,
              votes: this.props.comment.votes
            }
          ]
        }
      })
    })
  }
}
export default Comment

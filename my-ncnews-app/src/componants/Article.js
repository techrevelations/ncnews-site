import React, { Component, Fragment } from 'react'
import { getArticleById, getComments, voteOnArticle } from '../CallAPI'
import { Link } from '@reach/router'
import Comment from './Comment'

export default class Article extends Component {
  state = {
    article: [],
    comments: [],
    voteChange: 0
  }
  render () {
    const { article, comments, voteChange } = this.state
    // console.log(comments)
    return !article[0] ? (
      <p>Loading articles...</p>
    ) : (
      <div>
        <h2>{article[0].title}</h2>
        <h3>Topic: {article[0].topic}</h3>
        <h3>{article[0].body}</h3>
        <br />
        <Fragment key={article[0].author}>
          <Link to={`/users/${article[0].author}`}>{article[0].author}</Link>
        </Fragment>

        <h5>{article[0].created_at}</h5>
        <h5>Votes: {article[0].votes}</h5>
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
        <h3>Comments</h3>
        {comments.map(comment => {
          // console.log(comment)
          return (
            <div>
              <Comment comment={comment} key={comment.comment_id} article={this.props.article_id} />
            </div>
          )
        })}
      </div>
    )
  }
  handleVoteClick = voteChange => {
    voteOnArticle(voteChange, this.props.article_id).then(article => {
      console.log(article)
      this.setState(prevState => {
        return {
          article: [
            {
              ...prevState.article[0],
              votes: article[0].votes
            }
          ]
        }
      })
    })
  }

  async componentDidMount () {
    const article = await getArticleById(this.props.article_id)
    this.setState({
      article: article
    })
    const comments = await getComments(this.props.article_id, this.state.comment_id)
    this.setState({
      comments: comments
    })
  }
}

import React, { Component } from 'react'
import { getArticleById } from '../CallAPI'

export default class Article extends Component {
  state = {
    article: []
  }
  render () {
    const { article } = this.state
    console.log(article)
    return !article[0] ? (
      <p>Loading articles...</p>
    ) : (
      <div>
        <h2>{article[0].title}</h2>
        <h3>Topic: {article[0].topic}</h3>
        <h5>{article[0].body}</h5>
        <br />
        <h5>Author: {article[0].author}</h5>
        <h5>{article[0].created_at}</h5>
        <h5>Votes: {article[0].votes}</h5>
      </div>
    )
  }
  async componentDidMount () {
    const article = await getArticleById(this.props.article_id)
    this.setState({
      article: article
    })
  }
}

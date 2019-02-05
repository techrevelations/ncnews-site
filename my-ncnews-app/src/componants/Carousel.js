import React, { Component } from 'react'
import { getArticles } from '../CallAPI'

export default class Carousel extends Component {
  state = {
    articles: []
  }
  render () {
    const { articles } = this.state
    return (
      <div>
        <h3>Featured Articles</h3>
        {articles.map(article => {
          return <p>{article.title}</p>
        })}
      </div>
    )
  }
  async componentDidMount () {
    const articles = await getArticles()
    this.setState({
      articles: articles
    })
  }
}

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
        {articles.map((article, index) => {
          let randomItem = articles[Math.floor(Math.random() * articles.length)]
          if (article === randomItem || index === articles.length - 1) {
            return (
              <p>
                <h3>{randomItem.title}:</h3>
                <h5>{randomItem.body}</h5>
              </p>
            )
            // }
            // <p>{article.body}</p>
          }
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

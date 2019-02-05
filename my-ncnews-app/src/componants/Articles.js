import React, { Component, Fragment } from 'react'
import { getArticles } from '../CallAPI'
import { Link } from '@reach/router'

export default class Articles extends Component {
  state = {
    articles: []
  }
  render () {
    const { articles } = this.state
    return !articles[0] ? (
      <p>Loading articles...</p>
    ) : (
      <div>
        <h1>Articles</h1>
        {/* <h2 className='gridItem'>Article</h2> */}
        {articles.map(article => {
          return (
            <p>
              <Fragment key={article.article_id}>
                <Link to={`/articles/${article.article_id}`} className='gridItem'>
                  {article.title}
                </Link>{' '}
              </Fragment>
            </p>
          )
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

import React, { Component, Fragment } from 'react'
import { getArticlesByTopicId } from '../CallAPI'
import { Link } from '@reach/router'

export default class TopicArticles extends Component {
  state = {
    articles: []
  }
  render () {
    const { articles } = this.state
    console.log(articles)
    return !articles[0] ? (
      <p>Loading articles...</p>
    ) : (
      <div>
        <h1>articles about {this.props.slug}</h1>
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
    const articles = await getArticlesByTopicId(this.props.slug)
    this.setState({
      articles: articles
    })
  }
}

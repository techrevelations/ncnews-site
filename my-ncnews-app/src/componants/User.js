import React, { Component, Fragment } from 'react'
import { getUserById } from '../CallAPI'
import { getArticles } from '../CallAPI'
import { Link } from '@reach/router'

export default class User extends Component {
  state = {
    user: '',
    articles: []
  }
  render () {
    const { user, articles } = this.state
    console.log(user)
    return (
      <div>
        <h2>{user.username}</h2>
        <h3>{user.name}</h3>
        <div>
          <img id='logo' src={'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024'} alt='logo' />
        </div>
        {console.log(user)}
        <br />
        <h3>Articles By {user.username} </h3>
        <div>
          {articles.map(article => {
            console.log(article)
            if (article.author === user.username) {
              return (
                <p>
                  <Fragment key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`} className='gridItem'>
                      {article.title}
                    </Link>{' '}
                  </Fragment>
                </p>
              )
            }
          })}
        </div>
      </div>
    )
  }
  async componentDidMount () {
    const articles = await getArticles()
    this.setState({
      articles: articles
    })
    const user = await getUserById(this.props.username)
    this.setState({
      user: user
    })
  }
}

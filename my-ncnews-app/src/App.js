import React, { Component } from 'react'
import './App.css'
import Home from './componants/Home'
import { Router } from '@reach/router'
import Articles from './componants/Articles'
import Nav from './componants/Nav'
import Users from './componants/Users'
import User from './componants/User'
import Slogan from './componants/Slogan'
import Auth from './componants/Auth'
import Article from './componants/Article'
import Topics from './componants/Topics'
import TopicArticles from './componants/TopicArticles'
import NotFound from './NotFound'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <button />
        <div className='Header'>
          <Nav />
        </div>
        <div className='topright'>
          <Slogan />
        </div>
        <div className='Auth'>
          <Auth checkUserAndPassword={this.checkUserAndPassword} user={'ji'} setUser={this.setUser} />
        </div>
        <div className='content'>
          <Router className='default'>
            <Home path='/' />
            <Articles path='/articles' />
            <Article path='/articles/:article_id' />
            <Users path='/users' />
            <User path='/users/:username' />
            <Topics path='/topics' />
            <TopicArticles path='topics/:slug/articles' />
            <NotFound default />
          </Router>
        </div>
      </div>
    )
  }
}

export default App

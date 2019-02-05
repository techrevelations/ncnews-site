import React, { Component } from 'react'
import './App.css'
import Home from './componants/Home'
import { Router } from '@reach/router'
import Articles from './componants/Articles'
import Nav from './componants/Nav'
import Users from './componants/Users'
import User from './componants/User'
import Slogan from './componants/Slogan'
// import Auth from './componants/Auth'
import Article from './componants/Article'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='Header'>
          <Nav /> <Slogan />
        </div>
        <div className='content'>
          <Router className='default'>
            <Home path='/' />
            <Articles path='/articles' />
            <Article path='/articles/:article_id' />
            <Users path='/users' />
            <User path='/users/:username' />
          </Router>
        </div>
      </div>
    )
  }
}

export default App

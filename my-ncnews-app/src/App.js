import React, { Component } from 'react'
import './App.css'
import Home from './componants/Home'
import { Router } from '@reach/router'
import Articles from './componants/Articles'
import Nav from './componants/Nav'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Router className='default'>
          <Home path='/' />

          <Articles path='/articles' />
        </Router>
      </div>
    )
  }
}

export default App

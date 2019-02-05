import React, { Component } from 'react'
import Login from './Login'
import Carousel from './Carousel'

export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div>
          <Login checkUserAndPassword={this.checkUserAndPassword} />
        </div>
        <Carousel />
      </div>
    )
  }
}

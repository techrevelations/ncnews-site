import React, { Component } from 'react'

export default class Background extends Component {
  render () {
    return (
      <div className='background'>
        <img id='bg' src={'/media/background.png'} alt='' />
      </div>
    )
  }
}

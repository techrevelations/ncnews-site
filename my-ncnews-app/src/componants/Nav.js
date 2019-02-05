import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class Nav extends Component {
  render () {
    return (
      <div className='nav'>
        <Link className='navItem' to='/'>
          <img id='logo' src={'/media/logo-2.png'} alt='logo' />
        </Link>
        <Link className='navItem' to='/articles'>
          Articles
        </Link>
        <Link className='navItem' to='/users'>
          Users
        </Link>
      </div>
    )
  }
}

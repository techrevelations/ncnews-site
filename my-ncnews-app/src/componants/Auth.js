import React, { Component } from 'react'

export default class Auth extends Component {
  render () {
    const { user, children } = this.props
    if (user) {
      return children
    } else {
      ;<h3>'Please Login'</h3>
    }
  }
}

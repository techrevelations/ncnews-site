import React, { Component } from 'react'
import { getUserById } from '../CallAPI'

export default class User extends Component {
  state = {
    user: ''
  }
  render () {
    const { user } = this.state
    console.log(user)
    return (
      <div>
        {/* <h2>{user[0].username}</h2> */}
        {/* <h3>Topic: {article[0].topic}</h3>
        <h5>{article[0].body}</h5>
        <br />
        <h5>Author: {article[0].author}</h5>
        <h5>{article[0].created_at}</h5>
        <h5>Votes: {article[0].votes}</h5> */}
        console.log(user)
      </div>
    )
  }
  async componentDidMount () {
    const user = await getUserById(this.props.username)
    this.setState({
      user: user
    })
  }
}

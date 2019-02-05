import React, { Component, Fragment } from 'react'
import { getUsers } from '../CallAPI'
import { Link } from '@reach/router'

export default class Users extends Component {
  state = {
    users: []
  }
  render () {
    const { users } = this.state
    return !users[0] ? (
      <p>Loading users...</p>
    ) : (
      <div>
        <h1>Users</h1>
        {/* <h2 className='gridItem'>Article</h2> */}
        {users.map(user => {
          return (
            <p>
              <Fragment key={user.username}>
                <Link to={`/users/${user.username}`} className='AnotherItem'>
                  {user.username}
                </Link>{' '}
              </Fragment>
            </p>
          )
        })}
      </div>
    )
  }

  async componentDidMount () {
    const users = await getUsers()
    this.setState({
      users: users
    })
  }
}

import React, { Component } from 'react'
// import { checkCredentials } from "../";
export default class Login extends Component {
  state = {
    userName: '',
    password: ''
  }
  render () {
    return (
      <div>
        <h2 className='gridItem'>Login Here</h2>
        <form>
          <input
            type='text'
            onChange={this.handleUserLogin}
            value={this.state.userName}
            placeholder='Enter username...'
          />
          <br />
          <input
            type='text'
            onChange={this.handlePasswordLogin}
            value={this.state.password}
            placeholder='Enter password...'
          />
          <br />
          <br />
          <button type='submit' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }

  handleUserLogin = event => {
    this.setState({ userName: event.target.value })
  }

  handlePasswordLogin = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { userName, password } = this.state
    if (!userName || password) alert('Please complete all fields!')
    // else {
    //   const currentUser = await checkCredentials({
    //     name: userName,
    //     password: password
    //   })
    //   this.props.login(currentUser)
    //   this.setState({ userName: '', password: '' })
    // }
  }
}

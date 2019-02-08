import React, { Component } from 'react'
// import { checkCredentials } from "../";
import axios from 'axios'
const BASE_URL = 'https://nc-news-stack.herokuapp.com/api'
export default class Auth extends Component {
  state = {
    setUser: '',
    password: '',
    hasError: false
  }
  render () {
    const { hasError } = this.state
    return (
      <div>
        {hasError && <p>Sorry this username does not exist</p>}
        <h2 className='gridItem'>Login Here</h2>
        <form>
          <input
            type='text'
            onChange={this.handleUserChange}
            value={this.state.setUser}
            placeholder='Enter username...'
          />
          <input
            type='text'
            onChange={this.handlePassChange}
            value={this.state.password}
            placeholder='Enter password...'
          />
          <button type='submit' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }

  handleUserChange = e => {
    const { value } = e.target
    this.setState({
      setUser: value
    })
  }

  handlePassChange = e => {
    const { value } = e.target
    this.setState({
      password: value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { setUser, password } = this.state
    if (!setUser || !password) alert('Please complete all fields!')
    else {
      console.log(setUser, password)
      axios
        .get(`${BASE_URL}/users/${setUser}`)
        .then(({ data }) => {
          if (data) {
            this.props.setUser(setUser)
            this.setState({
              setUser: ''
            })
          }
        })
        .catch(err => {
          this.setState({
            hasError: true
          })
        })
    }
  }

  //     name: userName,
  //     password: password
  //   })
  //   this.props.login(currentUser)
  //   this.setState({ userName: '', password: '' })
  // }
}

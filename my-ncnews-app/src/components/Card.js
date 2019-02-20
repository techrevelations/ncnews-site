import React, { Component } from 'react'

export default class Card extends Component {
  constructor () {
    super()

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu (event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu (event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.showMenu}>Sort By</button>

        {this.state.showMenu ? (
          <div
            className='menu'
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            <button onClick={() => this.props.getArticlesByCatagory('created_at')}> Most Recent </button>
            <button onClick={() => this.props.getArticlesByCatagory('comment_count')}> Most Commented </button>
            <button onClick={() => this.props.getArticlesByCatagory('created_at')}> Most UpVoted </button>
          </div>
        ) : null}
      </div>
    )
  }
}

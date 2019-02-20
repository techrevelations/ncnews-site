import React, { Component } from 'react'

export default class DeleteArticle extends Component {
  render () {
    return (
      <div>
        <button type='submit' onClick={() => this.props.removeArticle(this.props.article_id)}>
          Delete Article
        </button>
      </div>
    )
  }
}

'use strict'

import React, { Component } from 'react'

class Title extends Component {
  static defaultProps = {
    name: 'Without name'
  }

  render() {
    return (
      <h1 style={{
        display: 'flex',
        textAlign: 'center',
        background: 'red',
        width: '250px',
        height: '150px',
        letterSpacing: '5px'
      }}>Olá {this.props.name}</h1>
    )
  }
}

export default Title
import React, { Component } from 'react'

import ExampleComponent from 'reactland-modal'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <ExampleComponent text='reactland' />
        <ExampleComponent text='test' />
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './main.less'

export default class Main extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
      <div className="layout-main">
        {this.props.children}
      </div>
    )
  }
}

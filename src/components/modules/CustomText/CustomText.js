import React, { Component } from 'react'
import BaseModule from '../BaseModule'
import './CustomText.scss'

class CustomText extends Component {
  render() {
    return (
      <BaseModule>
        <p>{this.props.text}</p>
      </BaseModule>
    )
  }
}

export default CustomText

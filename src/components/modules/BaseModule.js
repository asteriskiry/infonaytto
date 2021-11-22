import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'

class BaseModule extends Component {
  render() {
    return (
      <Col>
        <Card body>{this.props.children}</Card>
      </Col>
    )
  }
}

export default BaseModule

import React, { Component, Fragment } from 'react'

export class Image extends Component {
  render() {
      
    return (
      <Fragment>
        <img src={this.props.image} alt="Norris"/>
        </Fragment>
    )
  }
}

export default Image

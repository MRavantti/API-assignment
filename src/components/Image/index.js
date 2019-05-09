import React, { Component, Fragment } from 'react'

export class Image extends Component {
  render() {
      console.log(this.props.image);
      
    return (
      <Fragment>
        <img src={this.props.image} alt="Image"/>
        </Fragment>
    )
  }
}

export default Image

import React, { Component, Fragment } from 'react'

export class Button extends Component {

    render() {

      const { onClick, text} = this.props
        
    return (
      <Fragment>
            <button onClick={onClick}>{text}</button>
      </Fragment>
    )
  }
}

export default Button

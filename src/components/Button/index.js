import React, { Component } from 'react'

export class Button extends Component {

    render() {

      const { onClick, text} = this.props
        
    return (
      <div>
            <button onClick={onClick}>{text}</button>
      </div>
    )
  }
}

export default Button

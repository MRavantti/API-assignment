import React, { Component, Fragment } from 'react'


export class SpeakButton extends Component {
  speak = () => {
    const { text } = this.props;
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(text)
    );
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.speak}>Read the joke to me</button>

      </Fragment>
    )
  }
}

export default SpeakButton

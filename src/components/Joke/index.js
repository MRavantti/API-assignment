import React, { Component } from 'react'
import axios from 'axios';
import Button from '../Button';
export class Joke extends Component {
    state = {
        joke: ''
    }

    handleClick = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => this.setState({
                joke: res.data
            }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.handleClick()
    }

  render() {
      const { joke } = this.state;
      console.log(joke);
      
    return (
      <div>
        <h3>{joke.value}</h3>
        <Button text="New joke" onClick={() => this.handleClick()} />
      </div>
    )
  }
}

export default Joke

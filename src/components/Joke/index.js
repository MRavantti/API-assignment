import React, { Component } from 'react'
import axios from 'axios';

export class Joke extends Component {
    state = {
        joke: ''
    }

    componentDidMount() {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => this.setState({
                joke: res.data
            }))
            .catch(err => console.log(err));
    }

  render() {
      const { joke } = this.state;
      console.log(joke);
      
    return (
      <div>
        <h3>{joke.value}</h3>
      </div>
    )
  }
}

export default Joke

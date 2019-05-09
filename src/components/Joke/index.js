import React, { Component } from 'react'
import axios from 'axios';
import Button from '../Button';
import Image from '../Image';

export class Joke extends Component {
    state = {
        joke: '',
        images: {
          1: require('../../NorrisImages/1.jpg'),
          2: require('../../NorrisImages/2.jpg'),
          3: require('../../NorrisImages/3.jpg'),
          4: require('../../NorrisImages/4.jpg'),
          5: require('../../NorrisImages/5.jpg'),
          6: require('../../NorrisImages/6.jpg'),
        },
        ranImage: '',
    }

    getJoke = () => {
      const { images } = this.state;

       this.state.ranImage = images[Math.floor(Math.random() * 7)];
      
      
      axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => this.setState({
        joke: res.data
      }))
      .catch(err => console.log(err));
    };

    componentDidMount() {
        this.getJoke()
    }

  render() {
      const { joke, ranImage } = this.state;  
            
    return (
      <div>
        <h3>{joke.value}</h3>
        <Image image={ranImage} />
        <Button text="New joke" onClick={() => this.getJoke()} />
      </div>
    )
  }
}

export default Joke

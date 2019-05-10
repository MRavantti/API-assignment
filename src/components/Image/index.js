import React, { Component, Fragment } from 'react'
import BackupImage from '../../NorrisImages/1.jpg';

export class Image extends Component {
  render() {
    const { image } = this.props;
      
      if (this.props.image !== undefined) {
      return (
        <Fragment>
            
          <img src={image} alt="Norris"/>
          </Fragment>
      )
    }
    return (
      <Fragment>

        <img src={BackupImage} alt="Norris" />
      </Fragment>
    )
  }
}

export default Image

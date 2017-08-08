// Bomb Component Code Goes Here

import React from 'react';
import ReactDOM from 'react-dom';


class Bomb extends React.Component{
  constructor(prop){
    super(prop)

    this.state = {
      secondsLeft: prop.initialCount
    }
  }


  render(){

    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return(
      <div>{message}</div>
    )
  }
}

export default Bomb;

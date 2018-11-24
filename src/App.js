import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import LiveShow from './LiveShow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3000',
      color: 'white'
    }
  }

  // send = () => {
  //   const socket = socketIOClient(this.state.endpoint)
  //
  //   socket.emit('change color', this.state.color)
  // }

  setColor = (color) => {
    this.setState({color})
  }


  render() {
    const socket = socketIOClient(this.state.endpoint)

    // socket.on('change color', (col) => {
    //   console.log(col);
    //   document.body.innerHTML = col
    // })

    return (
      <div style={{textAlign: 'center'}}>
        <button onClick={() => this.send()}>Change Color</button>

        <button id='blue' onClick={() => this.setColor('blue')}>Blue</button>
        <button id='red' onClick={() => this.setColor('red')}>Red</button>
        <LiveShow />
      </div>
    );
  }
}

export default App;

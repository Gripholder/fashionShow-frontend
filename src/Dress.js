import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Dress extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: 'http://localhost: 3000',
      dress: {}
    }
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint)

    socket.emit('dress update', this.state.dress)
  }

  setDress = (dress) => {
    this.setState({dress})
  }

  render() {
    const socket= socketIOClient(this.state.endpoint)

    socket.on('message', (data) => {
      document.body.innerHTML = data;
    })
    return(
      <div>
        <input type='text' name='name' value={this.state.dress} onChange={this.send()} />
      </div>
    )
  }

}

export default Dress;

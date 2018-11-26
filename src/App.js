import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Geolocation from './Geolocation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3000',
      color: 'white',
      data: {},
      dress: '',
      latitude: 0,
      longtitude: 0
    }
  }

  setColor = (color) => {
    this.setState({color})
  }

  render() {
    console.log(this.props)
    const socket = socketIOClient(this.state.endpoint)

    socket.on('Dress', data => {
      console.log('recieved data', data.name)
      this.setState({dress:data.name})
    })

    socket.on('Previous Dress', data => {
      console.log('recieved data', data.name)
      this.setState({dress:data.name})
    })

    socket.on('Next Dress', data => {
      console.log('recieved data', data.name)
      this.setState({dress:data.name})
    })

    return (
      <div>
      <div style={{textAlign: 'center'}}>

        <div className="container">
          <div className="dress" style = {{color:'black'}}>{this.state.dress}</div>
        </div>
      </div>
      <Geolocation />
      </div>
    );
  }
}

export default App;

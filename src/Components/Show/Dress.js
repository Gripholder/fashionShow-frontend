import React, {
  Component
} from 'react';
import socketIOClient from 'socket.io-client';


class Dress extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3000',
      data: [],
      dress: []
    }
  }

  onAddItem = () => {
  this.setState(state => {
    const dress = state.data.concat(state.value);

    return {
      dress,
      value: '',
    };
  });
};


  render() {
    const socket = socketIOClient(this.state.endpoint)

    socket.on('Welcome', data => {
      console.log(data)
    })

    socket.on('Dress', data => {
      console.log('recieved data', data)
      this.setState({
        data
      })
    })

    socket.on('Reset', data => {
      this.setState({
        data
      })
    })

    socket.on('Reset to Point', data => {
      this.setState({
        data
      })
    })

    console.log(this.state.data)

    let dresses = this.state.data.map(dress => (
            <div>
            <h1>{dress.name}</h1>
            <img src={dress.image}></img>
            <p>{dress.description}</p>
            <p>{dress.rating}</p>
            </div>
              ))

    return ( <
      div ><
      div style = {
        {
          textAlign: 'center'
        }
      } >

      <
      div className = "container" >
      {dresses}
      <
      /
      div > <
      /div>

      <
      /div>
    );
  }
}

export default Dress;

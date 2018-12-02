import React from 'react';
import fetch from 'node-fetch';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: []    }
  }

  componentDidMount() {
    fetch('https://geoip-db.com/json')
       .then(res => res.json())
       .then(json => {
         console.log('Requester info')
         console.log(json.IPv4)
       })

    }

  render() {
    return(
      <div>
        {this.state.text}
      </div>
    );
  }
}

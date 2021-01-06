import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import TemperatureWrapper from './TemperatureWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      min_temp:false,
      city:false,
      max_temp:false,
      endpoint: 'http://127.0.0.1:4001'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('FromAPI', data => this.setState({ response: data }));
    socket.on('API', data1 => this.setState({ min_temp: data1 }));
    socket.on('city', city_name => this.setState({ city: city_name }));
    socket.on('max', max => this.setState({ max_temp: max }));
    
  }
  
  render() {
    const { response } = this.state;
    const { min_temp } = this.state;
    const { city } = this.state;
    const { max_temp } = this.state;
    
    return (
      <div>
        {response
          ? <section>
              <TemperatureWrapper temp={response} min_temp={min_temp} city={city} max_temp={max_temp}/>
            </section>
          : <i>Loading...</i>}
      </div>
    );
  }
}

export default App;
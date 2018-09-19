// import packages
import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

// Making the App component
class App extends Component {
  constructor() {
    super()
    
    this.state = {
      endpoint: "http://10.0.0.59:5000", // this is where we are connecting to with sockets
      color: 'white'
    }
  }
  
  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  setColor = (color) => {
    this.setState({ color })
  }
  
  // render method that renders in code if the state is updated
  render() {
    // Within the render method, we will be checking for any sockets.
    // We do it in the render method because it is ran very often.
    const socket = socketIOClient(this.state.endpoint)
    
    // socket.on is another method that checks for incoming events from the server
    // This method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument
    socket.on('change color', (color) => {
      // setting the color of our button
      document.body.style.backgroundColor = color
    })
     
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>
        <button id="f36da0" onClick={() => this.setColor('#f36da0')}>#f36da0</button>
        <button id="ffaa00" onClick={() => this.setColor('#ffaa00')}>Zoosta</button>
      </div>
    )
  }
}

export default App
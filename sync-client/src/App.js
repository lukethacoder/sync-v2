// import packages
import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

const localHostIp = {
  "trumpit": "10.0.0.59",
  "et": "192.168.1.9",
}

// Making the App component
class App extends Component {
  constructor() {
    super()
    
    this.state = {
      endpoint: "http://" + localHostIp.et + ":5000", // this is where we are connecting to with sockets
      color: 'white',
      message: '',
      new_message: '',
      message_data: ['placeholder']
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  sendMessage = () => {
    const socket = socketIOClient(this.state.endpoint);
    console.log('this.state.message => ', this.state.message)
    socket.emit('message send', this.state.message)
  }

  setColor = (color) => {
    this.setState({ color })
  }

  // sendMessage(e) {
  //   console.log(e)
  //     e.preventDefault();
  //     socket.emit('sending message', txt.val());
  //     txt.val('');
  // }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    console.log('sub message => ' + this.state.message);
    console.log('sub message_data => ' + this.state.message_data);
    event.preventDefault();
  }

  
  // render method that renders in code if the state is updated
  render() {
    // Within the render method, we will be checking for any sockets.
    // We do it in the render method because it is ran very often.
    const socket = socketIOClient(this.state.endpoint)
    
    // socket.on is another method that checks for incoming events from the server
    // This method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument
    socket.on('message send', (message) => {
      // setting the color of our button
      console.log('YEEEEEEEEEEEEet return message? => ', message)
      this.setState({
        new_message: message
      })
      // this.state.message_data.push(message)
    })
    
    socket.on('change color', (color) => {
      // setting the color of our button
      console.log('return colour? => ', color)
      document.body.style.backgroundColor = color
    })

    
     
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>
        <button id="f36da0" onClick={() => this.setColor('#f36da0')}>#f36da0</button>
        <button id="ffaa00" onClick={() => this.setColor('#ffaa00')}>Zoosta</button>
        <form onSubmit={this.handleSubmit}>
        <label>
          Message: <br/><textarea value={this.state.message} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        <button onClick={() => this.sendMessage()}>sendMessage</button>
        <ul>
          <li>previous here:</li>
          {/* {this.state.message_data.map ((message) => 
            <li key={message}>{message}</li>
          )} */}
          {this.state.message_data}
          {this.state.new_message}
          {console.log(this.state.new_message)}
        </ul>
      </div>
    )
  }
}

export default App
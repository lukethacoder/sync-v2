const express = require('express')
const cors = require('cors');
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 5000

const app = express()
app.use(cors())

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

console.log('pls work')

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
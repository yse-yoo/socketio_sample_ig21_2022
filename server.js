const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const dotenv = require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT

io.on('connection', (socket) => {
    
    socket.io('message', (data) => {

        io.emit('message', data)
    })

})

// server listen
http.listen(port, host, () => {
    console.log('listen server')
    console.log(port)
    console.log(host)
})
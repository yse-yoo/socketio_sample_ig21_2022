const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const dotenv = require('dotenv').config()
const host = process.env.HOST
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connection!!!!')

    socket.on('message', (data) => {
        console.log('message!!!!')
        //接続者全員に送信
        io.emit('message', data)
    })

})

// server listen
http.listen(port, host, () => {
    console.log('listen server')
    console.log(port)
    console.log(host)
})
const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = '5000';
const io = new Server(server);

// socketio
io.on('connected',(socket)=>{
    console.log('connected')
})

server.listen(PORT,()=>{
    console.log('server is running ');
})

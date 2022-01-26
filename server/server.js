const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const PORT = '5000';

app.use(cors());

const io = new Server(server,{
    cors:{
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    }
});


// socketio
io.on('connection',(socket)=>{
    console.log('connected')
})

server.listen('5000',()=>{
    console.log('server is running ');
})

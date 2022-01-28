const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const {saveUser,getUser, allUsers} = require('../client/src/utilities/users');

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
    // const username
    console.log('connected now')

    socket.on('userInfo',({name,room})=>{
        saveUser(name,room,socket.id);
    })

    // recieve msg
    socket.on('msg',msg=>{
        const user = getUser(socket.id);
        console.log(msg,user.name);
    })
})

server.listen('5000',()=>{
    console.log('server is running ');
})

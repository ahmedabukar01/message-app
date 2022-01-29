const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const {saveUser,getUser, allUsers, msgFormat} = require('../client/src/utilities/users');

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

const mainRoom = '';
// socketio
io.on('connection',(socket)=>{

    // const username
    console.log('connected now')

    socket.on('userInfo',({name,room})=>{
        saveUser(name,room,socket.id);
        socket.join(room);

        // welcome
        const user = getUser(socket.id);
        socket.broadcast.to(user.room).emit('msg',msgFormat(user,'Wecome Ahmed'))
    })


    // recieve msg
    socket.on('sendMsg',msg=>{
        const user = getUser(socket.id);

        console.log('we are here')
        // send msg to dom
        io.to(user.room).emit('receiveMsg',msgFormat(user,msg));

    })

})

server.listen('5000',()=>{
    console.log('server is running ');
})

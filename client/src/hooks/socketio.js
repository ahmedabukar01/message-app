import { useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');


// user info
export const userInfo = (name,room) =>{
    socket.emit('userInfo', {name,room});
}

// send msg
export const sendMessage = (msg) =>{
    socket.emit('sendMsg', msg);
}

// recieve msg

socket.on('getMsg',data=>{
    console.log(data,'here');
})

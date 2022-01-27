import { useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

// conected 
const connectedServer = ()=>{
    
}
// user info
export const userInfo = (name,room) =>{
    socket.emit('userInfo', {name,room});
}

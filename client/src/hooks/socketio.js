import { useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

const users = [];

// user info
export const userInfo = (name,room) =>{
    socket.emit('userInfo', {name,room});
}

// getUser
export const saveUser = (name,room,id) => {
    users.push({name,room,id});
}

// get user
export const getUser = (id)=>{
    return users.filter(user => user.id === id);
}
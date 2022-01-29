import React, { useState } from 'react';
import {userInfo} from '../hooks/socketio';

const Login = ({setOpenChat, sendName}) => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    const nameChanged = (e)=>{
        setName(e.target.value);
    }
    const roomChanged = (e)=>{
        setRoom(e.target.value);
    }

    const joinChat = (e) =>{
        e.preventDefault();
        sendName(name);
        userInfo(name,room)
        setOpenChat(true);
        // ......
    }

  return <div className="login">
      <form onSubmit={joinChat}>
          <input type="text" required value={name} onChange={nameChanged} placeholder='Name'/>
          <input type="text" required value={room} onChange={roomChanged} placeholder='Room'/>
          <button type="submit">Join Chat</button>
      </form>
  </div>;
};

export default Login;

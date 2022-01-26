import React, { useState } from 'react';

const Login = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    const nameChanged = (e)=>{
        setName(e.target.value);
    }
    const roomChanged = (e)=>{
        setRoom(e.target.value);
    }

    const joinChat = () =>{
        // ......
    }

  return <div className="login">
      <form>
          <input type="text" required value={name} onChange={nameChanged} placeholder='Name'/>
          <input type="text" required value={name} onChange={roomChanged} placeholder='Room'/>
          <button type="submit">Join Chat</button>
      </form>
  </div>;
};

export default Login;

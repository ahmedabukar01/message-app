import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import Message from './Message';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

export function getSocket(){
    return socket;
}

const Home = ({name}) => {
    const [value, setValue] = useState('');
    const [msg,setMsg] = useState('');

    const sendMsg = (e)=>{
        e.preventDefault();

        if(value !== ''){
            // send msg
            socket.emit('sendMsg', value);  

        }
    }

    // recieve msg
    useEffect(()=>{
        socket.on('receiveMsg',data=>{
            setMsg((prev)=>[...prev,data]);
        })
    },[socket])

    socket.on('msg',message=>setMsg(message));

  return (
      <div className='home'>
          <div className="message-box">
              <div className='message-header'>
                  <span>Chatting Room</span>
              </div>
              <div className='message-body'>
                 {msg && <Message msg={msg} userName={name}/>}
              </div>
              <div className='message-bottom'>
                  <form onSubmit={sendMsg}>
                      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} required placeholder="message here..." />
                        <SendIcon style={{marginTop: '10px', cursor:'pointer'}}/>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Home;




import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import {sendMessage} from '../hooks/socketio';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const Home = ({socket}) => {
    const [value, setValue] = useState('');

    const sendMsg = (e)=>{
        e.preventDefault();

        if(value !== ''){
            // send msg
            socket.emit('sendMsg', value);  

        }
    }

  return (
      <div className='home'>
          <div className="message-box">
              <div className='message-header'>
                  <span>Chatting Room</span>
              </div>
              <div className='message-body'>
                 <div className='message'>
                    <div className='title'>
                        <span className='name'>name</span>
                        <span className='date'>9:34 am</span>
                    </div>
                    <div className='msg-body'>
                     blla bala blala 
                    </div>
                 </div>
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

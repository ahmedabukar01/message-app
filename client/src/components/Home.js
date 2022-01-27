import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import Message from './Message';
import {sendMessage} from '../hooks/socketio';

const Home = () => {
    const [value, setValue] = useState('');

    const sendMsg = (e)=>{
        e.preventDefault();

        if(value){
            sendMessage(value)
        }
    }

  return (
      <div className='home'>
          <div className="message-box">
              <div className='message-header'>
                  <span>Chatting Room</span>
              </div>
              <div className='message-body'>
                  <Message />
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

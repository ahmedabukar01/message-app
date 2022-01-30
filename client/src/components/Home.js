import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
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

        e.target.msg.value = "";

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

        socket.on('msg',data=>{
            setMsg((prev)=>[...prev,data]);
        });

        // user left 
        socket.on('userLeft',data=>{
        setMsg((prev)=>[...prev,data]);
        console.log(data)
    })

    },[socket])


  return (
      <div className='home'>
          <div className="message-box">
              <div className='message-header'>
                  <span>Chatting Room</span>
              </div>
              <div className='message-body'>
                 {msg && (
                        msg.map(user=>(
                            <div className='message' id={name === user.user ? 'me': 'other'} key={user.text}>
                                <div className='title'>
                                    <span className='name'>{user.user}</span>
                                    <span className='date'>{user.time}</span>
                                </div>
                                <div className='msg-body'>
                                    {user.text}
                                </div>
                            </div> 
                        ))
                     
                 )}
              </div>
              <div className='message-bottom'>
                  <form onSubmit={sendMsg}>
                      <input type="text" name="msg" onChange={(e)=>setValue(e.target.value)} required placeholder="message here..." />
                        <SendIcon style={{marginTop: '10px', cursor:'pointer'}} onClick={sendMsg}/>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Home;




import { useState } from 'react';

const Message = () => {
    const [msg, setMsg] = useState('');

  return(
      <>
          {msg && (
            <div className='message'>
             <div className='title'>
                 <span className='name'>name</span>
                 <span className='date'>9:34 am</span>
             </div>
             <div className='msg-body'>
                 this is the message body blala blala
             </div>
         </div>
        )}
      </>
  );
};

export default Message;

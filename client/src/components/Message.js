import React from 'react';

const Message = () => {
  return(
      <div className='message'>
          <div className='title'>
              <span className='name'>name</span>
              <span className='date'>9:34 am</span>
          </div>
          <div className='msg-body'>
              this is the message body blala blala
          </div>
      </div>
  );
};

export default Message;

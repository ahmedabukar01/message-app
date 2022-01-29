
const Message = ({msg, userName}) => {
 
    console.log(msg)
  return(
      <>
        {
            msg.map(user=>(
                <div className='message' id={userName === msg.user ? 'me': 'other'}>
                <div className='title'>
                    <span className='name'>{user.name}</span>
                    <span className='date'>{user.time}</span>
                </div>
                <div className='msg-body'>
                    {user.text}
                </div>
            </div> 
            ))
        }
      </>
  )
};

export default Message;

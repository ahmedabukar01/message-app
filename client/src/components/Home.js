import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  return (
      <div className='home'>
          <div className="message-box">
              <div className='message-header'>
                  <span>Chatting Room</span>
              </div>
              <div className='message-body'>
                  Hello..body
              </div>
              <div className='message-bottom'>
                  <form>
                      <input type="text" required placeholder="message here..." />
                        <SendIcon style={{marginTop: '10px', cursor:'pointer'}}/>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Home;

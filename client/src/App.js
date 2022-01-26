import './App.css';
import Home from './components/Home';
import io from 'socket.io-client';
import { useState } from 'react';
import Login from './components/Login';

// const socket = io.connect('http://localhost:5000');

function App() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="App">
      {openChat ? <Home /> : <Login setOpenChat={setOpenChat}/>}
    </div>
  );
}

export default App;

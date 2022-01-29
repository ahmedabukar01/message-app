import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Login from './components/Login';


function App() {
  const [openChat, setOpenChat] = useState(false);
  const [data,setData] = useState('');

  return (
    <div className="App">
      {openChat ? <Home socket={data}/> : <Login setOpenChat={setOpenChat} setdata={setData}/> }
    </div>
  );
}

export default App;

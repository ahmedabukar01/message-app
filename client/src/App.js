import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Login from './components/Login';


function App() {
  const [openChat, setOpenChat] = useState(false);
  const [name,setName] = useState('');

  return (
    <div className="App">
      {openChat ? <Home name={name}/> : <Login setOpenChat={setOpenChat} sendName={setName}/> }
    </div>
  );
}

export default App;

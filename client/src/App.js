import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Login from './components/Login';


function App() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="App">
      {openChat ? <Home /> : <Login setOpenChat={setOpenChat}/>}
    </div>
  );
}

export default App;

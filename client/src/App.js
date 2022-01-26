import './App.css';
import Home from './components/Home';
import socketio from 'socket.io-client';

const io = socketio('http://localhost:5000/');

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

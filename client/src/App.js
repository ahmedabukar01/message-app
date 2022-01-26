import './App.css';
import Home from './components/Home';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

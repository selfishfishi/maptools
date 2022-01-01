import logo from './logo.svg';
import Map from './components/Map/Map.js'
import './App.css';

function App() {
  const map_data = require('./files/output/inventory.json')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Map data={map_data}></Map>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

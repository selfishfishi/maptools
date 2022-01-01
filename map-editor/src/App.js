import logo from './logo.svg';
import Map from './components/Map/Map.js'
import './App.css';
import PropertyEditor from './components/ProperyEditor/PropertyEditor';

function App() {
  const map_data = require('./files/output/inventory.json')
  return (
    <div className="App">
      <Map data={map_data}></Map>
      <PropertyEditor className="Editor"></PropertyEditor>
    </div>
  );
}

export default App;

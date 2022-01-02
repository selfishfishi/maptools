import logo from './logo.svg';
import Map from './components/Map/Map.js'
import './App.css';
import PropertyEditor from './components/ProperyEditor/PropertyEditor';
import react from 'react';

class App extends react.Component {
  constructor(props){
    super(props)
    this.handleTileClicked = this.handleTileClicked.bind(this)
    this.state = {selected: []}
  }
  render() {
    const map_data = require('./files/output/inventory.json')
    return (
      <div className="App">
        <Map data={map_data} tileClicked={this.handleTileClicked}></Map>
        <PropertyEditor selected={this.state.selected}></PropertyEditor>
      </div>
    );
  }

  handleTileClicked(tileInfo, selected) {
    if (selected) {
        this.setState((state, props) => {
          let new_selected = [...state.selected, tileInfo]
          return {selected: new_selected} 
        });
    } else {
      this.setState((state, props) => {
        let new_selected = state.selected.filter((value) => {
          return value.id != tileInfo.id
        });
        return {selected: new_selected} 
      });

    }
  }
}

export default App;

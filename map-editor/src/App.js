import logo from "./logo.svg";
import Map from "./components/Map/Map.js";
import "./App.css";
import PropertyEditor from "./components/ProperyEditor/PropertyEditor";
import react from "react";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.handleTileClicked = this.handleTileClicked.bind(this);
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    let map_data = require("./files/output/inventory.json");
    this.state = { selected: [], map_data: map_data };
  }
  render() {
    return (
      <div className="App">
        <Map
          data={this.state.map_data}
          tileClicked={this.handleTileClicked}
        ></Map>
        <PropertyEditor
          selected={this.state.selected}
          onPropertyChange={this.handlePropertyChange}
        ></PropertyEditor>
      </div>
    );
  }

  handleTileClicked(tileInfo, selected) {
    if (selected) {
      this.setState((state, props) => {
        let new_selected = [...state.selected, tileInfo];
        return { selected: new_selected };
      });
    } else {
      this.setState((state, props) => {
        let new_selected = state.selected.filter((value) => {
          return value.id != tileInfo.id;
        });
        return { selected: new_selected };
      });
    }
  }

  handlePropertyChange(selected_tiles, properties) {
    console.log(selected_tiles);
    console.log(properties);
  }
}

export default App;

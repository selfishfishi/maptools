import React from "react";
import "./PropertyEditor.css";

class PropertyEditor extends React.Component {
  constructor(props) {
    super(props);
    // this.handleTileClicked = this.handleTileClicked.bind(this);
    // let map_data = require("./files/output/inventory.json");
    this.state = { mintable: true };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render_selection() {
    let selected_items = [];
    for (let i in this.props.selected) {
      let item = this.props.selected[i];
      let selected = (
        <li key={item.id}>
          {item.id} @ {item.location}
        </li>
      );
      selected_items.push(selected);
    }
    return selected_items;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }
  render_mintable() {
    return (
      <label key="mintable">
        Mintable:
        <input
          name="mintable"
          type="checkbox"
          checked={this.state.mintable}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  render_tile_properties() {
    return [];
  }
  render_properties() {
    let properties = [];
    properties.push(this.render_mintable());
    properties.push(...this.render_tile_properties());
    return properties;
  }

  render() {
    let selected_items = this.render_selection();
    let properties = this.render_properties();
    return (
      <div className="Editor">
        <div className="Selection">
          <h4>Selected Tiles:</h4>
          {selected_items}
        </div>
        <form className="ProperyEditor">
          <h4>Properties</h4>
          {properties}
        </form>
      </div>
    );
  }
}

export default PropertyEditor;

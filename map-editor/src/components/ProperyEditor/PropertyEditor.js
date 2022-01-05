import React from "react";
import "./PropertyEditor.css";

class PropertyEditor extends React.Component {
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

  render_mintable() {
    return (
      <label>
        Mintable:
        {/* <input
          name="Mintable"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        /> */}
        ;
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

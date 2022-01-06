import React from "react";
import "./PropertyEditor.css";

class PropertyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.tile_properties = [
      "wood",
      "gold",
      "iron",
      "magic",
      "stone",
      "oil",
      "water",
    ];
    this.property_values = ["low", "medium", "high", "ultra-high"];
    this.state = { mintable: true, properties: {} };
    this.tile_properties.forEach(
      (e) => (this.state.properties[e] = { yield: 0, gen: 0 })
    );
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDropdownSelection = this.handleDropdownSelection.bind(this);
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
  handleDropdownSelection(event) {}
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
    // get the dropdown option values
    const options = this.property_values.map((v) => (
      <option value={v}>{v}</option>
    ));
    return Object.keys(this.state.properties).map((p) => {
      // get configurable properties
      let drop_downs = Object.keys(this.state.properties[p]).map((p_option) => {
        return (
          <div>
            <label key={p_option}>
              {p_option}
              <select
                className="Dropdown"
                key={p_option}
                value={this.state.properties[p][p_option]}
                onChange={this.handleDropdownSelection}
              >
                {options}
              </select>
            </label>
          </div>
        );
      });
      console.log(p);
      return (
        <div key={p} className="Property">
          <div className="PropertyTitle">{p}</div>
          {drop_downs}
        </div>
      );
    });
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

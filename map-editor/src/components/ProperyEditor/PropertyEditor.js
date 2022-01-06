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
    this.setState({
      [name]: value,
    });
  }
  handleDropdownSelection(event, property_name) {
    const sub_property_name = event.target.name;
    const value = event.target.value;
    this.setState((state, props) => {
      let new_properties = {};
      Object.assign(new_properties, state.properties);
      new_properties[property_name][sub_property_name] = value;
      return { properties: new_properties };
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
    // get the dropdown option values
    const options = this.property_values.map((v) => (
      <option value={v}>{v}</option>
    ));
    return Object.keys(this.state.properties).map((p) => {
      // get configurable properties
      let drop_downs = Object.keys(this.state.properties[p]).map((p_option) => {
        return (
          <div id={p}>
            <label key={p_option}>
              {p_option}
              <select
                className="Dropdown"
                name={p_option}
                blah={p}
                key={p_option}
                value={this.state.properties[p][p_option]}
                onChange={(event) => this.handleDropdownSelection(event, p)}
              >
                {options}
              </select>
            </label>
          </div>
        );
      });
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

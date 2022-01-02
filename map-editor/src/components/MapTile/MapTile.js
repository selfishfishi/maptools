import React from 'react';
import './MapTile.css'

class MapTile extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
    }
    render() {
        let image_src =  require('./../../files/' + this.props.data.path)
        return ( 
            <img onClick={this.handleSelect} className="MapTile" key={this.props.data.id} src={image_src}></img>
        );
    }

    handleSelect() {
        console.log(this.props.data.path)
    }

}

export default MapTile;
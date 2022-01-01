import React from 'react';
import './MapTile.css'

class MapTile extends React.Component {
    render() {
        let image_src =  require('./../../files/' + this.props.data.path)
        return ( 
            <img className="MapTile" key={this.props.data.id} src={image_src}></img>
        );
    }

}

export default MapTile;
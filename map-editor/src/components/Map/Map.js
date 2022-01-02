import React from 'react';
import './Map.css'
import MapTile from '../MapTile/MapTile';

class Map extends React.Component {
    get_row_indexes(){
        return 17;
    }
    render_row(row_number){

        let map_data = require('./../../files/output/inventory.json')
        let row = []
        for (let col in this.props.data) {
            let row_info = this.props.data[col][row_number];
            let image_element = (
                <MapTile 
                    key={row_info.id}
                    data={row_info}>
                </MapTile>
            )
            row.push(image_element)
        }
        return row
    }
    render() {
        let row_count = this.get_row_indexes()
        let rows = [];
        for (let i = 0; i < row_count; i++) {
            rows.push(<div className="MapRow" key={i}>
                {this.render_row(i)}
            </div>
                );
        }
        return ( 
            <div className="MapView">{rows}</div> 
        );
    }

}

export default Map;
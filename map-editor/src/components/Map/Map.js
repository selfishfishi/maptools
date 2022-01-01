import React from 'react';

class Map extends React.Component {
    get_row_indexes(){
        return 1
    }
    render_row(row_number){

        let map_data = require('./../../files/output/inventory.json')
        let row = []
        for (let col in this.props.data) {
            let row_info = this.props.data[col][row_number];
            let image_src =  require('./../../files/' + row_info.path)
            // let image_element = (<p>{image_src}</p>)
            let image_element = (<img key={row_info.id} src={image_src}></img>)
            row.push(image_element)
        }
        return row
        // console.log(data_map.keys())
        // for (let col of this.props.data.keys()){
        //     console.log(col)
        // } 
        // return (<div key={row_number}>hi</div>)
    }
    render() {
        let row_count = this.get_row_indexes()
        let rows = [];
        for (let i = 0; i < row_count; i++) {
            rows.push(this.render_row(i));
        }
        return ( 
            <div>{rows}</div> 
        );
    }

}

export default Map;
import React from 'react';
import './MapTile.css'

class MapTile extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
        this.state = {selected: false}
    }
    render() {
        let image_src =  require('./../../files/' + this.props.data.path)
        return ( 
            <img onClick={this.handleSelect} className={`MapTile ${this.state.selected ? 'selected' : ''}`} key={this.props.data.id} src={image_src}></img>
        );
    }

    handleSelect() {
        this.setState((state, props) => {
            return {selected: !state.selected}
        }, this.tileDidFlipState);
    }

    tileDidFlipState(){
        if (this.props.tileClicked) {
            this.props.tileClicked(this.props.data, this.state.selected)
        }
    }

}

export default MapTile;
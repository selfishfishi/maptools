import React from 'react';
import './PropertyEditor.css'

class PropertyEditor extends React.Component {
    render() {
        return ( 
            <div className="Editor"> {this.props.selected.id}</div> 
        );
    }

}

export default PropertyEditor;
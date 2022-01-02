import React from 'react';
import './PropertyEditor.css'

class PropertyEditor extends React.Component {
    render() {
        let selected_items = []
        for (let i in this.props.selected) {
            let item = this.props.selected[i]
            console.log(item)
            let selected = (
                <li key={item.id}>
                    {item.id} @ {item.location}
                </li>
            )
            selected_items.push(selected)
        }
        return ( 
            <div className="Editor"> 
            <p>selected tiles:</p>
            {selected_items}</div> 
        );
    }

}

export default PropertyEditor;
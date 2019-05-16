import React, { Component } from 'react'

class Item extends Component {
    render() {
        const { item } = this.props;
        return(
            <li>
                <p>{item.identifier}</p>
            </li>
        );
    }
}

export default Item;
import React, { Component } from 'react'

class Item extends Component {
    render() {
        const { item } = this.props;
        return(
            <li className="item">
                <p>{item.identifier}</p>
            </li>
        );
    }
}

export default Item;
import React, { Component } from 'react'

class ItemsItem extends Component {
    render() {
        const { item } = this.props;
        return(
            <li>
                <p>{item.identifier}</p>
            </li>
        );
    }
}

export default ItemsItem;
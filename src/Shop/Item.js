import React, { Component } from 'react'

class Item extends Component {
    render() {
        const { item } = this.props;
        return(
            <li className="item">
                <img className="item__img-info" src={item.item.images.information} alt={item.item.name} />
                <p>{item.item.name}</p>
            </li>
        );
    }
}

export default Item;
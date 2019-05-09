import React, { Component } from 'react'

class WeaponsItem extends Component {
    render() {
        const { weapon } = this.props;
        return(
            <li className={`weaponsItem grid-item rarity-background_${weapon.rarity}`}>
                <p>{weapon.name}</p>
                <img src={weapon.images.image} alt="Preview of the current weapon"/>
            </li>
        );
    }
}

export default WeaponsItem;
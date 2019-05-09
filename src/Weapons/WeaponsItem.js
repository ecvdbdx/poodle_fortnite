import React, { Component } from 'react'
import moment from 'moment';

class WeaponsItem extends Component {
    render() {
        const { weapon } = this.props;
        switch(weapon.rarity) {
            case 'common':
                return(
                    <li className="weaponsItem rarity-background_common grid-item">
                        <p>{weapon.name}</p>
                        <img src={weapon.images.image} alt="Preview of the current weapon"/>
                    </li>
                );

            case 'uncommon':
                return(
                    <li className="weaponsItem rarity-background_uncommon">
                        <p>{weapon.name}</p>
                        <img src={weapon.images.image} />
                    </li>
                );

            case 'rare':
                return(
                    <li className="weaponsItem rarity-background_rare">
                        <p>{weapon.name}</p>
                        <img src={weapon.images.image} />
                    </li>
                );

            case 'epic':
                return(
                    <li className="weaponsItem rarity-background_epic">
                        <p>{weapon.name}</p>
                        <img src={weapon.images.image} />
                    </li>
                );

            case 'legendary':
                return(
                    <li className="weaponsItem rarity-background_legendary">
                        <p>{weapon.name}</p>
                        <img src={weapon.images.image} />
                    </li>
                );

        }
    }
}

export default WeaponsItem;
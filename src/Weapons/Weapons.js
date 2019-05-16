import React, {Component} from 'react'
import WeaponsItem from "../Weapons/WeaponsItem";
import api from '../api/Api'

class Weapons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            loading: true,
            data: []
        };
    }

    getWeapons = async () => {
        const data = await api.fetchWeapons()
        this.setState({
            data: {...data},
            loading: false
        })
    };

    componentDidMount() {
        this.getWeapons();
    }

    render() {
        const {error, data} = this.state;
        return (
            <div>
                {error};
                <ul className="grid listingWeapons" data-isotope='{ "itemSelector": ".grid-item", "layoutMode": "fitRows" }'>
                    {data.weapons && (
                        data.weapons.map((item, index) => <WeaponsItem key={index} weapon={item}/>)
                    )}
                </ul>
            </div>
        )
    }
}

export default Weapons
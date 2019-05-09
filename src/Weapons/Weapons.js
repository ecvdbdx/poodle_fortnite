import React, {Component} from 'react'
import Loader from '../Loader/Loader'
import WeaponsItem from "../Weapons/WeaponsItem";

class Weapons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            loading: false,
            data: []
        };
    }

    getWeapons = async () => {
        const weapons = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/weapons/get', {
            method: 'GET'
        })
            .then((response) => {
                if (response.status !== 200) {
                    this.setState({
                        loading: false
                    });
                    throw response
                }
                return response.json()
            })
            .then((response) => {
                this.setState({
                    data: {...response}
                });
                console.log(response);
                return response;
            })
            .catch(() => {
                this.setState({error: 'Error during rendering.'});
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
                        data.weapons.map((item, index) => {
                            return (
                                <WeaponsItem key={index} weapon={item}/>
                            )
                        })
                    )}
                </ul>
            </div>
        )
    }
}

export default Weapons
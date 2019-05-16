import React, {Component} from 'react'
import Loader from '../Loader/Loader'
import api from '../api/Api'
import ItemsItem from '../Items/ItemsItem'

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            loading: false,
            data: {}
        };
    }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({error: ''})
    const data = await api.fetchPlayerItems()
	this.setState({
      data: data,
      loading: false
    });
  }

  render() {
    const { loading, data } = this.state

    return (
    	<div>
        {
        	data.map((item, index) => { console.log(item.description)})
        }
        </div>	
    )
  } 
}

export default Items;
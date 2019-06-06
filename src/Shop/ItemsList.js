import React, {Component} from 'react'
import api from '../api/Api'
import Item from './Item'
import './shop.css'

class ItemsList extends Component {
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
    console.log(data.data)
	  this.setState({
      data: data.data,
      loading: false
    });
  }

  render() {
    const { data } = this.state
    return (
    	<div>
        <ul className="list">
          {data.length && data.map((item, index) => {
            return <Item key={index} item={item} />
          })}
        </ul>
      </div>	
    )
  } 
}

export default ItemsList;
import React, {Component} from 'react'
import api from '../api/Api'
import Item from './Item'

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
	  this.setState({
      data: data,
      loading: false
    });
  }

  render() {
    const { data } = this.state
    return (
    	<div>
        {data.length && data.map((item, index) => {
          return <Item key={index} item={item} />
        })}
      </div>	
    )
  } 
}

export default ItemsList;
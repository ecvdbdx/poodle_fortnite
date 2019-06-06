import React, {Component} from 'react'
import api from '../api/Api'
import Item from './Item'
import './shop.css'

class AllItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false,
      data: [],
      rarity: []
    };
  }

  componentDidMount() {
    this.getData();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getData = async () => {
    this.setState({error: ''})
    const data = await api.fetchAllItems()
	  this.setState({
      data: data.data,
      loading: false,
      page: 1,
    });
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState(prevState => ({page: prevState.page + 1}))
    }
  }

  filterRarity = (type) => {
    this.setState((prevState) => ({rarity: [...prevState.rarity, type]}))
  }

  render() {
    const { data, page, rarity } = this.state
    const itemsFiltered = () => {
      if (rarity.length > 0) {
        return data.filter((item) => rarity.includes(item.item.rarity) )
      }
      return data
    }
    const itemsLazy = itemsFiltered().filter((item, index) => index < 50 * page )
    return (
    	<div>
        <button onClick={() => this.filterRarity('legendary')}>Legendary</button>
        <ul className="list">
          {data.length && itemsLazy.map((item, index) => {
            return <Item key={index} item={item} />
          })}
        </ul>
      </div>	
    )
  }
}

export default AllItems;
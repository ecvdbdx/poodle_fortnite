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
      rarity: [],
      allRarity: []
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
    const { data } = await api.fetchAllItems()
    const allRarity = [...data.reduce((acc, item) => acc.add(item.item.rarity), new Set())]
	  this.setState({
      data: data,
      loading: false,
      page: 1,
      allRarity: [...allRarity]
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

  clearRarity = () => {
    this.setState({rarity: []})
  }

  render() {
    const { data, page, rarity, allRarity } = this.state
    const itemsFiltered = () => {
      if (rarity.length > 0) {
        return data.filter((item) => rarity.includes(item.item.rarity) )
      }
      return data
    }
    const itemsLazy = itemsFiltered().filter((item, index) => index < 50 * page )
    return (
    	<div>
        <div>
          {allRarity.map((rarityType) => {
            return (
              <button key={rarityType} onClick={() => this.filterRarity(rarityType)}>
                {rarityType}
              </button>
            )
          })}
          <button onClick={() => this.clearRarity()}>
            Clear Rarity
          </button>
        </div>
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
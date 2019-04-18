import React, { Component } from 'react'
import NewsItem from './NewsItem'

class News extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      articleData : []
    };
  }

  componentDidMount() {
    fetch('https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get?language=fr', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
        this.setState({
          articleData: response.entries
        })
        return response.entries
      })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <ul>
          { this.state.articleData.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
        </ul>
      </div>
    )
  }


}

export default News
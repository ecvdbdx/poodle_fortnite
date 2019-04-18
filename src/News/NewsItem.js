import React, { Component } from 'react'
import moment from 'moment'

class NewsItem extends Component {
  render() {
    const { article } = this.props
    return (
      <li>
        <header style={styles.heading}>
          <h2>{article.title}</h2>
        </header>
        <div>
          <h3>{article.body}</h3>
          <img src={article.image} alt={article.title}/>
          <p>{moment(parseInt(article.time)*1000).format('LL')}</p>
          <p style={{backgroundColor: article.meta.mainColor}}>{article.meta.adSpace}</p>
        </div>
      </li>
    )
  }
}

const styles = {
  heading: {
    color: 'blue'
  }
}

export default NewsItem
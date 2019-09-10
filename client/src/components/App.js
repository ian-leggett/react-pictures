import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends Component {

  onSearchSubmit (term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID b0d127932849e42ab05d4633c8931dd13a2a8b5bc9fe3d0427ed3b206e1d4f97'
      }
    })
  }

  render () {
    return <div className="ui container" style={{ marginTop: '10px' }}><SearchBar onSubmit={this.onSearchSubmit}/></div>
  }
}

export default App
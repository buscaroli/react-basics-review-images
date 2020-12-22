import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

export default class App extends Component {
  
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 10, 
      },
      headers: {
        Authorization: 'Client-ID 9HwkF4JIYmVvvPA86D8aXTEXQQWfogN2wgFdPHGamdg'
      }
    })

    //console.log(response.data.results)
    this.setState({images: response.data.results})
    console.log(this.state.images)
  }


  render() {
    return (
      <div>
        <div className='ui bottom attached segment inverted very padded'>
          <div className='ui pink huge centered header'>
            Welcome to Images
          </div>
        </div>
        <div className='ui container'>
          <SearchBar onInputSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
        </div>
           
      </div>   
    )
  }
}

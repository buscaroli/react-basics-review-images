import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  state = {
    text: ''
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onInputSubmit(this.state.text)
  }
  
  render() {
    return (
      <form 
        style={{marginBottom: '30px'}}
        onSubmit={this.onFormSubmit}
        className='ui form'>
        <div className="ui fluid big icon field">
          <input 
            onChange={e => this.setState({text: e.target.value})}
            value={this.state.text}
            type="text" 
            placeholder="Little fluffy kitties..."
          />
        </div> 
      </form>
      
    )
  }
}

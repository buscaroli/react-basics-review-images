import React from 'react'
  
  // <div key={img.id} style={{display: 'inline-block', padding: '5px', borderRadius: '5px', overflow: 'hidden'}}>
  //     <img src={`${img.urls.regular}`} alt={img.description} style={{maxWidth: '250px', borderRadius: '5px', overflow: 'hidden'}}/>
  // </div>

function Card(props) {
  return (
    <div key={props.id} className="ui card">
      <div class="image">
        <img alt={props.description} src={props.img}/>
      </div>
      <div className="content">
        <div className="description">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default Card

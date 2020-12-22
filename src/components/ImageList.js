import React from 'react'

import Card from './Card'

export default function ImageList(props) {
  
  // If wanting to display just plain images with rounded corners:
  // const imagesArray = props.images.map(img =>
  //   <div key={img.id} style={{display: 'inline-block', padding: '5px', borderRadius: '5px', overflow: 'hidden'}}>
  //     <img src={`${img.urls.regular}`} alt={img.description} style={{maxWidth: '250px', borderRadius: '5px', overflow: 'hidden'}}/>
  //   </div>
  // )
  const cardsArray = props.images.map(img => 
    <Card 
      id={img.id} 
      img={img.urls.regular} 
      description={img.alt_description || img.description || 'Picture without a description.'} 
    />
  )

  return (
    <div className='ui cards centered'>
      {cardsArray}
    </div>
  )
}

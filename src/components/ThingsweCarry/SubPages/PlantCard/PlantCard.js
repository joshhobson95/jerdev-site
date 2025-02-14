import React from 'react'
import './PlantCard.css'


function PlantCard() {



  return (
    <div className='plant_card'>
        <div className='plant_card_top'>
        <img className='plant_card_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Pinon.jpg' />
        <h2>Spanish Broom</h2>
        <h3>(Spartium junceum)</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum  aliquam fermentum sapien ac semper. Fusce et semper ante.  </p>
        </div>
        <div className='plant_card_bottom'>
            <p>Full Sun</p>
            <p>Moderate Water</p>
            <p>NM Native</p>
            <p>Mature Size: 10' x 10'</p>
            <p>Blooms: Jun-Jul</p>
            <p>Zones: 6, 7, 8</p>

        </div>
      
    </div>
  )
}

export default PlantCard


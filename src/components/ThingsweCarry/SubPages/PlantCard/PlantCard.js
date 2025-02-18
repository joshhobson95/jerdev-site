import React from 'react'
import './PlantCard.css'
import fullsun from '../../../../Assets/icons/FullSun.png'
import highwater from '../../../../Assets/icons/HighWater.png'


function PlantCard() {



  return (
    <div className='plant_card'>
        <div className='plant_card_top'>
        <img className='plant_card_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Pinon.jpg' />
        <h2>Spanish Broom</h2>
        <h3>(Spartium junceum)</h3>
        <div className='plant_card_paragraph'>
        <p>Spanish Broom is a vigarous decidious shrub that thrives in New Mexico. Recognizable by its bright yellow flowers, and unique branch shape, this plant is a great option for shrubbery in any yard. </p>
        </div>
        </div>
        <div className='plant_card_bottom'>
          <div className='card_icon_sub_section'>
           <img className='sun_icon' src={fullsun}/> <p>Full Sun</p>
          </div>
          <div className='card_icon_sub_section'>
            <img className='water_icon' src={highwater}/>
            <p>High Water</p>
          </div>
          <div className='card_icon_sub_section'>
            
            <p>Mature Size:
          <br></br>
              10'x10'
            </p>
          </div>
          <div className='card_icon_sub_section'>
           
            <p>Zone Hardiness: 6, 7, 8</p>
          </div>
 

        </div>
      
    </div>
  )
}

export default PlantCard


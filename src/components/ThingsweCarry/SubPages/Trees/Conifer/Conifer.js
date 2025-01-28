import React, { useState } from 'react';
import './Conifer.css'

function Conifer() {


  return (
<div className='Conifer'> 

    <div className='trees_welcome'>
    <h1>New Mexico Conifers</h1>
  </div>

    <div className='pine_trees'>
    <h2>Non Decideous</h2>
        <div className='tree_example_each'>
        <h2>Pine</h2>
        <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Pinon.jpg'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
        </div>
        <div className='tree_example_each'>
        <h2>Juniper</h2>
        <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Juniper.jpg' alt='Juniper at Jericho Nursery in Albuquerque, New Mexico'/>
        </div>
        <div className='tree_example_each'>
        <h2>Spruce</h2>
        <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/blueSpruce.jpg' alt='Spruce at Jericho Nursery in Albuquerque, New Mexico'/>
        </div>
        <div className='tree_example_each'>
        <h2>Cypress</h2>
        <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Cypress.jpg' alt='Cypress at Jericho Nursery in Albuquerque, New Mexico'/>
        </div>
        <div className='tree_example_each'>
        <h2>Fir</h2>
        <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Fir.jpg' alt='Fir at Jericho Nursery in Albuquerque, New Mexico'/>
        </div>
    </div>      
</div>
  )
}

export default Conifer

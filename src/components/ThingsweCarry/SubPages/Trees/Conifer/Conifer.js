import React, { useState } from 'react';
import './Conifer.css'

function Conifer() {


  return (
<div className='Conifer'> 

    <div className='trees_welcome'>
    <h1>New Mexico Conifers</h1>
  </div>

    <div className='conifer_trees'>
    <div className='conifer_top_text'> 
            <h2>Conifer and Non-Deciduous</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
        </div>
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

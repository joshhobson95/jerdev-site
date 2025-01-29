import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Trees.css'


function Trees() {


return (


<div className='Trees'>

  <div className='trees_welcome'>
    <h1>New Mexico Trees</h1>
  </div>


  <div className='trees_body'>

     <div className='trees_body_top_text'>
        <h1>7 Reasons to plant a tree today</h1>
        <ul className='reasons_for_planting_trees'>
        <li>A mature tree can provide enough oxygen for two people annually</li>
        <li>Trees filter pollutants from the air and absorb carbon dioxide</li>
        <li>Planting one tree in your yard can decrease tempatures up to 10 degrees Fahrenheit</li>
        <li>Trees and their roots stabilize soil and prevent erosion</li>
        <li>You can grow a variety of fruits and even nuts like pistachios, almonds, and pecans in your own yard</li>
        <li>Trees can increase property value and promote relaxation as well as reduce stress</li>
        <li>“A society grows great when old men plant trees whose shade they know they shall never sit in.”</li>
        </ul>
    </div>

    <div className='tree_categories'>

      <div className='tree_catergories_inner'>
      <NavLink to='/shadetrees'>
      <h2>Shade Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/shade.jpg' alt='Shade Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
      <div className='tree_catergories_inner'>
      <NavLink to='/ornamentaltrees'>
      <h2>Ornamental Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringcherry.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
      <div className='tree_catergories_inner'>
      <NavLink to='/fruittrees'>
      <h2>Fruit Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/fruit.jpg' alt='Fruit and Nut Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
      <div className='tree_catergories_inner'>
      <NavLink to='/conifers'>
      <h2>Conifer Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Pines.jpg' alt='Conifers and Pine Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
    </div>

 
  </div>
</div>

        
      

  )
}



export default Trees

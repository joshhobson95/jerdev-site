import React from 'react';
import { NavLink } from 'react-router-dom';
import './Xeric.css'


function Xeric() {


return (


<div className='Xeric'>

  <div className='xeric_welcome'>
    <h1>Xeric Plants</h1>
  </div>


  <div className='xeric_body'>

     <div className='xeric_body_top_text'>
        <h1>Xeriscaping Basics</h1>
        <p>Put it in your head for your next Scrabble Game and for your next garden plant, Xeric!Praesent ipsum ante, porttitor at leo at, ultrices imperdiet magna.  Quisque aliquam tortor metus, sed porttitor urna tincidunt et. Nullam in nunc et felis ullamcorper pulvinar. Sed sit amet hendrerit lectus, vel  posuere nibh. Duis suscipit elit quis nulla ultrices, in feugiat arcu  suscipit. Pellentesque habitant morbi tristique senectus et netus et  malesuada fames ac turpis egestas. Nulla imperdiet vulputate libero.  Integer quis tortor et eros malesuada pharetra quis quis mauris. Nunc  pulvinar semper risus, vel bibendum libero venenatis ac. Praesent ipsum ante, porttitor at leo at, ultrices imperdiet magna.  Quisque aliquam tortor metus, sed porttitor urna tincidunt et. Nullam in nunc et felis ullamcorper pulvinar. Sed sit amet hendrerit lectus, vel  posuere nibh. Duis suscipit elit quis nulla ultrices, in feugiat arcu  suscipit. Pellentesque habitant morbi tristique senectus et netus et  malesuada fames ac turpis egestas. Nulla imperdiet vulputate libero.  Integer quis tortor et eros malesuada pharetra quis quis mauris. Nunc  pulvinar semper risus, vel bibendum libero venenatis ac.</p>


        <h2 className='xeric_core_concepts'>Core Concepts</h2>
        <div className='xeric_icons'>
    
        <span class="material-symbols-outlined">
          grass
        </span>
        <span class="material-symbols-outlined">
          grass
        </span>
        <span class="material-symbols-outlined">
          grass
        </span>
        <span class="material-symbols-outlined">
          grass
        </span>

        </div>


        <p>Put it in your head for your next Scrabble Game and for your next garden plant, Xeric!Praesent ipsum ante, porttitor at leo at, ultrices imperdiet magna.  Quisque aliquam tortor metus, sed porttitor urna tincidunt et. Nullam in nunc et felis ullamcorper pulvinar. Sed sit amet hendrerit lectus, vel  posuere nibh. Duis suscipit elit quis nulla ultrices, in feugiat arcu  suscipit. Pellentesque habitant morbi tristique senectus et netus et  malesuada fames ac turpis egestas. Nulla imperdiet vulputate libero.  Integer quis tortor et eros malesuada pharetra quis quis mauris. Nunc  pulvinar semper risus, vel bibendum libero venenatis ac. Praesent ipsum ante, porttitor at leo at, ultrices imperdiet magna.  Quisque aliquam tortor metus, sed porttitor urna tincidunt et. Nullam in nunc et felis ullamcorper pulvinar. Sed sit amet hendrerit lectus, vel  posuere nibh. Duis suscipit elit quis nulla ultrices, in feugiat arcu  suscipit. Pellentesque habitant morbi tristique senectus et netus et  malesuada fames ac turpis egestas. Nulla imperdiet vulputate libero.  Integer quis tortor et eros malesuada pharetra quis quis mauris. Nunc  pulvinar semper risus, vel bibendum libero venenatis ac.</p>
   
    </div>

    <div className='xeric_categories'>

      <div className='xeric_catergories_inner'>
        <NavLink to='/xerictrees'>
        <h2>Best Xeric Trees</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/xericgrass.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/xericshrubs'>
        <h2>Best Xeric Shrubs</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/ocotillo.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/cacti'>
        <h2>Cacti and Yuccas</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/cacti.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/xericbedding'>
        <h2>Xeric Bedding and Flowers</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/succulent.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/xericgrasses'>
        <h2>Best Xeric Grasses</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/xericgrass.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>


    </div>

 
  </div>
</div>

        
      

  )
}



export default Xeric

import React, { useState } from 'react';
import './XericShrubs.css'




function XericShrubs() {

const [isVitexVisible, setIsVitexVisible] = useState(false);

 const toggleVitexVisibility = () => {
    setIsVitexVisible(!isVitexVisible);
  };
  



  return (
    
<div className='XericTrees'>
  

    <div className='xeric_welcome'>
        <h1>Xeric Shrubs</h1>
    </div>


   
<div className='xeric_trees_container'>

  <div className='xeric_top_text'>
    <h2>Best Xeric Shrubs and Bushes</h2>  
     <p>Shade trees are a valuable addition to any landscape, providing relief from the sun, reducing energy costs, and enhancing curb appeal. In Albuquerque and across New Mexico’s Zone 7, selecting the right tree means considering heat tolerance, drought resistance, and adaptability to our unique climate. Hardy options like elms and sycamores offer long-lasting shade and durability, while faster-growing choices like cottonwoods and willows provide quick relief in open spaces. For those looking to add a touch of uniqueness, trees like the mimosa or locust can be an ambitious yet rewarding choice. No matter the season, planting a tree is an investment in the future—offering beauty, comfort, and environmental benefits for years to come. Whether you're looking to transform your yard or add greenery to a business property, now is always the perfect time to plant a shade tree.</p>


  </div>

<div className='xeric_tree_examples'>

        <div className={`xeric_tree_example_each ${isVitexVisible ? 'visible2' : 'hidden2'}`} onClick={toggleVitexVisibility} style={{ cursor: 'pointer' }}>

                <h2>Ultah Serviceberry</h2>
                <h2>Desert Broom</h2>
                <h2>Chamisa</h2>
                <h2>Feather Dalea</h2>
                <h2>Blue Steam Joint Fir</h2>
                <h2>Sea Buckthorn</h2>
                <h2>Upright Rosemary</h2>
                <h2>Weigela</h2>
                <h2>Giant Flowered Purple Sage</h2>
                <h2>Wax Flower</h2>
                <h2>Rock Sage</h2>
                <h2>CoffeeBerry</h2>
                <h2>Crandall Clove Currant</h2>
                <img
                  className='xeric_tree_example_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/ocotillo.jpg'
                  alt='Vitex in New Mexico'
                  />
              <div className={`xeric_tree_exerb ${isVitexVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Alba Vitex</h3>
                  <p>The Kousa dogwood offers creamy white blooms in late spring and bright red berries in summer, adding texture and color to the garden. Its layered branching and mottled bark provide year-round interest.</p>
                  <h3>Blue Diddley Vitex</h3>
                  <p>Raywood ash has striking deep purple-red fall foliage, with a dense canopy and ornamental value, thriving in well-drained soils.</p>
                  <h3>Montrose Purple Vitex</h3>
                  <p>The Kousa dogwood offers creamy white blooms in late spring and bright red berries in summer, adding texture and color to the garden. Its layered branching and mottled bark provide year-round interest.</p>
              </div>
          </div>

      

            
    </div>
</div>
</div>
  )
}

export default XericShrubs


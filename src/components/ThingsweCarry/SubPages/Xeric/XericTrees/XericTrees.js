import React from "react";
import './XericTrees.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import xerictrees from "../../PlantData/Xeric/XericTreeData";




function XericTrees() {


  return (
<div className='XericTrees'> 



    <div className='xeric_tree_container'>
      <div className='xeric_top_text'> 

        <div className='xeric_tree_header_background_image'>
              <h2>Xeric Trees for New Mexico</h2>
        </div>
              <p>Xeric trees are the foundation of a water-wise landscape, providing essential shade, structure, and beauty while requiring minimal irrigation. In Albuquerque’s arid climate, choosing drought-tolerant trees ensures your yard stays lush and inviting without excessive water use. Many xeric trees, such as the Golden Train Tree and Velvet Mesquite, have deep root systems that help them withstand prolonged dry periods while still delivering seasonal beauty with stunning blooms, unique foliage, and vibrant fall color. These trees not only enhance the aesthetic appeal of your landscape but also create cooler microclimates, helping to reduce overall water loss and providing relief from the intense New Mexico sun.</p>
      
              <p>At Jericho Nursery, we specialize in xeric trees that thrive in our region, offering a variety of native and well-adapted species suited for low-water landscapes. Whether you’re looking for a Chitalpa for its pink trumpet-shaped flowers, a Pistache for its fiery autumn foliage, or an Arizona Cypress for year-round greenery, our selection has something for every landscape style. Our experts can help you choose the right tree for your space, ensuring it meets your needs for shade, size, and aesthetic appeal. Explore our collection below and discover how xeric trees can transform your yard into a sustainable, low-maintenance oasis!</p>
          </div>



<div className='xeric_catalog_body'>


    <div className='xeric_catalog_sub_section'>
      <h2 className='xeric_catalog_title'>Shade Trees</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={xerictrees.shadetrees}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Flowering Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xerictrees.floweringtrees}/>
     
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Coniferous Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xerictrees.coniferoustrees}/>
   
      
     
  

               
      
   
          </div>
        </div>
      
      


  </div>
  </div>      
</div>
  )
}

export default XericTrees;

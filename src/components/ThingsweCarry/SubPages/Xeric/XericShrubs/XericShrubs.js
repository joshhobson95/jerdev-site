import React from "react";
import './XericShrubs.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import xericshrubs from "../../PlantData/Xeric/XericShrubData";




function XericShrubs() {


  return (
<div className='XericShrubs'> 



    <div className='xeric_tree_container'>
      <div className='xeric_top_text'> 

        <div className='xeric_header_background_image'>
              <h2>Cactus and Yucca in New Mexico</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='xeric_catalog_body'>


    <div className='xeric_catalog_sub_section'>
      <h2 className='xeric_catalog_title'>Broadleafs</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.broadleafs}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Yucca</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.flowering}/>
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Grasses</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.grasses}/>
      
     
  

               
      
   
          </div>
        </div>
        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Hard Xeric</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.hardxeric}/>
      
     
  

               
      
   
          </div>
        </div>
      


  </div>
  </div>      
</div>
  )
}

export default XericShrubs;

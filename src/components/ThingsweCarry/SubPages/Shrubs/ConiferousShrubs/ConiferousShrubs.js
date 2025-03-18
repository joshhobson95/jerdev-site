import React from "react";
import './ConiferousShrubs.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import coniferousshrubs from "../../PlantData/Shrubs/ConiferousShrubData";



function ConiferousShrubs() {


  return (
<div className='ConiferousShrubs'> 



    <div className='coniferous_shrub_tree_container'>
      <div className='coniferous_shrub_top_text'> 

        <div className='coniferous_shrub_header_background_image'>
              <h2>New Mexico Flowering Shrubs</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='shrub_catalog_body'>


    <div className='shrub_catalog_sub_section'>
      <h2 className='shrub_catalog_title'>Pine Shrubs</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.pines}/>

    


 
            </div>
          </div>


        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Juniper Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.junipers}/>

     
  

               
    
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Spruce Shrubs</h2>
            <PlantSlider  plants={coniferousshrubs.spruces}/>

  
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Abrorvitae Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.arborvitaes}/>


          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Hollies</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.hollies}/>
        
            
          </div>
        </div>

  
  


  </div>
  </div>      

  )
}

export default ConiferousShrubs;

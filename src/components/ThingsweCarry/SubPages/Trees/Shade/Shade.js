import React from "react";
import './Shade.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import shadedata from "../../PlantData/ShadeData";

function Shade() {





  return (
<div className='Shade'> 



    <div className='shade_tree_container'>
      <div className='shade_top_text'> 

        <div className='shade_header_background_image'>
              <h2>New Mexico Shade Trees</h2> 
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Ash Trees</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.ash}/>

    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cottonwood Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.cottonwood}/>
        

               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Elm Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.elm}/>
            
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Willow Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.willow}/>
            
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Maple Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.maple}/>
            
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Sycamore Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.sycamore}/>
            
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Oak Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.oak}/>
            
         
            
          </div>
        </div>




        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Other Shade Tree Varieties</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.other}/>
            
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Unique Shade Picks</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.unique}/>
            
         
            
          </div>
        </div>

  </div>
  </div>      
</div>
  )
}

export default Shade

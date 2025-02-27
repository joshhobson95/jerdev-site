import React from "react";
import './Ornamental.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import ornamentaldata from "../../PlantData/OrnamentalData";

function Ornamental() {





  return (
<div className='Ornamental'> 



    <div className='ornamental_tree_container'>
      <div className='ornamental_top_text'> 

        <div className='header_background_image'>
              <h2>New Mexico Ornamental Trees</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Ornamental Pears</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.pears}/>

    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Ornamental Cherries</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.cherries}/>


               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Ornamental Plums</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.plums}/>
  
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Crabapples</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.crabapples}/>
   
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Redbuds</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.redbuds}/>
       
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>More Flowering Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.unique}/>
       
         
            
          </div>
        </div>
  </div>
  </div>      
</div>
  )
}

export default Ornamental

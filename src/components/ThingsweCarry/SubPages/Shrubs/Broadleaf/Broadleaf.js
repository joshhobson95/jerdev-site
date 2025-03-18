import React from "react";
import './Broadleaf.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import broadleafevergreens from "../../PlantData/Shrubs/BroadleafEvergreenData";


function Broadleaf() {



  return (
<div className='Broadleaf'> 



    <div className='broadleaf_tree_container'>
      <div className='broadleaf_top_text'> 

        <div className='broadleaf_header_background_image'>
              <h2>Broadleaf Evergreen Shrubs</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='shrub_catalog_body'>


    <div className='shrub_catalog_sub_section'>
      <h2 className='shrub_catalog_title'>Boxwoods</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.boxwoods}/>

    

            </div>
          </div>


        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Euonomys</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.euonomys}/>
  
          
   
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Photinia</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.photinias}/>
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Nandina</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.nandinas}/>
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Cotoneaster</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.cotoneasters}/>
      
         
            
          </div>
        </div>

        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Burning Bush</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.burningbush}/>
  
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Other Great Broadleaf Evergreens</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.others}/>
  
         
            
          </div>
        </div>

  </div>
  </div>      
</div>
  )
}

export default Broadleaf;

import React from "react";
import './Broadleaf.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import coniferdata from '../../PlantData/Trees/ConiferData'

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



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Boxwoods</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.pines}/>

    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Euonomys</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.junipers}/>
  

               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Photinia</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Rosewood</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Nandina</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Mahogony</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cotoneaster</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Privet</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Sage</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Burning Bush</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>

  </div>
  </div>      
</div>
  )
}

export default Broadleaf;

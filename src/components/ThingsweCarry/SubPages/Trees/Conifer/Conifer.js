import React from "react";
import './Conifer.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import coniferdata from '../../PlantData/Trees/ConiferData'

function Conifer() {





  return (
<div className='Conifer'> 



    <div className='conifer_tree_container'>
      <div className='conifer_top_text'> 

        <div className='conifer_header_background_image'>
              <h2>New Mexico Conifers</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Pine</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.pines}/>

    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Juniper</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.junipers}/>
  

               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cedar</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cedars}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Spruce</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.spruces}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Fir</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.firs}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cypress</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cypress}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Arborvitaes</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.arborvitaes}/>
         
            
          </div>
        </div>

  </div>
  </div>      
</div>
  )
}

export default Conifer

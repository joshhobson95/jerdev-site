import React from "react";
import './Flowering.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import floweringshrubdata from "../../PlantData/Shrubs/FloweringShrubData";



function Flowering() {


  return (
<div className='Flowering'> 



    <div className='flowering_tree_container'>
      <div className='flowering_top_text'> 

        <div className='flowering_header_background_image'>
              <h2>New Mexico Flowering Shrubs</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='shrub_catalog_body'>


    <div className='shrub_catalog_sub_section'>
      <h2 className='shrub_catalog_title'>Butterfly Bush</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.butterflybushes}/>

    


 
            </div>
          </div>


        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Indian Hawthorne</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.indianhawthornes}/>
     
  

               
      
   
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Potentilla</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.potentillas}/>
  
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Sages</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.sages}/>

          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Lilacs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.lilacs}/>

         
            
          </div>
        </div>

        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Crape Myrtle</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.crapemyrtles}/>
    
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Rose of Sharon</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.roseofsharons}/>

         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Forsythia</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.forsythias}/>
     
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Drought Tolerant Options</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.xerics}/>
     
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>More Great Flowering Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.others}/>
     
         
            
          </div>
        </div>


  </div>
  </div>      
</div>
  )
}

export default Flowering;

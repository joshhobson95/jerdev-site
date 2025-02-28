import React from "react";
import './Fruit.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import fruitdata from '../../PlantData/Trees/FruitData'

function Fruit() {





  return (
<div className='Fruit'> 



    <div className='fruit_tree_container'>
      <div className='fruit_top_text'> 

        <div className='fruit_header_background_image'>
              <h2>New Mexico Fruit Trees</h2>
        </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>

              <span>List or Icon</span>

      
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Apples Trees</h2>
          <div className='catalog_cards'>

        <PlantSlider plants={fruitdata.apples}/>
    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cherries Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.cherries}/>
  

               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Peaches Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.peaches}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Nectarines Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.nectarines}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Apricots Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.apricots}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Plums Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.plums}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Pears Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.pears}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Figs Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.figs}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Pomegranates Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.pomegranates}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Nut Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.nuts}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Other Fruit Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.others}/>
      
            
          </div>
        </div>


  </div>
  </div>      
</div>
  )
}

export default Fruit

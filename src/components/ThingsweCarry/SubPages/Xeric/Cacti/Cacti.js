import React, {useState} from "react";
import './Cacti.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import cactusdata from "../../PlantData/Xeric/CactusData";




function Cacti() {

  
const [visibleAttribution, setVisibleAttribution] = useState();
  
const toggleVisible = () => {
setVisibleAttribution(!visibleAttribution)
}


  return (
<div className='Cacti'> 



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
      <h2 className='xeric_catalog_title'>Cactus</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.cactus}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Yucca</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.yuccas}/>
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Agave</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.agaves}/>
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Aloe</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.aloes}/>
      
     
  

               
      
   
          </div>
        </div>



        <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Red Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Hesperaloe parviflora, Ponteilla.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Sylenius" target="_blank" rel="noopener noreferrer">
              Sylenius
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Hesperaloe_parviflora,_Ponteilla.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
          <div className="single_attribution">
          <span><strong>Navajo Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Yucca baileyi in Christchurch Botanic Gardens 03.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Yucca_baileyi_in_Christchurch_Botanic_Gardens_03.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        <div className="single_attribution">
          <span><strong>Twin-flowered Agave Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Agave geminiflora - Twin-flowered agave 01-1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Zcebeci" target="_blank" rel="noopener noreferrer">
              Zeynel Cebeci
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Agave_geminiflora_-_Twin-flowered_agave_01-1.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

  
    
    
    



        </div>
      )}
      </div> 
      


  </div>
  </div>      
</div>
  )
}

export default Cacti;

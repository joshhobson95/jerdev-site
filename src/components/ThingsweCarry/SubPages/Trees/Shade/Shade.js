import React, {useState} from "react";
import './Shade.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import shadedata from "../../PlantData/Trees/ShadeData";

function Shade() {


  const [visibleAttribution, setVisibleAttribution] = useState();

  const toggleVisible = () => {
    setVisibleAttribution(!visibleAttribution)
  }


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
            <h2 className='tree_catalog_title'>Honey Locust Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={shadedata.honeylocust}/>
            
         
            
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

  <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Arizona Ash Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Fraxinus-velutina-20080402.JPG</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Miwasatoshi" target="_blank" rel="noopener noreferrer">
                Miwasatoshi
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Fraxinus-velutina-20080402.JPG" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
          <div className="single_attribution">
          <span><strong>Narrowleaf Cottonwood Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Populus angustifolia 1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Stan_Shebs" target="_blank" rel="noopener noreferrer">
                Stan Shebs
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Populus_angustifolia_1.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        <div className="single_attribution">
          <span><strong>Cedar Elm Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Populus angustifolia 1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Kenraiz" target="_blank" rel="noopener noreferrer">
              Krzysztof Ziarnek, Kenraiz
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Ulmus_crassifolia_kz01.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        <div className="single_attribution">
          <span><strong>White Willow Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Salix alba leaves.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:MPF" target="_blank" rel="noopener noreferrer">       
              No machine-readable author provided. MPF assumed (based on copyright claims).
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Salix_alba_leaves.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

        <div className="single_attribution">
          <span><strong>Mexican Sycamore Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Platanus mexicana in Hackfalls Arboretum (1).jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">       
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Platanus_mexicana_in_Hackfalls_Arboretum_(1).jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

        <div className="single_attribution">
          <span><strong>Chinese Pistache Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Pistacia chinensis 02.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">       
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Pistacia_chinensis_02.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>

        <div className="single_attribution">
          <span><strong>Western Hackberry Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Celtis reticulata 2.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Stan_Shebs" target="_blank" rel="noopener noreferrer">       
              Stan Shebs
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Celtis_reticulata_2.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
    
    
    



        </div>
      )}
      </div> 

</div>
  )
}

export default Shade

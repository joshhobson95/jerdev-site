import React, {useState} from "react";
import './Broadleaf.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import broadleafevergreens from "../../PlantData/Shrubs/BroadleafEvergreenData";


function Broadleaf() {


  const [visibleAttribution, setVisibleAttribution] = useState();

  const toggleVisible = () => {
    setVisibleAttribution(!visibleAttribution)
  }


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
            <h2 className='shrub_catalog_title'>Mahogany</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.mahogonies}/>
         
            
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
            <h2 className='shrub_catalog_title'>Barberry</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.barberries}/>
  
         
            
          </div>
        </div>
   
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Other Great Broadleaf Evergreens</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.others}/>
  
         
            
          </div>
        </div>

        <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Manhattan Euonymus Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Euonymus kiautschovicus Manhattan 0zz.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/Special:Contributions/David_Stang" target="_blank" rel="noopener noreferrer">
                David J. Stang
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Euonymus_kiautschovicus_Manhattan_0zz.jpg" target="_blank" rel="noopener noreferrer">
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
          <span><strong>Alderleaf Mountain Mahogany</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Cercocarpus montanus kz07.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Kenraiz" target="_blank" rel="noopener noreferrer">
              Krzysztof Ziarnek
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Cercocarpus_montanus_kz07.jpg" target="_blank" rel="noopener noreferrer">
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
          <span><strong>Curl-leaf Mountain Mahogany</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Cercocarpus ledifolius 8219.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Wsiegmund" target="_blank" rel="noopener noreferrer">
              Walter Siegmund
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Cercocarpus_ledifolius_8219.jpg" target="_blank" rel="noopener noreferrer">
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
        
    



        </div>
      )}
      </div> 

  </div>
  </div>      
</div>
  )
}

export default Broadleaf;

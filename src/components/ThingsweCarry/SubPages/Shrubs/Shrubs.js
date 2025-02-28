import React from 'react'
import './Shrubs.css'
import { NavLink } from 'react-router-dom'

function Shrubs() {
  return (
    <div className='Shrubs'>

        <div className='shrubs_welcome'>
            <h1>New Mexico Shrubs</h1>
        </div>

          <div className='shrubs_body'>
        
             <div className='shrubs_top_text'>
                <h2>Shrubs Header</h2>
                  <p>Aliquam fringilla, elit in vestibulum lacinia, nibh nisl rutrum velit, eget rhoncus justo libero quis elit. Duis elementum, libero quis fermentum eleifend, magna tortor rutrum metus, sit amet ornare nisi ex vel lectus. Nullam in velit tortor. Sed ultrices lacinia purus a viverra. Proin varius gravida ex ut porta. Etiam ullamcorper cursus arcu quis interdum. Curabitur eleifend velit id tempus dignissim. Suspendisse aliquam commodo placerat. Integer gravida pulvinar molestie. Etiam hendrerit consectetur varius. Fusce congue magna eu ligula rhoncus, eu pharetra ex dapibus. </p>
            </div>
        
            <div className='shrub_categories'>
        
              <div className='shrub_catergories_inner'>
              <NavLink to='/floweringshrubs'>
              <h2>Flowering Shrubs</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/potentilla.jpg' alt='Shade Trees in Albuqueruque, New Mexico and surrounding areas'/>
              </NavLink>
              </div>
              <div className='shrub_catergories_inner'>
              <NavLink to='/broadleafevergreens'>
              <h2>Broaleaf Evergreens</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/hedge.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
              </NavLink>
              </div>
              <div className='shrub_catergories_inner'>
              <NavLink to='/coniferousshrubs'>
              <h2>Coniferous Shrubs</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/conifershrubs.jpg' alt='Fruit and Nut Trees in Albuqueruque, New Mexico and surrounding areas'/>
              </NavLink>
              </div>
            </div>
        
         
          </div>
      
    </div>
  )
}

export default Shrubs

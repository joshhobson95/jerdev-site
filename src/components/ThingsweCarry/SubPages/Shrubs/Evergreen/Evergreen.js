import React, {useState} from 'react'
import './Evergreen.css'


function Evergreen() {



    const [isJuniperVisible, setIsJuniperVisible] = useState(false);

    const toggleJuniperVisibility = () => { setIsJuniperVisible(!isJuniperVisible); };



  return (
    <div className='Evergreen'> 

      <div className='shrubs_welcome'>
      <h1>Evergreen Shrubs</h1>
      </div>

    <div className='evergreen_shrub_container'>
      <div className='evergreen_top_text'> 
              <h2>Coniferous and Evergreen Shrubs great for Albuquerque</h2>
              <p>(These are mostly non-native green hedges and topiary type of bushes. For a more New Mexico brush and native plant list- visit our Xeric Page).
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>


      <div className='evergreen_examples'>      


            <div className='evergreen_example_each' onClick={toggleJuniperVisibility} style={{ cursor: 'pointer' }}>
                <h2>Juniper</h2>
                <img className='evergreen_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/evergreen/juniper.jpg'alt='Juniper Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`evergreen_exerb ${isJuniperVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

         













   


         
              
              


      </div>
  </div>      
</div>
  )
}

export default Evergreen

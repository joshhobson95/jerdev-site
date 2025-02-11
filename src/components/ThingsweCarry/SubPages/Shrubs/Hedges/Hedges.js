import React, {useState} from 'react'
import './Hedges.css'


function Hedges() {



    const [isBoxwoodVisible, setIsBoxwoodVisible] = useState(false);

    const toggleBoxwoodVisibility = () => { setIsBoxwoodVisible(!isBoxwoodVisible); };



  return (
    <div className='Hedges'> 

      <div className='shrubs_welcome'>
      <h1>Deciduous Shrubs</h1>
      </div>

    <div className='hedge_shrub_container'>
      <div className='hedge_top_text'> 
              <h2>Best Shrubs in ABQ for hedging, topiary and landscaping</h2>
              <p>(These are mostly non-native green hedges and topiary type of bushes. For a more New Mexico brush and native plant list- visit our Xeric Page).
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>


      <div className='hedge_examples'>      


            <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Boxwood</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Euonomys</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Photinia</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduousShrub.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>


              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Arizona Rosewood</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Holly</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/holly.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Nandina</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/nandina.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>



              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Mountain Mahagony</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Pyrenees Cotoneaster</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/cotoneaster.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>


              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Wax Myrtle</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Yew</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Cheesewood</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Texas Privet</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Laurel</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>
              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Burning Bush</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>
              <div className='hedge_example_each' onClick={toggleBoxwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Texas Sage</h2>
                <img className='hedge_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/deciduous/boxwood.jpg'alt='Boxwood Shrub at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`hedge_exerb ${isBoxwoodVisible ? 'visible2' : 'hidden2'}`}>
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

export default Hedges

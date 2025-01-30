import React, { useState } from 'react';
import './Conifer.css'


function Conifer() {



    const [isPineVisible, setIsPineVisible] = useState(false);
    const [isJuniperVisible, setIsJuniperVisible] = useState(false);
    const [isSpruceVisible, setIsSpruceVisible] = useState(false);
    const [isCypressVisible, setIsCypressVisible] = useState(false);
    const [isFirVisible, setIsFirVisible] = useState(false);
    const [isCedarVisible, setIsCedarVisible] = useState(false);

    const togglePineVisibility = () => { setIsPineVisible(!isPineVisible); };
    const toggleJuniperVisibility = () => { setIsJuniperVisible(!isJuniperVisible); };
    const toggleSpruceVisibility = () => { setIsSpruceVisible(!isSpruceVisible); };
    const toggleCypressVisibility = () => { setIsCypressVisible(!isCypressVisible); };
    const toggleFirVisibility = () => { setIsFirVisible(!isFirVisible); };
    const toggleCedarVisibility = () => { setIsCedarVisible(!isCedarVisible); };


  return (
<div className='Conifer'> 

    <div className='trees_welcome'>
    <h1>New Mexico Conifers</h1>
  </div>

    <div className='conifer_tree_container'>
      <div className='conifer_top_text'> 
              <h2>Coniferous Trees</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>
      <div className='tree_examples'>          
            <div className='conifer_tree_example_each' onClick={togglePineVisibility} style={{ cursor: 'pointer' }}>
                <h2>Pine</h2>
                <img className='tree_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Pinon.jpg'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`tree_exerb ${isPineVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Pinyon Pine</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Ponderosa Pine</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Mugo Pine</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='conifer_tree_example_each' onClick={toggleJuniperVisibility} style={{ cursor: 'pointer' }}>
                <h2>Juniper</h2>
                <img className='tree_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Juniper.jpg' alt='Juniper at Jericho Nursery in Albuquerque, New Mexico' />
                <div className={`tree_exerb ${isJuniperVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Juniper Species 1</h3>
                    <p>Detailed description of Juniper Species 1 goes here...</p>
                    <h3>Juniper Species 2</h3>
                    <p>Detailed description of Juniper Species 2 goes here...</p>
                </div>
            </div>

            <div className='conifer_tree_example_each' onClick={toggleSpruceVisibility} style={{ cursor: 'pointer' }}>
                <h2>Spruce</h2>
                <img className='tree_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/blueSpruce.jpg' alt='Spruce at Jericho Nursery in Albuquerque, New Mexico' />
                <div className={`tree_exerb ${isSpruceVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Spruce Species 1</h3>
                    <p>Detailed description of Spruce Species 1 goes here...</p>
                    <h3>Spruce Species 2</h3>
                    <p>Detailed description of Spruce Species 2 goes here...</p>
                </div>
            </div>

            <div className='conifer_tree_example_each' onClick={toggleCypressVisibility} style={{ cursor: 'pointer' }}>
                <h2>Cypress</h2>
                <img className='tree_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Cypress.jpg' alt='Cypress at Jericho Nursery in Albuquerque, New Mexico' />
                <div className={`tree_exerb ${isCypressVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Cypress Species 1</h3>
                    <p>Detailed description of Cypress Species 1 goes here...</p>
                    <h3>Cypress Species 2</h3>
                    <p>Detailed description of Cypress Species 2 goes here...</p>
                </div>
            </div>

            <div className='conifer_tree_example_each' onClick={toggleFirVisibility} style={{ cursor: 'pointer' }}>
                <h2>Fir</h2>
                <img className='tree_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Fir.jpg' alt='Fir at Jericho Nursery in Albuquerque, New Mexico' />
                <div className={`tree_exerb ${isFirVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Fir Species 1</h3>
                    <p>Detailed description of Fir Species 1 goes here...</p>
                    <h3>Fir Species 2</h3>
                    <p>Detailed description of Fir Species 2 goes here...</p>
                </div>
            </div>

            <div className='conifer_tree_example_each' onClick={toggleCedarVisibility} style={{ cursor: 'pointer' }}>
                <h2>Cedar</h2>
                <img className='tree_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/cedar.jpg' alt='Cedar at Jericho Nursery in Albuquerque, New Mexico' />
                <div className={`tree_exerb ${isCedarVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Cedar Species 1</h3>
                    <p>Detailed description of Cedar Species 1 goes here...</p>
                    <h3>Cedar Species 2</h3>
                    <p>Detailed description of Cedar Species 2 goes here...</p>
                </div>
            </div>
        </div>

  </div>      
</div>
  )
}

export default Conifer

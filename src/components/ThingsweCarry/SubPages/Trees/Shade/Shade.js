import React, { useState } from 'react';
import './Shade.css'




function Shade() {


  
const [isAshVisible, setIsAshVisible] = useState(false);
const [isCottonwoodVisible, setIsCottonwoodVisible] = useState(false);
const [isMapleVisible, setIsMapleVisible] = useState(false);
const [isMimosaVisible, setIsMimosaVisible] = useState(false);
const [isLocustVisible, setIsLocustVisible] = useState(false);
const [isSycamoreVisible, setIsSycamoreVisible] = useState(false);
const [isElmVisible, setIsElmVisible] = useState(false);
const [isOakVisible, setIsOakVisible] = useState(false);
const [isWillowVisible, setIsWillowVisible] = useState(false);

 const toggleAshVisibility = () => {
    setIsAshVisible(!isAshVisible);
  };
  const toggleCottonwoodVisibility = () => {
    setIsCottonwoodVisible(!isCottonwoodVisible);
  };
  const toggleMapleVisibility = () => {
    setIsMapleVisible(!isMapleVisible);
  };

  const toggleMimosaVisibility = () => {
    setIsMimosaVisible(!isMimosaVisible);
  };
  const toggleLocustVisibility = () => {
    setIsLocustVisible(!isLocustVisible);
  };
  const toggleSycamoreVisibility = () => {
    setIsSycamoreVisible(!isSycamoreVisible);
  };
  const toggleElmVisibility = () => {
    setIsElmVisible(!isElmVisible);
  };
  const toggleOakVisibility = () => {
    setIsOakVisible(!isOakVisible);
  };
  const toggleWillowVisibility = () => {
    setIsWillowVisible(!isWillowVisible);
  };




  return (
<div className='Shade'>

    <div className='trees_welcome'>
        <h1>New Mexico Shade Trees</h1>
    </div>


   
<div className='shade_trees_container'>

  <div className='shade_top_text'>
    <h2>Best Choices for Zone 7 Shade Trees</h2>  
     <p>Shade trees are a valuable addition to any landscape, providing relief from the sun, reducing energy costs, and enhancing curb appeal. In Albuquerque and across New Mexico’s Zone 7, selecting the right tree means considering heat tolerance, drought resistance, and adaptability to our unique climate. Hardy options like elms and sycamores offer long-lasting shade and durability, while faster-growing choices like cottonwoods and willows provide quick relief in open spaces. For those looking to add a touch of uniqueness, trees like the mimosa or locust can be an ambitious yet rewarding choice. No matter the season, planting a tree is an investment in the future—offering beauty, comfort, and environmental benefits for years to come. Whether you're looking to transform your yard or add greenery to a business property, now is always the perfect time to plant a shade tree.</p>


  </div>

<div className='tree_examples'>
 {/* Ash Trees */}
 <div className={`tree_example_each ${isAshVisible ? 'visible2' : 'hidden2'}`} onClick={toggleAshVisibility} style={{ cursor: 'pointer' }}>
                <h2>Ash Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ash.png'
                  alt='Ash Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isAshVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Arizona Ash</h3>
                  <p>Arizona ash, a hardy and drought-tolerant tree, thrives in arid climates, offering a broad canopy of light green leaves that turn yellow in fall.</p>
                  <h3>Black Ash</h3>
                  <p>Black ash, native to the northeastern United States, is distinguished by its dark bark and compound leaves that turn golden-yellow in autumn.</p>
                  <h3>Green Ash</h3>
                  <p>Green ash is a versatile and adaptable tree, known for its bright green foliage and smooth, gray bark. It tolerates a wide range of soil conditions.</p>
                  <h3>Raywood Ash</h3>
                  <p>Raywood ash has striking deep purple-red fall foliage, with a dense canopy and ornamental value, thriving in well-drained soils.</p>
                </div>
              </div>

{/* Cottonwood Trees */}
          <div className='tree_example_each' onClick={toggleCottonwoodVisibility} style={{ cursor: 'pointer' }}>
                <h2>Cottonwood Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/cottonwood.jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isCottonwoodVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Eastern Cottonwood</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Black Cottonwood</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h3>Rio Grande Cottonwood</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Maple Trees */}
          <div className='tree_example_each' onClick={toggleMapleVisibility} style={{ cursor: 'pointer' }}>
                <h2>Maple Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Maple.jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isMapleVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Boxelder Maple (Native)</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Bigtooth Maple (Native)</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h3>Big Leaf Maple</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h3>Japanese Maple</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h3>Silver Maple</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h3>Tatarian Maple</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Mimosa Trees */}
          <div className='tree_example_each' onClick={toggleMimosaVisibility} style={{ cursor: 'pointer' }}>
                <h2>Mimosa Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/mimosa%20(2).jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isMimosaVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Mimosoa Silk Tree</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Chocolate Mimosa Silk Tree</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                </div>
              </div>
{/* Locust Trees */}
          <div className='tree_example_each' onClick={toggleLocustVisibility} style={{ cursor: 'pointer' }}>
                <h2>Locust Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/honeylocust2.png'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isLocustVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Honey Locust</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Black Locust</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h3>New Mexico Locust</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                </div>
              </div>
{/* Sycamore Trees */}    
          <div className='tree_example_each' onClick={toggleSycamoreVisibility} style={{ cursor: 'pointer' }}>
                <h2>Sycamore Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Sycamore.jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isSycamoreVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Arizona Sycamore</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Mexican Sycamore</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h3>American Sycamore</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Willow Trees */}                 
          <div className='tree_example_each' onClick={toggleWillowVisibility} style={{ cursor: 'pointer' }}>
                <h2>Willow Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/willow.jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isWillowVisible ? 'visible2' : 'hidden2'}`}>
     
                  <h3>Globe Willow</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Weeping Willow</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h3>White Willow</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
            </div>
{/* Elm Trees */}                 
          <div className='tree_example_each' onClick={toggleElmVisibility} style={{ cursor: 'pointer' }}>
                <h2>Elm Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ElmTree.jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isElmVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>American Elm</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Cedar Elm</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h3>Serbian Elm</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Oak Trees */}                 
          <div className='tree_example_each' onClick={toggleOakVisibility} style={{ cursor: 'pointer' }}>
                <h2>Oak Trees</h2>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/oakleaf.jpg'
                  alt='Cottonwood Trees in New Mexico'
                  />
                <div className={`tree_exerb ${isOakVisible ? 'visible2' : 'hidden2'}`}>
                  <h3>Bur Oak</h3>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h3>Gray Oak</h3>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h3>Gambel Oak</h3>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>

            
            <div className='other_trees'>
            <h1>Standout Shade Trees</h1>  
            <p>Unlike maples, elms, or willows, which have numerous varieties and subspecies, these trees stand on their own without an extensive family of closely related types. While they may not have as many botanical siblings, they make up for it with unique charm, resilience, and exceptional shade coverage. Each tree in this category brings something special—whether it’s striking seasonal color, interesting foliage, or a distinct silhouette that sets it apart in any landscape. If you're looking for a shade tree that stands out while still providing excellent coverage, these are excellent choices.</p>

                <div>
                  <h2>Chinese Pistache</h2> 
                  <img className='tree_example_circle_image_s' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/PistacheNew.png' alt='Chinese Pistche Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                  
                </div>
                <div>
                  <h2>Orange Sage</h2>
                  <img className='tree_example_circle_image_s' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/OrangeSage.png' alt='Orange Sage Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h2>Golden Rain Tree</h2>
                  <img className='tree_example_circle_image_s' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/GoldenRainTree.png' alt='Golden Rain Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h2>Ginkgo Tree</h2>
                  <img className='tree_example_circle_image_s' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ginko.jpg' alt='Ginkgo Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
               
              </div>    
</div>



</div>
</div>
  )
}

export default Shade


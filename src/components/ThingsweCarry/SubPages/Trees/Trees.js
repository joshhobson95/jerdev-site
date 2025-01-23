import React, { useState } from 'react';
import './Trees.css'


function Trees() {


  const [isAshVisible, setIsAshVisible] = useState(false);
  const [isCottonwoodVisible, setIsCottonwoodVisible] = useState(false);
  const [isMapleVisible, setIsMapleVisible] = useState(false);
  const [isMulberryVisible, setIsMulberryVisible] = useState(false);
  const [isMimosaVisible, setIsMimosaVisible] = useState(false);
  const [isLocustVisible, setIsLocustVisible] = useState(false);
  const [isSycamoreVisible, setIsSycamoreVisible] = useState(false);
  const [isElmVisible, setIsElmVisible] = useState(false);
  const [isOakVisible, setIsOakVisible] = useState(false);
  const [isWillowVisible, setIsWillowVisible] = useState(false);

  const [isOpearVisible, setIsOpearVisible] = useState(false);
  const [isCrabappleVisible, setIsCrabappleVisible] = useState(false);
  const [isOcherryVisible, setIsOcherryVisible] = useState(false);
  const [isSandCherryVisible, setIsSandCherryVisible] = useState(false);
  const [isDogwoodVisible, setIsDogwoodVisible] = useState(false);
  const [isOplumVisible, setIsOplumVisible] = useState(false);

  const [isPeachVisible, setIsPeachVisible] = useState(false);
  const [isCherryVisible, setIsCherryVisible] = useState(false);
  const [isPlumVisible, setIsPlumVisible] = useState(false);
  const [isAppleVisible, setIsAppleVisible] = useState(false);
  const [isPearVisible, setIsPearVisible] = useState(false);
  const [isFigVisible, setIsFigVisible] = useState(false);
  const [isPomVisible, setIsPomVisible] = useState(false);
  const [isNectarineVisible, setIsNectarineVisible] = useState(false);


  
  

  //shade
  const toggleAshVisibility = () => {
    setIsAshVisible(!isAshVisible);
  };
  const toggleCottonwoodVisibility = () => {
    setIsCottonwoodVisible(!isCottonwoodVisible);
  };
  const toggleMapleVisibility = () => {
    setIsMapleVisible(!isMapleVisible);
  };
  const toggleMulberryVisibility = () => {
    setIsMulberryVisible(!isMulberryVisible);
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

//ornamental
  const toggleOpearVisibility = () => {
    setIsOpearVisible(!isOpearVisible);
  };
const toggleCrabappleVisibility = () => setIsCrabappleVisible(!isCrabappleVisible);
const toggleOcherryVisibility = () => setIsOcherryVisible(!isOcherryVisible);
const toggleSandCherryVisibility = () => setIsSandCherryVisible(!isSandCherryVisible);
const toggleDogwoodVisibility = () => setIsDogwoodVisible(!isDogwoodVisible);
const toggleOplumVisibility = () => setIsOplumVisible(!isOplumVisible);
//fruit
const togglePeachVisibility = () => {setIsPeachVisible(!isPeachVisible);};
const toggleCherryVisibility = () => {setIsCherryVisible(!isCherryVisible);};
const togglePlumVisibility = () => {setIsPlumVisible(!isPlumVisible);};
const toggleAppleVisibility = () => {setIsAppleVisible(!isAppleVisible);};
const togglePearVisibility = () => {setIsPearVisible(!isPearVisible);};
const toggleFigVisibility = () => {setIsFigVisible(!isFigVisible);};
const togglePomVisibility = () => {setIsPomVisible(!isPomVisible);};
const toggleNectarineVisibility = () => {setIsNectarineVisible(!isNectarineVisible);};


return (
    <div className='Trees'>

        <div className='trees_welcome'>
            <h1>Trees</h1>
        </div>


<div className='trees_body'>

<div className='trees_body_top_text'>
  <h1>7 Reasons to plant a tree today</h1>

  <ul className='reasons_for_planting_trees'>
  <li>A mature tree can provide enough oxygen for two people annually</li>
  <li>Trees filter pollutants from the air and absorb carbon dioxide</li>
  <li>Planting one tree in your yard can decrease tempatures up to 10 degrees Fahrenheit</li>
  <li>Trees and their roots stabilize soil and prevent erosion</li>
  <li>You can grow a variety of fruits and even nuts like pistachios, almonds, and pecans in your own yard</li>
  <li>Trees can increase property value and promote relaxation as well as reduce stress</li>
  <li>“A society grows great when old men plant trees whose shade they know they shall never sit in.”</li>
  </ul>

</div>

  <div className='tree_examples'>

  <div className='tree_examples_inner'>

  <h2>New Mexico Shade Trees</h2>

<div className='shade_trees_container'>

 {/* Ash Trees */}
        <div className='tree_example_each' onClick={toggleAshVisibility} style={{ cursor: 'pointer' }}>
                <h3>Ash Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ash.png'
                  alt='Ash Trees in New Mexico'
                />
                <div className={`tree_exerb ${isAshVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Arizona Ash</h4>
                  <p>Arizona ash, a hardy and drought-tolerant tree, thrives in arid climates, offering a broad canopy of light green leaves that turn yellow in fall.</p>
                  <h4>Black Ash</h4>
                  <p>Black ash, native to the northeastern United States, is distinguished by its dark bark and compound leaves that turn golden-yellow in autumn.</p>
                  <h4>Green Ash</h4>
                  <p>Green ash is a versatile and adaptable tree, known for its bright green foliage and smooth, gray bark. It tolerates a wide range of soil conditions.</p>
                  <h4>Raywood Ash</h4>
                  <p>Raywood ash has striking deep purple-red fall foliage, with a dense canopy and ornamental value, thriving in well-drained soils.</p>
                </div>
              </div>

{/* Cottonwood Trees */}
          <div className='tree_example_each' onClick={toggleCottonwoodVisibility} style={{ cursor: 'pointer' }}>
                <h3>Cottonwood Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/cottonwood.jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isCottonwoodVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Eastern Cottonwood</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Black Cottonwood</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>Rio Grande Cottonwood</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Maple Trees */}
          <div className='tree_example_each' onClick={toggleMapleVisibility} style={{ cursor: 'pointer' }}>
                <h3>Maple Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Maple.jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isMapleVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Boxelder Maple (Native)</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Bigtooth Maple (Native)</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>Big Leaf Maple</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h4>Japanese Maple</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h4>Silver Maple</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h4>Tatarian Maple</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Mulberry Trees */}
          <div className='tree_example_each' onClick={toggleMulberryVisibility} style={{ cursor: 'pointer' }}>
                <h3>Mulberry Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Mulberry.jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isMulberryVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Littleleaf Mulberry</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Red Mulberry</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>White Mulberry</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* MimosaTrees */}
          <div className='tree_example_each' onClick={toggleMimosaVisibility} style={{ cursor: 'pointer' }}>
                <h3>Mimosa Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/mimosa%20(2).jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isMimosaVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Mimosoa Silk Tree</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Chocolate Mimosa Silk Tree</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                </div>
              </div>
{/* Locust Trees */}
          <div className='tree_example_each' onClick={toggleLocustVisibility} style={{ cursor: 'pointer' }}>
                <h3>Locust Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/honeylocust2.png'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isLocustVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Honey Locust</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Black Locust</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>New Mexico Locust</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                </div>
              </div>
{/* Sycamore Trees */}    
          <div className='tree_example_each' onClick={toggleSycamoreVisibility} style={{ cursor: 'pointer' }}>
                <h3>Sycamore Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Sycamore.jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isSycamoreVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Arizona Sycamore</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Mexican Sycamore</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>American Sycamore</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Elm Trees */}                 
          <div className='tree_example_each' onClick={toggleElmVisibility} style={{ cursor: 'pointer' }}>
                <h3>Elm Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/AmericanElm.png'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isElmVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>American Elm</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Cedar Elm</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>Serbian Elm</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Oak Trees */}                 
          <div className='tree_example_each' onClick={toggleOakVisibility} style={{ cursor: 'pointer' }}>
                <h3>Oak Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/oakleaf.jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isOakVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Bur Oak</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Gray Oak</h4>
                  <p>Black Cottonwood is a large tree with white, soft wood and has wide leaves that turn yellow in the fall.</p>
                  <h4>Gambel Oak</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
{/* Willow Trees */}                 
          <div className='tree_example_each' onClick={toggleWillowVisibility} style={{ cursor: 'pointer' }}>
                <h3>Willow Trees</h3>
                <img
                  className='tree_example_circle_image'
                  src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/willow.jpg'
                  alt='Cottonwood Trees in New Mexico'
                />
                <div className={`tree_exerb ${isWillowVisible ? 'visible2' : 'hidden2'}`}>
                  <h4>Coyote Willow</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Globe Willow</h4>
                  <h4>Desert Willow</h4>
                  <p>The Eastern Cottonwood, native to North America, has broad, heart-shaped leaves and is known for its rapid growth.</p>
                  <h4>Weeping Willow</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                  <h4>White Willow</h4>
                  <p>Native to the southwestern U.S., this cottonwood has a tall stature and is often found along rivers and wetlands.</p>
                </div>
              </div>
              

              <div className='other_trees'>
                <h3>More Great Shade Trees</h3>       
                <div>
                  <h4>Chinese Pistache</h4> 
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/ChinesePistache.png' alt='Chinese Pistche Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                  
                </div>
                <div>
                  <h4>Orange Sage</h4>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/OrangeSage.png' alt='Orange Sage Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h4>Golden Rain Tree</h4>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/GoldenRainTree.png' alt='Golden Rain Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h4>Bird of Paradise</h4>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/BirdofParadise.png' alt='Mexican Bird of Paradise Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h4>Texas Redbud</h4>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/redbud.jpg' alt='Texas Redbud Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h4>Tree of Heaven</h4>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Tree%20of%20Heaven.png' alt='Tree of Heaven in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
              </div>

   
</div>


<div className='fruit_trees_container'>
<h2>New Mexico Fruit Trees</h2>
      <div>
        <h3>Ornamental Fruit Trees</h3>
        <p>Many fruit trees have been bred to be ornamental, reducing or eliminating fruit production to avoid the mess and inconvenience of fallen fruit. These ornamental varieties still maintain their beautiful spring blooms, preserving the aesthetic appeal of their fruit-bearing counterparts. Trees like the Bradford Pear have been selectively cultivated to produce small, insignificant fruit, achieving the same goal of minimizing unwanted fruit production. 
        <br></br>
        Crabapples and dogwoods are also grouped into this category; while their fruits are often considered unsavory or inedible, they offer stunning spring blooms and provide ample shade, enhancing the aesthetic appeal of gardens and landscapes.</p>


    <div className='ornanmental_fruit_tree_container'>
    <div 
  className='ornamental_fruit_tree_example_each' 
  onClick={toggleOpearVisibility} 
  style={{ cursor: 'pointer' }}
>
  <h4>Ornamental Pears</h4>
  <img 
    className='o_tree_pic' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringpear2.jpg' alt='Ornamental Pear at Jericho Nursery in Albuquerque, New Mexico' />
  <div className={`tree_exerb ${isOpearVisible ? 'visible2' : 'hidden2'}`}>
    <h5>Bradford Pear</h5>
    <p>The Bradford Pear features abundant white blossoms in spring and brilliant red-orange foliage in fall, making it a standout ornamental tree.</p>
    <h5>Chanticleer Pear</h5>
    <p>Chanticleer Pear is a compact, upright tree with glossy green leaves, snowy spring blooms, and stunning late-season leaf colors.</p>
    <h5>Cleveland Select Pear</h5>
    <p>The Cleveland Select Pear offers a symmetrical shape, dazzling spring flowers, and vibrant purple-red foliage in autumn.</p>
  </div>
</div>
<div 
  className='ornamental_fruit_tree_example_each' 
  onClick={toggleCrabappleVisibility} 
  style={{ cursor: 'pointer' }}>
  <h4>Crabapples</h4>
  <img 
    className='o_tree_pic' 
    src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/crabapple.jpg' 
    alt='Crabapple at Jericho Nursery in Albuquerque, New Mexico' 
  />
  <div className={`tree_exerb ${isCrabappleVisible ? 'visible2' : 'hidden2'}`}>
    <h5>Prairie Fire Crabapple</h5>
    <p>Known for its striking deep pink blossoms in spring, the Prairie Fire crabapple offers a stunning display of color. Glossy red fruits persist into winter, while its foliage shifts from bronze-green in summer to rich red in fall, ensuring visual interest year-round.</p>
    <h5>Sugar Tyme Crabapple</h5>
    <p>With fragrant white flowers in spring and bright red fruits that linger into winter, the Sugar Tyme crabapple is both beautiful and versatile. Its disease-resistant foliage remains lush and green throughout summer, making it a low-maintenance favorite for any garden.</p>
    <h5>Centurion Crabapple</h5>
    <p>Featuring vibrant rosy-red blooms in spring, the Centurion crabapple adds charm with its upright shape and long-lasting red fruits. Its glossy green leaves and exceptional heat tolerance make it a perfect addition to warmer landscapes.</p>
  </div>
</div>

<div 
  className='ornamental_fruit_tree_example_each' 
  onClick={toggleOcherryVisibility} 
  style={{ cursor: 'pointer' }}
>
  <h4>Ornamental Cherry</h4>
  <img 
    className='o_tree_pic' 
    src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/FloweringCherry2.jpg' 
    alt='Flowering Cherry at Jericho Nursery in Albuquerque, New Mexico' 
  />

  <div className={`tree_exerb ${isOcherryVisible ? 'visible2' : 'hidden2'}`}>
    <h5>Kwanzan Cherry</h5>
    <p>The Kwanzan cherry dazzles with its double pink blossoms in spring, forming an elegant canopy of color. Rich golden-orange fall foliage adds warmth to the landscape before the tree enters dormancy.</p>
    <h5>Autumn Flowering Cherry</h5>
    <p>This ornamental cherry blooms twice a year, showcasing delicate pale pink flowers in both spring and fall. Its compact form and graceful branching make it an excellent choice for adding beauty to smaller gardens.</p>
    <h5>Okame Cherry</h5>
    <p>Bright pink blossoms emerge early in spring on the Okame cherry, creating a bold contrast against its dark bark. This compact, heat-tolerant tree is as resilient as it is ornamental, with a rounded form perfect for gardens of any size.</p>
  </div>
</div>

<div 
  className='ornamental_fruit_tree_example_each' 
  onClick={toggleSandCherryVisibility} 
  style={{ cursor: 'pointer' }}
>
  <h4>Sand Cherry</h4>
  <img 
    className='o_tree_pic' 
    src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/sandcherry.png' 
    alt='Sand Cherry at Jericho Nursery in Albuquerque, New Mexico' 
  />

  <div className={`tree_exerb ${isSandCherryVisible ? 'visible2' : 'hidden2'}`}>
    <h5>Purpleleaf Sand Cherry</h5>
    <p>Renowned for its deep purple foliage, the Purpleleaf Sand Cherry produces soft pink flowers in spring that create a striking contrast. This drought-tolerant tree maintains its vibrant color through summer, adding dramatic interest to any landscape.</p>
    <h5>Cistena Sand Cherry</h5>
    <p>The Cistena Sand Cherry features rich reddish-purple leaves and small, fragrant pink flowers in spring. Its compact size and drought tolerance make it an ideal choice for warm, sunny spaces.</p>
    <h5>Western Sand Cherry</h5>
    <p>Delicate white flowers cover the Western Sand Cherry in spring, followed by edible dark purple fruits in summer. Its hardy nature and unique foliage make it a standout ornamental tree or shrub.</p>
  </div>
</div>

<div 
  className='ornamental_fruit_tree_example_each' 
  onClick={toggleDogwoodVisibility} 
  style={{ cursor: 'pointer' }}
>
  <h4>Flowering Dogwood</h4>
  <img 
    className='o_tree_pic' 
    src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/Dogwood.jpg' 
    alt='Flowering Dogwood at Jericho Nursery in Albuquerque, New Mexico' 
  />

  <div className={`tree_exerb ${isDogwoodVisible ? 'visible2' : 'hidden2'}`}>
    <h5>Kousa Dogwood</h5>
    <p>The Kousa dogwood offers creamy white blooms in late spring and bright red berries in summer, adding texture and color to the garden. Its layered branching and mottled bark provide year-round interest.</p>
    <h5>Cherokee Brave Dogwood</h5>
    <p>Reddish-pink flowers with a soft white center brighten the Cherokee Brave dogwood in spring, while its glossy green leaves turn burgundy in fall. It’s both a stunning and resilient addition to the landscape.</p>
    <h5>Pagoda Dogwood</h5>
    <p>Graceful, tiered branches give the Pagoda dogwood its name, with creamy white flowers in spring and blue-black berries in summer. Its distinctive shape and vibrant foliage make it a true focal point.</p>
  </div>
</div>

<div 
  className='ornamental_fruit_tree_example_each' 
  onClick={toggleOplumVisibility} 
  style={{ cursor: 'pointer' }}
>
  <h4>Ornamental Plum</h4>
  <img 
    className='o_tree_pic' 
    src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringplum.png' 
    alt='Ornamental Plum at Jericho Nursery in Albuquerque, New Mexico' 
  />

  <div className={`tree_exerb ${isOplumVisible ? 'visible2' : 'hidden2'}`}>
    <h5>Thundercloud Plum</h5>
    <p>Deep purple foliage and pale pink flowers define the Thundercloud plum, creating a dramatic contrast in the landscape. This fast-growing ornamental tree thrives in sunny locations, adding bold color throughout the seasons.</p>
    <h5>Newport Plum</h5>
    <p>With light pink blossoms in spring and rich purple leaves through summer, the Newport plum is both elegant and hardy. Its compact size and striking appearance make it ideal for smaller gardens.</p>
    <h5>Crimson Pointe Plum</h5>
    <p>The Crimson Pointe plum grows in a narrow, columnar shape, perfect for vertical accents. Pale pink flowers in spring and dark purple foliage create a unique and sophisticated aesthetic.</p>
  </div>
</div>
    </div>


    


<div className='true_fruit_tree_container'>
<h3>Zone 7's True Fruit Trees</h3>
<p>These trees, of course, produce fruit. Although there are many varieties of each these kinds of fruit trees, it is more about the desired fruit than the kind of tree. Horticulturally we can stil of course help you with the correct tree to meet your needs, but suggest picking a kind of fruit you enjoy.</p>
<div className='fruit_tree_examples'>
      <div className='fruit_tree_example_each' onClick={togglePeachVisibility} style={{ cursor: 'pointer' }}>
        <h4>Peach</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/peach.jpg' 
             alt='Peach Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isPeachVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Redhaven</h5>
          <p>Redhaven peaches are known for their firm, sweet fruit and bright yellow skin with a red blush. It’s a great variety for canning, freezing, and fresh eating.</p>
          <h5>Elberta</h5>
          <p>Elberta peaches are large and flavorful, with a classic sweet-tart taste and a yellow color with a red blush. They are excellent for pies, jams, and fresh eating.</p>
          <h5>Contender</h5>
          <p>Contender peaches are hardy and produce juicy, sweet fruit with a slight tartness, perfect for fresh consumption or canning. They thrive in colder climates.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={toggleCherryVisibility} style={{ cursor: 'pointer' }}>
        <h4>Cherry</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/cherry.jpg' 
             alt='Cherry Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isCherryVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Bing</h5>
          <p>Bing cherries are sweet, dark red cherries with a firm texture, perfect for fresh eating, desserts, and preserving.</p>
          <h5>Rainier</h5>
          <p>Rainier cherries are yellow with a red blush and have a sweet, mild flavor. They are ideal for fresh eating and making jams.</p>
          <h5>Montmorency</h5>
          <p>Montmorency cherries are tart and perfect for pies, jams, and baking. Their bright red color makes them a standout in desserts.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={togglePlumVisibility} style={{ cursor: 'pointer' }}>
        <h4>Plum</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/plum.jpg' 
             alt='Plum Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isPlumVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Santa Rosa</h5>
          <p>Santa Rosa plums are sweet with a slightly tart edge, producing large, juicy fruit. They are perfect for fresh eating and making preserves.</p>
          <h5>Methley</h5>
          <p>Methley plums are early-season, producing sweet, round fruit with a reddish skin and firm texture.</p>
          <h5>Stanley</h5>
          <p>Stanley plums are purple, oval-shaped, and sweet, often used for prunes or fresh consumption.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={toggleAppleVisibility} style={{ cursor: 'pointer' }}>
        <h4>Apple</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/apple.jpg' 
             alt='Apple Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isAppleVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Fuji</h5>
          <p>Fuji apples are large, crisp, and sweet with a slightly floral flavor. They are excellent for eating fresh and in salads.</p>
          <h5>Honeycrisp</h5>
          <p>Honeycrisp apples are known for their sweet and juicy flavor, making them a favorite for fresh eating and baking.</p>
          <h5>Granny Smith</h5>
          <p>Granny Smith apples are tart and firm, making them ideal for baking, pies, and cooking.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={togglePearVisibility} style={{ cursor: 'pointer' }}>
        <h4>Pear</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/pear.jpg' 
             alt='Pear Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isPearVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Bartlett</h5>
          <p>Bartlett pears are known for their sweet, juicy texture and are a classic variety for fresh eating, canning, and making jams.</p>
          <h5>D'Anjou</h5>
          <p>D'Anjou pears are sweet and firm, perfect for eating fresh, or used in baking and salads.</p>
          <h5>Kieffer</h5>
          <p>Kieffer pears have a crisp texture and are excellent for canning, preserving, and making pear butter.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={toggleFigVisibility} style={{ cursor: 'pointer' }}>
        <h4>Fig</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/fig.jpg' 
             alt='Fig Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isFigVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Brown Turkey</h5>
          <p>Brown Turkey figs produce large, sweet fruit with a brownish-purple skin, excellent for fresh eating or drying.</p>
          <h5>Celeste</h5>
          <p>Celeste figs are small and sweet, known for their rich, deep flavor and ideal for preserving or drying.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={togglePomVisibility} style={{ cursor: 'pointer' }}>
        <h4>Pomegranates</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/pom.jpg' 
             alt='Pomegranates at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isPomVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Wonderful</h5>
          <p>Wonderful pomegranates are large, with deep red fruit and sweet-tart seeds, perfect for juicing or eating fresh.</p>
          <h5>Russian 26</h5>
          <p>Russian 26 pomegranates are hardy, producing smaller but flavorful fruit ideal for colder climates.</p>
        </div>
      </div>

      <div className='fruit_tree_example_each' onClick={toggleNectarineVisibility} style={{ cursor: 'pointer' }}>
        <h4>Nectarines</h4>
        <img className='tree_example_circle_image' 
             src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/nectarine.jpg' 
             alt='Nectarine Trees at Jericho Nursery in Albuquerque, New Mexico'/>
        <div className={`tree_exerb ${isNectarineVisible ? 'visible2' : 'hidden2'}`}>
          <h5>Fantasia</h5>
          <p>Fantasia nectarines are large, sweet, and perfect for fresh eating or making preserves.</p>
          <h5>Arctic Star</h5>
          <p>Arctic Star nectarines are sweet and juicy with a white flesh, ideal for colder climates.</p>
        </div>
      </div>
    </div>
</div>
</div>
</div>



<div className='pine_trees_container'>
  <h2>New Mexico Conifers</h2>
    <div className='tree_example_each'>
    <h3>Pine</h3>
    <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Pinon.jpg'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='tree_example_each'>
    <h3>Juniper</h3>
    <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Juniper.jpg' alt='Juniper at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='tree_example_each'>
    <h3>Spruce</h3>
    <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/blueSpruce.jpg' alt='Spruce at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='tree_example_each'>
    <h3>Cypress</h3>
    <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Cypress.jpg' alt='Cypress at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='tree_example_each'>
    <h3>Fir</h3>
    <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/conifer/Fir.jpg' alt='Fir at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
  </div>






</div>



    <div className='trees_body_bottom_text'>
      <h2>Awh Nuts!</h2>
      <p>Nut trees thrive in Albuquerque and throughout New Mexico due to the state's unique climate, which offers long, sunny days and moderate temperatures. The dry air and well-drained soil in the region create ideal conditions for growing various types of nut trees, such as pistachios, almonds, and walnuts. These trees are well-suited to New Mexico’s arid environment, as they require minimal rainfall once established and are able to withstand periods of drought. Additionally, the warm summer temperatures and cool nights help enhance nut production. South of Los Lunas, large nut farms have become a significant part of the local agriculture industry, particularly known for their pistachio orchards, contributing to the state's growing reputation as a producer of high-quality nuts.</p>
      <br></br>
      <p>Pinions, the seeds of the Piñon pine, are another beloved and iconic nut in New Mexico. These small, flavorful nuts are a staple of the state's culinary traditions and are highly coveted for their rich, earthy taste and crunchy texture. Piñon trees thrive in the state's high-altitude regions, where they grow in rocky, dry soils, often in the foothills of the mountains. The unique combination of hot summers and cold winters, along with the dry climate, creates the perfect environment for these trees to flourish. Every autumn, locals eagerly harvest piñon nuts, which are used in everything from traditional dishes to modern recipes. Because of their scarcity and the labor-intensive process of gathering them, piñons are considered a regional delicacy, often sold at local markets and festivals. The deep cultural connection to piñons makes them a symbol of New Mexico's heritage, and their harvest is an eagerly anticipated event for many in the state.</p>
    </div>
    <h3>Pecan</h3>
    <h3>Almond</h3>
    <h3>Pistachio</h3>
    <h3>Pinion</h3>


  </div>



</div>

        
      
    </div>
  )
}



export default Trees

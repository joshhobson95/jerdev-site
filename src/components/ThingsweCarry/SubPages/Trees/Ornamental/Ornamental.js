import React, { useState } from 'react';
import './Ornamental.css'

function Ornamental() {

  const [isOpearVisible, setIsOpearVisible] = useState(false);
  const [isCrabappleVisible, setIsCrabappleVisible] = useState(false);
  const [isOcherryVisible, setIsOcherryVisible] = useState(false);
  const [isSandCherryVisible, setIsSandCherryVisible] = useState(false);
  const [isDogwoodVisible, setIsDogwoodVisible] = useState(false);
  const [isOplumVisible, setIsOplumVisible] = useState(false);


   const toggleOpearVisibility = () => {setIsOpearVisible(!isOpearVisible);};
    const toggleCrabappleVisibility = () => setIsCrabappleVisible(!isCrabappleVisible);
    const toggleOcherryVisibility = () => setIsOcherryVisible(!isOcherryVisible);
    const toggleSandCherryVisibility = () => setIsSandCherryVisible(!isSandCherryVisible);
    const toggleDogwoodVisibility = () => setIsDogwoodVisible(!isDogwoodVisible);
    const toggleOplumVisibility = () => setIsOplumVisible(!isOplumVisible);





  return (
<div className='Ornamental'>
    <div className='trees_welcome'>
        <h1>New Mexico Ornamental Trees</h1>
    </div>



        <div className='ornanmental_tree_container'>
            <div className='ornamental_top_text'>
                <h2>Ornamental 'Fruit' Trees Header</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue. </p>
            </div>

        <div className='tree_examples'>
        <div 
        className='ornamental_tree_example_each' 
        onClick={toggleOpearVisibility} 
        style={{ cursor: 'pointer' }}
        >
            <h2>Ornamental Pears</h2>
            <img 
                className='o_tree_pic' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringpear2.jpg' alt='Ornamental Pear at Jericho Nursery in Albuquerque, New Mexico' />
            <div className={`tree_exerb ${isOpearVisible ? 'visible2' : 'hidden2'}`}>
                <h3>Bradford Pear</h3>
                <p>The Bradford Pear features abundant white blossoms in spring and brilliant red-orange foliage in fall, making it a standout ornamental tree.</p>
                <h3>Chanticleer Pear</h3>
                <p>Chanticleer Pear is a compact, upright tree with glossy green leaves, snowy spring blooms, and stunning late-season leaf colors.</p>
                <h3>Cleveland Select Pear</h3>
                <p>The Cleveland Select Pear offers a symmetrical shape, dazzling spring flowers, and vibrant purple-red foliage in autumn.</p>
            </div>
        </div>
            <div 
            className='ornamental_tree_example_each' 
            onClick={toggleCrabappleVisibility} 
            style={{ cursor: 'pointer' }}>
            <h2>Crabapples</h2>
            <img 
                className='o_tree_pic' 
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/crabapple.jpg' 
                alt='Crabapple at Jericho Nursery in Albuquerque, New Mexico' 
            />
            <div className={`tree_exerb ${isCrabappleVisible ? 'visible2' : 'hidden2'}`}>
                <h3>Prairie Fire Crabapple</h3>
                <p>Known for its striking deep pink blossoms in spring, the Prairie Fire crabapple offers a stunning display of color. Glossy red fruits persist into winter, while its foliage shifts from bronze-green in summer to rich red in fall, ensuring visual interest year-round.</p>
                <h3>Sugar Tyme Crabapple</h3>
                <p>With fragrant white flowers in spring and bright red fruits that linger into winter, the Sugar Tyme crabapple is both beautiful and versatile. Its disease-resistant foliage remains lush and green throughout summer, making it a low-maintenance favorite for any garden.</p>
                <h3>Centurion Crabapple</h3>
                <p>Featuring vibrant rosy-red blooms in spring, the Centurion crabapple adds charm with its upright shape and long-lasting red fruits. Its glossy green leaves and exceptional heat tolerance make it a perfect addition to warmer landscapes.</p>
            </div>
            </div>

            <div 
            className='ornamental_tree_example_each' 
            onClick={toggleOcherryVisibility} 
            style={{ cursor: 'pointer' }}
            >
            <h2>Ornamental Cherry</h2>
            <img 
                className='o_tree_pic' 
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/FloweringCherry2.jpg' 
                alt='Flowering Cherry at Jericho Nursery in Albuquerque, New Mexico' 
            />

            <div className={`tree_exerb ${isOcherryVisible ? 'visible2' : 'hidden2'}`}>
                <h3>Kwanzan Cherry</h3>
                <p>The Kwanzan cherry dazzles with its double pink blossoms in spring, forming an elegant canopy of color. Rich golden-orange fall foliage adds warmth to the landscape before the tree enters dormancy.</p>
                <h3>Autumn Flowering Cherry</h3>
                <p>This ornamental cherry blooms twice a year, showcasing delicate pale pink flowers in both spring and fall. Its compact form and graceful branching make it an excellent choice for adding beauty to smaller gardens.</p>
                <h3>Okame Cherry</h3>
                <p>Bright pink blossoms emerge early in spring on the Okame cherry, creating a bold contrast against its dark bark. This compact, heat-tolerant tree is as resilient as it is ornamental, with a rounded form perfect for gardens of any size.</p>
            </div>
            </div>

            <div 
            className='ornamental_tree_example_each' 
            onClick={toggleSandCherryVisibility} 
            style={{ cursor: 'pointer' }}
            >
            <h2>Sand Cherry</h2>
            <img 
                className='o_tree_pic' 
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/sandcherry.png' 
                alt='Sand Cherry at Jericho Nursery in Albuquerque, New Mexico' 
            />

            <div className={`tree_exerb ${isSandCherryVisible ? 'visible2' : 'hidden2'}`}>
                <h3>Purpleleaf Sand Cherry</h3>
                <p>Renowned for its deep purple foliage, the Purpleleaf Sand Cherry produces soft pink flowers in spring that create a striking contrast. This drought-tolerant tree maintains its vibrant color through summer, adding dramatic interest to any landscape.</p>
                <h3>Cistena Sand Cherry</h3>
                <p>The Cistena Sand Cherry features rich reddish-purple leaves and small, fragrant pink flowers in spring. Its compact size and drought tolerance make it an ideal choice for warm, sunny spaces.</p>
                <h3>Western Sand Cherry</h3>
                <p>Delicate white flowers cover the Western Sand Cherry in spring, followed by edible dark purple fruits in summer. Its hardy nature and unique foliage make it a standout ornamental tree or shrub.</p>
            </div>
            </div>

            <div 
            className='ornamental_tree_example_each' 
            onClick={toggleDogwoodVisibility} 
            style={{ cursor: 'pointer' }}
            >
            <h2>Flowering Dogwood</h2>
            <img 
                className='o_tree_pic' 
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/Dogwood.jpg' 
                alt='Flowering Dogwood at Jericho Nursery in Albuquerque, New Mexico' 
            />

            <div className={`tree_exerb ${isDogwoodVisible ? 'visible2' : 'hidden2'}`}>
                <h3>Kousa Dogwood</h3>
                <p>The Kousa dogwood offers creamy white blooms in late spring and bright red berries in summer, adding texture and color to the garden. Its layered branching and mottled bark provide year-round interest.</p>
                <h3>Cherokee Brave Dogwood</h3>
                <p>Reddish-pink flowers with a soft white center brighten the Cherokee Brave dogwood in spring, while its glossy green leaves turn burgundy in fall. It’s both a stunning and resilient addition to the landscape.</p>
                <h3>Pagoda Dogwood</h3>
                <p>Graceful, tiered branches give the Pagoda dogwood its name, with creamy white flowers in spring and blue-black berries in summer. Its distinctive shape and vibrant foliage make it a true focal point.</p>
            </div>
            </div>

            <div 
            className='ornamental_tree_example_each' 
            onClick={toggleOplumVisibility} 
            style={{ cursor: 'pointer' }}
            >
            <h2>Ornamental Plum</h2>
            <img 
                className='o_tree_pic' 
                src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringplum.png' 
                alt='Ornamental Plum at Jericho Nursery in Albuquerque, New Mexico' 
            />

            <div className={`tree_exerb ${isOplumVisible ? 'visible2' : 'hidden2'}`}>
                <h3>Thundercloud Plum</h3>
                <p>Deep purple foliage and pale pink flowers define the Thundercloud plum, creating a dramatic contrast in the landscape. This fast-growing ornamental tree thrives in sunny locations, adding bold color throughout the seasons.</p>
                <h3>Newport Plum</h3>
                <p>With light pink blossoms in spring and rich purple leaves through summer, the Newport plum is both elegant and hardy. Its compact size and striking appearance make it ideal for smaller gardens.</p>
                <h3>Crimson Pointe Plum</h3>
                <p>The Crimson Pointe plum grows in a narrow, columnar shape, perfect for vertical accents. Pale pink flowers in spring and dark purple foliage create a unique and sophisticated aesthetic.</p>
            </div>
            </div>


            <div className='other_trees'>
                <h1>More Zone 7 Ornamental Trees</h1>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat turpis eget nisi gravida mollis. Mauris tempor nunc sed justo pretium consequat. Integer consectetur id dolor nec semper. Cras in mauris dui. Duis condimentum, eros eu convallis sagittis, massa est mattis neque, sed fringilla nisi dolor sed lacus. Fusce a maximus massa. Sed risus risus, hendrerit ut finibus nec, mattis at nunc. Sed sagittis eleifend erat sit amet suscipit. Ut aliquam vel mi sit amet elementum. Fusce vitae dignissim nunc, vitae iaculis risus. Suspendisse id metus dictum, condimentum elit sed, porta augue. Suspendisse congue arcu vitae eros mattis, nec sodales tortor tristique. Etiam sed finibus elit. </p>              
                <div>
                  <h2>Bird of Paradise</h2>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/BirdofParadise.png' alt='Mexican Bird of Paradise Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
                <div>
                  <h2>Oklahoma Redbud</h2>
                  <img className='tree_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/redbud.jpg' alt='Texas Redbud Tree in Albuquerque New Mexico sold at Jericho Nursery' />
                </div>
              </div>
         </div> 



    </div>      
</div>
  )
}

export default Ornamental

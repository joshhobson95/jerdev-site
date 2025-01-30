import React, { useState } from 'react';
import './Fruit.css'

function Fruit() {

  const [isPeachVisible, setIsPeachVisible] = useState(false);
  const [isCherryVisible, setIsCherryVisible] = useState(false);
  const [isPlumVisible, setIsPlumVisible] = useState(false);
  const [isAppleVisible, setIsAppleVisible] = useState(false);
  const [isPearVisible, setIsPearVisible] = useState(false);
  const [isFigVisible, setIsFigVisible] = useState(false);
  const [isPomVisible, setIsPomVisible] = useState(false);
  const [isNectarineVisible, setIsNectarineVisible] = useState(false);

    const togglePeachVisibility = () => {setIsPeachVisible(!isPeachVisible);};
    const toggleCherryVisibility = () => {setIsCherryVisible(!isCherryVisible);};
    const togglePlumVisibility = () => {setIsPlumVisible(!isPlumVisible);};
    const toggleAppleVisibility = () => {setIsAppleVisible(!isAppleVisible);};
    const togglePearVisibility = () => {setIsPearVisible(!isPearVisible);};
    const toggleFigVisibility = () => {setIsFigVisible(!isFigVisible);};
    const togglePomVisibility = () => {setIsPomVisible(!isPomVisible);};
    const toggleNectarineVisibility = () => {setIsNectarineVisible(!isNectarineVisible);};





  return (
<div className='Fruit'>
    <div className='trees_welcome'>
    <h1>New Mexico Fruit Trees</h1>
  </div>

        
    <div className='fruit_tree_container'>
        <div className='fruit_top_text'> 
            <h2>Best Fruit Trees for New Mexico</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
        </div>
    <div className='tree_examples'>
            <div className='fruit_tree_example_each' onClick={toggleAppleVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Apple</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/apple.jpg' 
                        alt='Apple Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isAppleVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Fuji</h3>
                    <p>Fuji apples are large, crisp, and sweet with a slightly floral flavor. They are excellent for eating fresh and in salads.</p>
                    <h3>Honeycrisp</h3>
                    <p>Honeycrisp apples are known for their sweet and juicy flavor, making them a favorite for fresh eating and baking.</p>
                    <h3>Granny Smith</h3>
                    <p>Granny Smith apples are tart and firm, making them ideal for baking, pies, and cooking.</p>
                    </div>
                </div>

            <div className='fruit_tree_example_each' onClick={toggleCherryVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Cherry</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/cherry.jpg' 
                        alt='Cherry Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isCherryVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Bing</h3>
                    <p>Bing cherries are sweet, dark red cherries with a firm texture, perfect for fresh eating, desserts, and preserving.</p>
                    <h3>Rainier</h3>
                    <p>Rainier cherries are yellow with a red blush and have a sweet, mild flavor. They are ideal for fresh eating and making jams.</p>
                    <h3>Montmorency</h3>
                    <p>Montmorency cherries are tart and perfect for pies, jams, and baking. Their bright red color makes them a standout in desserts.</p>
                    </div>
                </div>

                <div className='fruit_tree_example_each' onClick={togglePeachVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Peach</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/peach.jpg' 
                        alt='Peach Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isPeachVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Redhaven</h3>
                    <p>Redhaven peaches are known for their firm, sweet fruit and bright yellow skin with a red blush. It’s a great variety for canning, freezing, and fresh eating.</p>
                    <h3>Elberta</h3>
                    <p>Elberta peaches are large and flavorful, with a classic sweet-tart taste and a yellow color with a red blush. They are excellent for pies, jams, and fresh eating.</p>
                    <h3>Contender</h3>
                    <p>Contender peaches are hardy and produce juicy, sweet fruit with a slight tartness, perfect for fresh consumption or canning. They thrive in colder climates.</p>
                    </div>
                </div>

                <div className='fruit_tree_example_each' onClick={toggleNectarineVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Nectarines</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/nectarine.jpg' 
                        alt='Nectarine Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isNectarineVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Fantasia</h3>
                    <p>Fantasia nectarines are large, sweet, and perfect for fresh eating or making preserves.</p>
                    <h3>Arctic Star</h3>
                    <p>Arctic Star nectarines are sweet and juicy with a white flesh, ideal for colder climates.</p>
                    </div>
                </div>

                <div className='fruit_tree_example_each' onClick={toggleAppleVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Apricot</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/apple.jpg' 
                        alt='Apple Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isAppleVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Fuji</h3>
                    <p>Fuji apples are large, crisp, and sweet with a slightly floral flavor. They are excellent for eating fresh and in salads.</p>
                    <h3>Honeycrisp</h3>
                    <p>Honeycrisp apples are known for their sweet and juicy flavor, making them a favorite for fresh eating and baking.</p>
                    <h3>Granny Smith</h3>
                    <p>Granny Smith apples are tart and firm, making them ideal for baking, pies, and cooking.</p>
                    </div>
                </div>

 

                <div className='fruit_tree_example_each' onClick={togglePlumVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Plum</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/plum.jpg' 
                        alt='Plum Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isPlumVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Santa Rosa</h3>
                    <p>Santa Rosa plums are sweet with a slightly tart edge, producing large, juicy fruit. They are perfect for fresh eating and making preserves.</p>
                    <h3>Methley</h3>
                    <p>Methley plums are early-season, producing sweet, round fruit with a reddish skin and firm texture.</p>
                    <h3>Stanley</h3>
                    <p>Stanley plums are purple, oval-shaped, and sweet, often used for prunes or fresh consumption.</p>
                    </div>
                </div>


                <div className='fruit_tree_example_each' onClick={togglePearVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Pear</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/pear.jpg' 
                        alt='Pear Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isPearVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Bartlett</h3>
                    <p>Bartlett pears are known for their sweet, juicy texture and are a classic variety for fresh eating, canning, and making jams.</p>
                    <h3>D'Anjou</h3>
                    <p>D'Anjou pears are sweet and firm, perfect for eating fresh, or used in baking and salads.</p>
                    <h3>Kieffer</h3>
                    <p>Kieffer pears have a crisp texture and are excellent for canning, preserving, and making pear butter.</p>
                    </div>
                </div>

                <div className='fruit_tree_example_each' onClick={toggleFigVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Fig</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/fig.jpg' 
                        alt='Fig Trees at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isFigVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Brown Turkey</h3>
                    <p>Brown Turkey figs produce large, sweet fruit with a brownish-purple skin, excellent for fresh eating or drying.</p>
                    <h3>Celeste</h3>
                    <p>Celeste figs are small and sweet, known for their rich, deep flavor and ideal for preserving or drying.</p>
                    </div>
                </div>

                <div className='fruit_tree_example_each' onClick={togglePomVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Pomegranates</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/pom.jpg' 
                        alt='Pomegranates at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isPomVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Wonderful</h3>
                    <p>Wonderful pomegranates are large, with deep red fruit and sweet-tart seeds, perfect for juicing or eating fresh.</p>
                    <h3>Russian 26</h3>
                    <p>Russian 26 pomegranates are hardy, producing smaller but flavorful fruit ideal for colder climates.</p>
                    </div>
                </div>

    
            <div className='other_trees'>
                <h1>Nut Trees</h1>
                <p>Nut trees thrive in Albuquerque and throughout New Mexico due to the state's unique climate, which offers long, sunny days and moderate temperatures. The dry air and well-drained soil in the region create ideal conditions for growing various types of nut trees, such as pistachios, almonds, and walnuts. These trees are well-suited to New Mexico’s arid environment, as they require minimal rainfall once established and are able to withstand periods of drought. Additionally, the warm summer temperatures and cool nights help enhance nut production. South of Los Lunas, large nut farms have become a significant part of the local agriculture industry, particularly known for their pistachio orchards, contributing to the state's growing reputation as a producer of high-quality nuts.</p>
                <br></br>
                <p>Pinions, the seeds of the Piñon pine, are another beloved and iconic nut in New Mexico. These small, flavorful nuts are a staple of the state's culinary traditions and are highly coveted for their rich, earthy taste and crunchy texture. Piñon trees thrive in the state's high-altitude regions, where they grow in rocky, dry soils, often in the foothills of the mountains. The unique combination of hot summers and cold winters, along with the dry climate, creates the perfect environment for these trees to flourish. Every autumn, locals eagerly harvest piñon nuts, which are used in everything from traditional dishes to modern recipes. Because of their scarcity and the labor-intensive process of gathering them, piñons are considered a regional delicacy, often sold at local markets and festivals. The deep cultural connection to piñons makes them a symbol of New Mexico's heritage, and their harvest is an eagerly anticipated event for many in the state.</p>
      
                <div className='fruit_tree_example_each' onClick={togglePomVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Almonds</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/almond.jpg' 
                        alt='Pomegranates at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isPomVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Wonderful</h3>
                    <p>Wonderful pomegranates are large, with deep red fruit and sweet-tart seeds, perfect for juicing or eating fresh.</p>
                    <h3>Russian 26</h3>
                    <p>Russian 26 pomegranates are hardy, producing smaller but flavorful fruit ideal for colder climates.</p>
                    </div>
                </div>
                <div className='fruit_tree_example_each' onClick={togglePomVisibility} style={{ cursor: 'pointer' }}>
                    <h2>Pecans</h2>
                    <img className='tree_example_image' 
                        src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/pecan.jpg' 
                        alt='Pomegranates at Jericho Nursery in Albuquerque, New Mexico'/>
                    <div className={`tree_exerb ${isPomVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Wonderful</h3>
                    <p>Wonderful pomegranates are large, with deep red fruit and sweet-tart seeds, perfect for juicing or eating fresh.</p>
                    <h3>Russian 26</h3>
                    <p>Russian 26 pomegranates are hardy, producing smaller but flavorful fruit ideal for colder climates.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Fruit

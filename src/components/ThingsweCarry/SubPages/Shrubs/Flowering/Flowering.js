import React, {useState} from 'react'
import './Flowering.css'


function Flowering() {

   const [isButterflyBushVisible, setIsButterflyBushVisible] = useState(false);
    const [isIndianHawthorneVisible, setIsIndianHawthorneVisible] = useState(false);
    const [isBroomsVisible, setIsBroomsVisible] = useState(false);
    const [isLilacVisible, setIsLilacVisible] = useState(false);
    const [isCrapeMyrtleVisible, setIsCrapeMyrtleVisible] = useState(false);
    const [isRoseOfSharonVisible, setIsRoseOfSharonVisible] = useState(false);
    const [isForsythiaVisible, setIsForsythiaVisible] = useState(false);
    const [isPotentillaVisible, setIsPotentillaVisible] = useState(false);

    const toggleButterflyBushVisibility = () => { setIsButterflyBushVisible(!isButterflyBushVisible); };
    const toggleIndianHawthroneVisibility = () => { setIsIndianHawthorneVisible(!isIndianHawthorneVisible); };
    const toggleBroomsVisibility = () => { setIsBroomsVisible(!isBroomsVisible); };
    const toggleLilacVisibility = () => { setIsLilacVisible(!isLilacVisible); };
    const toggleCrapeMyrtleVisibility = () => { setIsCrapeMyrtleVisible(!isCrapeMyrtleVisible); };
    const toggleRoseOfSharonVisibility = () => { setIsRoseOfSharonVisible(!isRoseOfSharonVisible); };
    const toggleForsythiaVisibility = () => { setIsForsythiaVisible(!isForsythiaVisible); };
    const togglePotentillaVisibility = () => { setIsPotentillaVisible(!isPotentillaVisible); };





  return (
    <div className='Flowering'> 

      <div className='shrubs_welcome'>
      <h1>Flowering Shrubs</h1>
      </div>

    <div className='flowering_shrub_container'>
      <div className='flowering_top_text'> 
              <h2>Bring the Bloom</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nunc sem. Ut rhoncus tempor magna a ultricies. Nulla facilisi. Nullam fermentum enim quam, sed porttitor mauris ultrices ut. Sed vulputate arcu id suscipit viverra. Vivamus sagittis ligula vitae volutpat blandit. Praesent sagittis felis eu pulvinar fringilla. Ut hendrerit lobortis sapien eget egestas. Nunc varius bibendum consectetur. In egestas nulla a magna condimentum, ornare bibendum ex finibus. Cras commodo leo egestas nisl molestie, vel congue elit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut gravida justo. Vestibulum vulputate urna eu tortor ultrices gravida. Praesent vel mi ligula. Sed in nisl viverra, convallis nisi ac, luctus augue.</p>
          </div>
      <div className='flowering_examples'>          
            <div className='flowering_example_each' onClick={toggleButterflyBushVisibility} style={{ cursor: 'pointer' }}>
                <h2>Butterfly Bush</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/butterflybush.jpg'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`flowering_exerb ${isButterflyBushVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Black Knight (Purple)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Miss Molly (Pink)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Pugster Blue (Blue)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div>

              <div className='flowering_example_each' onClick={toggleIndianHawthroneVisibility} style={{ cursor: 'pointer' }}>
                <h2>Indian Hawthorne</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/IndianHawthorne.png'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`flowering_exerb ${isIndianHawthorneVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>'Spring View' Indian Hawthorn</h3>
                    <p>This variety is compact and low-growing, making it ideal for smaller spaces. It produces white or pale pink flowers in the spring and is heat and drought-tolerant, which suits Albuquerque's climate.</p>
                    <h3>'Rose' Indian Hawthorn</h3>
                    <p>With vibrant, deep-pink flowers and glossy foliage, this variety is known for its hardiness and resistance to drought. It's a good choice for full sun and can handle the hot, dry summers of Albuquerque.</p>
                    <h3>'Blue Mist' Indian Hawthorn</h3>
                    <p>A slightly larger variety, 'Blue Mist' has blue-green foliage and clusters of small pink flowers. It's very hardy in warm climates and drought-tolerant, making it well-suited to Albuquerque's conditions.</p>
                 </div>
              </div> 

              <div className='flowering_example_each' onClick={togglePotentillaVisibility} style={{ cursor: 'pointer' }}>
                <h2>Potentilla</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/potentilla.jpg'/>
                <div className={`flowering_exerb ${isPotentillaVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Potentilla fruticosa ‘Goldfinger’ </h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Potentilla fruticosa ‘Pink Beauty’</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Potentilla fruticosa 'Red Ace'</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div> 

                 <div className='flowering_example_each' onClick={toggleBroomsVisibility} style={{ cursor: 'pointer' }}>
                <h2>Brooms</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/SpanishBroom.png'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`flowering_exerb ${isBroomsVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Citrus' Spanish Broom</h3>
                    <p>With striking, bright yellow flowers, 'Citrus' adds a pop of color to your landscape. It thrives in hot, dry climates and can handle the heat and minimal water requirements typical of Albuquerque.</p>
                    <h3>'Juno' Spanish Broom</h3>
                    <p>Another yellow-flowered variety, 'Juno' is compact and vigorous, making it great for smaller spaces. It can tolerate the intense sun and dry conditions, making it suitable for desert gardens.</p>
                    <h3>'Red-Hot' Scottish Broom’</h3>
                    <p>Scottish? Technically a different genus</p>
                 </div>
              </div> 

              <div className='flowering_example_each' onClick={toggleLilacVisibility} style={{ cursor: 'pointer' }}>
                <h2>Lilac</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/lilac.jpg'alt='Pinion at Jericho Nursery in Albuquerque, New Mexico'/>
                <div className={`flowering_exerb ${isLilacVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Miss Kim Lilac (Syringa patula 'Miss Kim')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Common Purple Lilac (Syringa vulgaris)</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>French Perfume Lilac (Syringa x hyacinthiflora 'French Perfume')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div> 

              <div className='flowering_example_each' onClick={toggleCrapeMyrtleVisibility} style={{ cursor: 'pointer' }}>
                <h2>Crape Myrtle</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/crapemyrtle.jpg'/>
                <div className={`flowering_exerb ${isCrapeMyrtleVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Tuscarora Crape Myrtle (Lagerstroemia indica 'Tuscarora')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Natchez Crape Myrtle (Lagerstroemia indica 'Natchez')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>Muskogee Crape Myrtle (Lagerstroemia indica 'Muskogee')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div> 

              <div className='flowering_example_each' onClick={toggleRoseOfSharonVisibility} style={{ cursor: 'pointer' }}>
                <h2>Rose of Sharon</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/roseofsharon.jpg'/>
                <div className={`flowering_exerb ${isRoseOfSharonVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>Blue Chiffon® Rose of Sharon (Hibiscus syriacus 'Blue Chiffon')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3> Lavender Chiffon® Rose of Sharon (Hibiscus syriacus 'Lavender Chiffon')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3> Double Peach Rose of Sharon (Hibiscus syriacus 'Double Peach')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div> 

              <div className='flowering_example_each' onClick={toggleForsythiaVisibility} style={{ cursor: 'pointer' }}>
                <h2>Forsythia</h2>
                <img className='flowering_example_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flowering/forsythia.jpg'/>
                <div className={`flowering_exerb ${isForsythiaVisible ? 'visible2' : 'hidden2'}`}>
                    <h3>‘Lynwood Gold’ Forsythia (Forsythia x intermedia 'Lynwood Gold')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>‘Spring Glory’ Forsythia (Forsythia x intermedia 'Spring Glory')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                    <h3>‘Northern Gold’ Forsythia (Forsythia x intermedia 'Northern Gold')</h3>
                    <p>Quisque vulputate, eros a finibus commodo, felis libero interdum risus, vel efficitur lacus ex id elit. Praesent vel tincidunt elit, in sagittis eros. Curabitur vel dapibus magna, ut elementum ex. Aenean nec augue sit amet arcu bibendum accumsan. Nullam commodo tortor nec tortor rutrum, nec placerat enim tristique. Morbi vitae leo ac arcu tempus volutpat non vel ipsum. Ut vehicula velit quis velit congue, id elementum massa viverra.</p>
                 </div>
              </div> 

         
              
              


      </div>
  </div>      
</div>
  )
}

export default Flowering

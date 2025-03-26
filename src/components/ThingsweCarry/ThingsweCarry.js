import React from 'react'
import './ThingsweCarry.css'
import { NavLink } from 'react-router-dom'


function ThingsweCarry() {
  return (
    <div className="TypesofPlants">
    <div className='top_welcome'>
    <h1>Plant Catalouge</h1>
<p>Discover a wide selection of plants perfect for New Mexico gardens</p>
</div>

<div className='top_body_main'>


<NavLink to='/annuals'>
  <div className='plant_category'>
    <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/annuals.jpg' alt='Annual plants available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className='plant_text'>
     <h3>Annuals</h3>
      <p>From sunflowers to marigolds, annuals are plants that grow, bloom, and complete their life cycle in just one season. Their vibrant colors bring life to your garden each year, but remember, you'll need to replant them to enjoy their beauty again next season. </p>
    </div>
  </div>
</NavLink>

<NavLink to='/perennials'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Lavendar.jpg' alt='Perrenial plants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_text'>
     <h3>Perennials</h3>
      <p>Perennials are plants that live for more than two years, returning each season with new growth. Unlike annuals, they don’t need to be replanted every year. Popular perennials in Albuquerque include lavender and echinacea, which thrive in the local climate, bringing enduring beauty to your garden year after year. </p>
    </div>
  </div>
</NavLink>

<NavLink to='/roses'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/roses.jpg' alt='Roses available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_text'>
     <h3>Roses</h3>
      <p>Roses are cherished perennials, known for their beautiful blooms and fragrance. They thrive in Albuquerque’s dry climate, with varieties like the Knock Out rose. We receive over 50 varieties from Week's Roses around March to April, offering plenty of options for any garden.</p>
    </div>
  </div>
</NavLink>

<NavLink to='/trees'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Tree.jpg' alt='Shade and Fruit Trees available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_text'>
     <h3>Trees</h3>
      <p>Trees are essential for creating shade, helping to keep your yard cooler and providing protection from Albuquerque’s intense sun. They add beauty and comfort to any landscape. At Jericho Nursery, we offer a wide variety of trees, including fruit trees, perfect for bringing both shade and fresh produce to your garden. </p>
    </div>
  </div>
</NavLink>

<NavLink to='/shrubs'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/shrub.jpg'alt='Shrubs available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className='plant_text'>
     <h3>Shrubs</h3>
      <p>Shrubs are versatile plants that add structure and greenery to your landscape. They can provide privacy, act as natural borders, and enhance the beauty of your garden. One popular choice is Red Tip Photinia, known for its vibrant red foliage in spring that gradually turns green as the season progresses. This evergreen shrub grows quickly, making it perfect for creating natural privacy screens or hedges.</p>
    </div>
  </div>
</NavLink>
<NavLink to='/vines'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Vines/trumpetVine.jpg' alt='Vines available at Jericho Nursery in Albuquerque, New Mexico' />
    </div>
    <div className='plant_text'>
     <h3>Vines</h3>
      <p>Explore all the extras at Jericho Nursery beyond just plants! Discover our extensive selection of pottery and unique yard art to add charm and character to your outdoor space. Transform your landscape with our premium flagstone and boulders, perfect for accenting your new trees and shrubs. Have questions about pest problems? Our experts are here to help you find the right pesticide, herbicide, or fungicide to meet your specific needs. And that's just the beginning – there's so much more waiting for you at Jericho Nursery!</p>
    </div>
  </div>
</NavLink>

<NavLink to='/xeric'>
  <div className='plant_category'>
  <div className='plant_image_container'>
    <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/xeric.jpg' alt='Xeric plants available at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_text'>
     <h3>Xeric Plants</h3>
      <p>Xeric plants are ideal for water-wise gardening, thriving in dry, low-water conditions. These hardy plants are well-suited for Albuquerque’s hot, arid climate and require minimal irrigation once established. At Jericho Nursery, we offer a variety of xeric plants, including succulents and drought-tolerant shrubs, that add beauty and sustainability to your garden.</p>
    </div>
  </div>
</NavLink>



  </div>
</div>
  )
}

export default ThingsweCarry

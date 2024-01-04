import React, {useState, useEffect} from 'react'
import './Sales.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';


function Sales() {

const [salesData, setSalesData] = useState([])

    useEffect(() => {
      axios
        .get("https://jericho-server-eb9k.onrender.com/sales")
        .then((res) => {
          setSalesData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    function getCurrentWeekRange() {
      const today = new Date();
    
      
      const startOfCurrentWeek = new Date(today);
      startOfCurrentWeek.setDate(today.getDate() - (today.getDay() + 3 + 7) % 7);
 
      const endOfCurrentWeek = new Date(startOfCurrentWeek);
      endOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + 6);
    
      const startDate = startOfCurrentWeek.toLocaleDateString();
      const endDate = endOfCurrentWeek.toLocaleDateString();
      const weekRange = `${startDate} - ${endDate}`;
      return weekRange;
    }
    
    const currentWeekRange = getCurrentWeekRange();
  
  return (
    <div className='sales'>

<Helmet>
        <title>Shop This Week's Deals at Jericho Nursery</title>
        <meta name="description" content="Explore our collection of high-quality plants at Jericho Nursery. Find the perfect plants to beautify your garden or home." />
        <meta property="og:title" content="Shop High-Quality Plants at Jericho Nursery" />
        <meta property="og:description" content="Explore our collection of high-quality plants at Jericho Nursery. Find the perfect plants to beautify your garden or home." />
</Helmet>

        <div className='sales_welcome'>
        <h1>This Week's Specials </h1>
        <br></br>
        <p>For the Week</p>
        <p>( {currentWeekRange} )</p>
        </div>

        <div className='sales_body'>
        <div className='sales_body_header'>
      <h1>Sales this week</h1>
        </div>

        <div className='sales_card_container'> 
        {salesData.map((item) => (
<div className='sales_card'> 
                    <div className='sales_card_top'>
                    <img src={item.img_url} className='sales_card_img' alt=''/>
                    </div>
                    <div className='sales_card_bottom'>
                        <h1>{item.name}</h1>   
                        <h3>{item.description}</h3>   
                        <h2>{item.price}</h2>
                        <h2>{item.discount}</h2>

                        <div className='sales_card_overflow'>
                          <div>
                            <span>{item.tagline}</span>
                          </div> 
                            <span>{item.start_date}--</span>
                            <span>{item.expiration}</span>
                        </div>   
                    </div>
                  
</div>
            ))}
        </div>

    </div>





    </div>
  )
}

export default Sales
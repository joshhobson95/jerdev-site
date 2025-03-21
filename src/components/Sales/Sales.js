import React, {useState, useEffect} from 'react'
import './Sales.css'
import axios from 'axios';

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
    
      // Set the start of the week to the current Thursday
      const startOfCurrentWeek = new Date(today);
      startOfCurrentWeek.setDate(today.getDate() - (today.getDay() + 3 + 7) % 7);
    
      // Set the end of the week to the next Friday
      const endOfCurrentWeek = new Date(startOfCurrentWeek);
      endOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + 8);
    
      const startDate = startOfCurrentWeek.toLocaleDateString();
      const endDate = endOfCurrentWeek.toLocaleDateString();
      const weekRange = `${startDate} - ${endDate}`;
      return weekRange;
    }
    
    const currentWeekRange = getCurrentWeekRange();
    
    
  
  return (
    <div className='sales'>



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
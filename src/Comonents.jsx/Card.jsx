import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Card() {
  const [card , setCard]= useState([])
 
  useEffect(()=>{
    axios.get("http://localhost:10000/Cards")
    .then(responce=>{
     console.log(responce.data);
     setCard(responce.data)
     
    })
  },[])

  const data = card.map((item)=>{

  return (
    <div className='card' style={{width: "19.70rem"}} key={item.id}>
      <img src={item.Image} className='card-img-top' alt={item.Title} style={{height: "230px", objectFit: "cover"}}/>
      <div className='card-body'>
        <h5 className='card-title'>{item.Title}
        </h5>
        <p className='card-text'>{item.Text}</p>
        <Link to={`/Services/${item.id}`} className='btn btn-primary'>Learn More</Link>
      </div>

</div>

            
  );
});
return(
  <div className='container mt-5'>
    <h2 className='text-center fw-bold mb-4'>Our <span className='text-primary'>Services</span></h2>
    <div className='row gap-3'>
      {data}
    </div>
  </div>
);
}
export default Card
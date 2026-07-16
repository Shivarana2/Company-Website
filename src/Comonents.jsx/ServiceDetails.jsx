import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ServiceDetails() {
    const [card , setCard]= useState({})
    const {id} = useParams()
    console.log(id);

    useEffect(()=>{
        axios.get(`http://localhost:3000/Cards/${id}`)
        .then(responce=>{
         console.log(responce.data);
         setCard(responce.data); 
         
        })
    },[id])
    
  return (
    <div className='container mt-5'>
      <div className='card mx-auto' style={{width: "40rem"}}>
        
        
            <img src={card.Image} className='card-img-top' alt={card.Title} style={{height: "400px" , objectFit: "cover"}}/>

          </div>
          <div className='card-body text-center'>
            <h1 className='card-title'>{card.Title}</h1>
            <p className='card-text fs-5 text-secondary'>{card.Text}</p>
           
          </div>
        </div>
     

    
  )
}

export default ServiceDetails
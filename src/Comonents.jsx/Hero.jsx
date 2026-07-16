import hero from "../assets/office.jpg";
import React from 'react'

function Hero() {
  return (
    <div className='container-fluid p-0'>
       
            
                <img src={hero} alt="office" className="w-100" style={{height: "500px", objectFit: "cover"}}/>

            </div>

       

    
  )
}

export default Hero
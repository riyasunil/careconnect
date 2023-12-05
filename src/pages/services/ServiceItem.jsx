import React from 'react'
import './ServiceItem.css'
// eslint-disable-next-line react/prop-types
function ServiceItem ({ image, serviceName, price }) {
  return (
    <div className='serviceITem'>
        <div className='bg' style={{ backgroundImage: `url(${image})`, height:200}}></div>
          <div> <h1>{serviceName}</h1>
        <p> Rs. {price}</p>
       </div>
    </div>
  )
}

export default ServiceItem

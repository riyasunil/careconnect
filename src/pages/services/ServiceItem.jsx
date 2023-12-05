import React from 'react'
// eslint-disable-next-line react/prop-types
function ServiceItem ({ image, serviceName, price, distance }) {
  return (
    <div className='serviceItem'>
        <div className='bg' style={{ backgroundImage: `url(${image})`, height: 200 }}></div>
          <div> <h1>{serviceName}</h1>
        <p> Rs. {price}</p>
        <p> Distance (in km): {distance}</p>
       </div>
    </div>
  )
}

export default ServiceItem

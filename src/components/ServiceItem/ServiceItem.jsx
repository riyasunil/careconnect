import React from 'react'
// eslint-disable-next-line react/prop-types
function ServiceItem ({ image, serviceName, price }) {
  return (
    <div className='serviceITem'>
        <div className='bg' style={{ backgroundImage: `url(${image})` }}> </div>
        <h1>{serviceName}</h1>
        <p> Rs. {price}</p>
    </div>
  )
}

export default ServiceItem
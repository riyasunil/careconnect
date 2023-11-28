import React, { useState } from 'react'
import SearchIcon from './Search.svg'
import { ServiceList } from './ServiceList'
import ServiceItem from '../../components/ServiceItem/ServiceItem'
import './Services.css'
function Services () {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='services'>
     {/* <div className="search">
        <input
           placeholder="Search for services"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
            src={SearchIcon}
            alt="Search"
            // onClick={() }
        />
  </div > */}
        <h1 className='servicesTitle' >Our Services</h1>
        <div className='serviceList'>
            {ServiceList.map((serviceItem, key) => {
              return (
              <ServiceItem key = { key }
                image={serviceItem.image}
                serviceName={serviceItem.service_name}
                price={serviceItem.price}
                />
              )
            })}
      </div>
    </div>
  )
}

export default Services

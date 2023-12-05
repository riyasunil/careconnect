// Services.jsx
import React, { useState } from 'react'
import { Input } from 'antd'
import { ServiceList } from '../../pages/services/ServiceList'
import ServiceItem from './ServiceItem'
// import Search from '../../components/ServiceItem/Search'
import './Services.css'

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredServices = ServiceList.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
  <>
    <div className='services'>
      <div className='searchInputContainer'>
        <Input
          id='searchInput'
          type='text'
          placeholder='Search here'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='serviceList'>
        {filteredServices.map((serviceItem, key) => (
          <div key={key} className="serviceItemWrapper">
          <ServiceItem
            image={serviceItem.image}
            serviceName={serviceItem.service_name}
            price={serviceItem.price}
          />
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Services

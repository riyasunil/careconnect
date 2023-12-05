import React, { useState } from 'react'
import { Input, Slider } from 'antd'
import { ServiceList } from '../../pages/services/ServiceList'
import ServiceItem from './ServiceItem'
import './Services.css'

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [distRange, setDistRange] = useState([0, 10])

  const filteredServices = ServiceList.filter(
    (service) =>
      service.service_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      service.price >= priceRange[0] &&
      service.price <= priceRange[1]
  )

  const handlePriceRangeChange = (value) => {
    setPriceRange(value)
  }

  const handleDistRangeChange = (value) => {
    setDistRange(value)
  }

  return (
    <>
      <div className='services'>
        <div className='sidebar'>
          <div className='priceFilterContainer'>
            <p>Price Range (Rs. 1-1000):</p>
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={priceRange}
              onChange={handlePriceRangeChange}
            />
            <p>Distance Range (1-10 km):</p>
            <Slider
              range
              min={0}
              max={10}
              defaultValue={distRange}
              onChange={handleDistRangeChange}
            />
          </div>
        </div>
        <div className='mainContent'>
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
              <div key={key} className='serviceItemWrapper'>
                <ServiceItem
                  image={serviceItem.image}
                  serviceName={serviceItem.service_name}
                  price={serviceItem.price}
                  distance={serviceItem.distance}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

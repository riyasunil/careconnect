import React from 'react'
import { useState } from 'react'
import SearchIcon from './Search.svg'

function Services() {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='services'>
      <h1>hi</h1>
      <div className="search">
                    <input
                        placeholder="Search for services"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    <img
                        src={SearchIcon}
                        alt="Search"
                        //onClick={() }
                    />   
                </div>
    </div>
  )
}

export default Services

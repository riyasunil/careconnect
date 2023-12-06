import React, { useState, useEffect } from 'react'
import { Input, Slider } from 'antd'
import { ServiceList } from '../../pages/services/ServiceList'
import ServiceItem from './ServiceItem'
import './Services.css'
import {supabase} from "../../supabase/client"  
import ProfileItem from './ProfileItem';


const Services = () => {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [distRange, setDistRange] = useState([0, 10])

  const [userProfiles, setUserProfiles] = useState([]); // State to store user profiles data
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [filteredProfiles, setFilteredProfiles] = useState([]); // State to store filtered profiles

  const [err, seterr] = useState("error")

  // Handle search input change
  const handleSearchInputChange = async (event) => {
    const query = event.target.value.toLowerCase(); // Convert search query to lowercase
    setSearchQuery(query);
    console.log(searchQuery)
    console.log("hi")
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('user_profile')
          .select();
        //   .filter('services', 'ilike', `%${searchQuery}%`);// Using ilike to perform case-insensitive search on tags
  
        if (error) {
          // Handle error
          console.error(error);
          seterr("couldnt fetch data");
          setUserProfiles(null);
          setFilteredProfiles([]);
          return;
        }
        if(data){
            setUserProfiles(data);
            seterr(null);
            console.log("Data received from Supabase:");
            console.log(data);
    
            // Filter the fetched profiles in JavaScript
            const filtered = data.filter(profile =>
              profile.services.some(service => service.toLowerCase().includes(searchQuery))
            );
            setFilteredProfiles(filtered);

        }
  
        // Filtered profiles based on tags
      } catch (error) {
        // Handle error
            seterr("error");
            setUserProfiles([]);
            setFilteredProfiles([]);
            console.error(error);
      }
    };
  
    fetchData();
  }, [searchQuery]);
  
  useEffect(() => {
    console.log(searchQuery);
    // The value will reflect the updated state here
  }, [searchQuery]);
  
  const filteredServices = ServiceList.filter(
    (service) =>
      service.service_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      service.price >= priceRange[0] &&
      service.price <= priceRange[1] &&
      service.distance >= distRange[0] &&
      service.distance <= distRange[1]
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
          <div className='filterContainer'>
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
              value={searchQuery}
            //  onChange={(e) => setSearchTerm(e.target.value)}
             onChange={handleSearchInputChange}
            />
          </div>
          <div className='serviceList'>
        {/* Display filtered user profiles */}
        {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile, index) => (
            <div key={index} className='profileItemWrapper'>
                <ProfileItem
                avatar={profile.avatar}
                name={profile.name}
                phoneNo={profile.phone_no}
                expectedSalary={profile.expected_salary}
                location={profile.location}
                services={profile.services}
                languages={profile.languages}
                />
            </div>
            ))
        ) : (
            <p>No matching profiles found</p>
        )}
        </div>
        </div>
      </div>
    </>
  )
}

export default Services
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { supabase
 } from '../../supabase/client'
import "./testservice.css"
import ProfileItem from './ProfileItem';
import { Input, Slider } from 'antd'
import { ServiceList } from '../../pages/services/ServiceList'



const Test = () => {
    const [priceRange, setPriceRange] = useState([10000, 50000])
    const [distRange, setDistRange] = useState([0, 10])


    const [sq, setsq] = useState([])
    const [userProfiles, setUserProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const [err, seterr] = useState("error")

    const handleSearchInputChange = async (event) => {
        const query = event.target.value.toLowerCase();
        setsq(query);
        console.log(sq)
    }
      
      useEffect(() => {
        const fetchdata = async () => {
          try {
            const { data, error } = await supabase
              .from('user_profile')
              .select();
      
            if (error) {
              seterr("error");
              setUserProfiles(null);
              console.log(error);
              return;
            }
      
            if (data) {
              setUserProfiles(data);
              seterr(null);
              console.log("Data received from Supabase:");
              console.log(data);
      
              // Filter the fetched profiles in JavaScript
              const filtered = data.filter(profile =>
                profile.services.some(service => service.toLowerCase().includes(sq))
              );
              setFilteredProfiles(filtered);
            }
          } catch (error) {
            seterr("error");
            setUserProfiles([]);
            setFilteredProfiles([]);
            console.log(error);
          }
        }
      
        fetchdata();
      }, [sq]);
      

      const filteredServices = userProfiles.filter(
        (profile) =>
          profile.expected_salary >= priceRange[0] &&
          profile.expected_salary <= priceRange[1]
          // Add additional conditions if needed
        //   service.distance >= distRange[0] &&
        //   service.distance <= distRange[1]
      );
    
      const handlePriceRangeChange = (value) => {
        setPriceRange(value)
      }
    
      const handleDistRangeChange = (value) => {
        setDistRange(value)
      }

  return (
    <div>
      {err && <p>{err}</p>}
      <div className='services'>
        <div className='sidebar'>
          <div className='filterContainer'>
            <p>Price Range (Rs. 1-50,000):</p>
            <Slider
              range
              min={0}
              max={50000}
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
              value={sq}
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
      
    </div>
  )
}

export default Test
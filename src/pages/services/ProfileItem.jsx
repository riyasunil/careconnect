import React from 'react';
import "./pi.css"

function ProfileItem({ avatar, name, phoneNo, expectedSalary, location, services, languages }) {
  return (
    <div className='profileItem'>
      <div className='avatar'>
        <img src={avatar} alt='Avatar' />
      </div>
      <div className='profileDetails'>
        <h2>{name}</h2>
        <p>Phone No: {phoneNo}</p>
        <p>Expected Salary: {expectedSalary}</p>
        <p>Location: {location}</p>
        <p>Services: {services.join(', ')}</p>
        <p>Languages: {languages.join(', ')}</p>
      </div>
    </div>
  );
}

export default ProfileItem;

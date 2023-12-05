import React, { useState } from 'react';
import pfp from "../../assets/pfpwork.png"
import "./UpdateProfile.css"
const UpdateProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [aadhar, setAadhar] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [services, setServices] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [duration, setDuration] = useState('');
  const [communicationLanguage, setCommunicationLanguage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePhotoChange = (e) => {
    // Handle photo change logic
    setPhoto(e.target.files[0]);
  };

  const handleAadharChange = (e) => {
    // Handle aadhar change logic
    setAadhar(e.target.files[0]);
  };

  const handleSave = () => {
    if (aadhar.length === 12 && phoneNumber.length === 10) {
      console.log('Profile saved!');
    } else {
      alert('Please provide valid Aadhar and Phone Number.');
    }
  };

  return (
    <div className='container'>
      <div className="profile-photo-container">
      <h2 className='prolabel'>My Profile Picture</h2>
        <label className="plabel" htmlFor="photo" >
        <div className="current-photo-wrapper">
          {photo ? (
            <img src={URL.createObjectURL(photo)} alt="Profile" className="current-photo" />
          ) : (
            <img src={pfp} alt="Dummy Profile" className="current-photo" />
          )}
          </div>
          <span className="update-icon">+</span>
        </label>
        <input type="file" className="pinput" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} />
      </div>
      <div className='details-container'>
      <h2 className='dlabel'>My Profile Details</h2>
      <form>
        <label className="plabel" htmlFor="firstName">First Name:</label>
        <input className='input' type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label className="plabel" htmlFor="lastName">Last Name:</label>
        <input className='input' type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        
        <label className="plabel" htmlFor="aadhar">Aadhar Card:</label>
        <input className='input' type="file" id="aadhar" name="aadhar" accept="image/*" onChange={handleAadharChange} />

        <label className="plabel" htmlFor="services">Services Required:</label>
        < select className="input" id="services" name="services" value={services} onChange={(e) => setServices(e.target.value)}>
          <option value="babysitting">Babysitting</option>
          <option value="homecleaning">Home Cleaning</option>
          <option value="elderlycare">Elderly Care</option>
        </select>

        <label className="plabel" htmlFor="phoneNumber">Phone Number:</label>
        <input className='input' type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

        <label className="plabel" htmlFor="specialRequests">Special Requests:</label>
        <textarea id="specialRequests" name="specialRequests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />

        <label className="plabel" htmlFor="duration">Duration:</label>
        <select className='input' id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="twiceAWeek">Twice a Week</option>
        </select>

        <label className="plabel" htmlFor="communicationLanguage">Communication Languages:</label>
        <select className='input'
          id="communicationLanguage"
          name="communicationLanguage"
          value={communicationLanguage}
          onChange={(e) => setCommunicationLanguage(e.target.value)}
        >
          <option value="malayalam">Malayalam</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="tamil">Tamil</option>
        </select>

        <label className="plabel" htmlFor="paymentMethod">Payment Method:</label>
        <input className='input' type="text" id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />

        <button type="button" onClick={handleSave}>Save Changes</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
import React, { useState, useEffect } from 'react';
import pfp from "../../assets/pfpwork.png"
import "./UpdateProfile.css"
import { Select, Space } from 'antd';
import { supabase } from '../../supabase/client';

const options = [
    { label: 'Babysitting', value: 'babysitting' },
    { label: 'Home Cleaning', value: 'homecleaning' },
    { label: 'Elderly Care', value: 'elderlycare' },
    { label: 'Cleaning', value: 'cleaning' },
    { label: 'Housekeeping', value: 'housekeeping' },
    { label: 'Senior Citizen Caretaking', value: 'seniorcitizencaretaking' },
    { label: 'Laundry', value: 'laundry' },
    { label: 'Grooming', value: 'grooming' },
    { label: 'Cooking', value: 'cooking' },
    { label: 'Gardening', value: 'gardening' }
  ];

  const lan = [
    { label: 'English', value: 'english' },
    { label: 'Malayalam', value: 'malayalam' },
    { label: 'Hindi', value: 'hindi' },
    { label: 'Tamil', value: 'tamil' },
  ];

  const durlist = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
  ];

  const payment = [
    { label: 'UPI', value: 'upi' },
    { label: 'Cash', value: 'cash' },
    { label: 'Bank Transfer', value: 'bank transfer' }

  ];
  const UpdateProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [duration, setDuration] = useState([]);
  const [available, setAvailablilty] = useState(true);
  const [expectedSalary, setExpectedsalary] = useState(0);
  const [communicationLanguage, setCommunicationLanguage] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);

  const handlePhotoChange = async (e) => {
    const pfpFile = e.target.files[0];
    console.log("Selected file:", pfpFile);
  
    const pfpname = `avatar_${firstName}.png`;
    console.log(pfpname);
    const { data: pfpData, error: pfpError } = await supabase
    .storage
    .from('pfp')
    .update(`public/${pfpname}`, pfpFile, {
      cacheControl: '3600',
      upsert: true
    })
  
  if (pfpError) {
    console.log(pfpError.message)
  } else {
    const { data: pfpUrlData, error: pfpUrlError } = await supabase
      .storage
      .from('pfp')
      .getPublicUrl(`public/${pfpname}`)
  
    if (pfpUrlError) {
      console.log(pfpUrlError.message)
    } else {
      console.log(pfpUrlData)
      setPhoto(pfpUrlData)
    }
  }
    if (pfpError) {
      throw pfpError;
    }
  
    if (pfpData) {
      console.log("Data obtained:", pfpData);
    }
  
  
  };
  const handleAadharChange = async (e) => {
    const aadharFile = e.target.files[0];
    console.log("Selected file:", aadharFile);
  
    const aadharName = `aadhar_${firstName}.png`;
    console.log(aadharName);
    
    const { data: aadharData, error: aadharError } = await supabase
      .storage
      .from('aadhar')
      .update(`public/${aadharName}`, aadharFile, {
        cacheControl: '3600',
        upsert: false
      })
      .then(() => {
        const { data: aadharUrlData } = supabase
          .storage
          .from('aadhar')
          .getPublicUrl(`public/${aadharName}`);
        console.log(aadharUrlData);
        setAadhar(aadharUrlData);
      });
  
    if (aadharError) {
      throw aadharError;
    }
  
    if (aadharData) {
      console.log("Data obtained:", aadharData);
    }
  };
  



  const handleSave = async () => {
      try{
      const { data: existingUserData, error: existingUserError } = await supabase
        .from('initreg')
        .select('email, id')
        .eq('email', email ); // Replace 'email' with the user's email
    
      if (existingUserError) {
        throw existingUserError;
        console.log("hihi")
      }
      
 
        const userId = existingUserData[0].id;
    
    
        
        const userData = {
          name: firstName,
          last_name: lastName,
          aadhar: aadhar,
          phone_no: phoneNumber,
          services: services,
          duration: duration,
          availability: available,
          languages : communicationLanguage,
          payment_method: paymentMethod,
          expected_salary: expectedSalary,
          avatar: photo,
          email: email
          // Add other user details here
        };
        
        const { data: updateRow, error: updateErr } = await supabase
          .from("user_profile")
          .update(userData)
          .eq('user_id', userId);
  
        if (updateErr) {
          throw updateErr;
        }
        if(updateRow){
          console.log(updateRow);
        }
        
        console.log('Profile updated successfully!');
     
    } 
  catch(err){
    console.log(err)
  }

  };
  
  const handleChange = (value) => {
    setSelectedServices(value);
    console.log(selectedServices)
    // console.log(`selected ${value}`);

  };

  const handleChangeLan = (value) => {
    setCommunicationLanguage(value);
    console.log(communicationLanguage)
  }

  const handleChangeDur = (value) => {
    setDuration(value);
    console.log(duration)
  }
  const handleChangePayment = (value) => {
    setPaymentMethod(value);
    console.log(payment)
  }


  

  useEffect(() => {
    const storedName = localStorage.getItem('pregname');
    const storedemail = localStorage.getItem('pregemail')
    if (storedName && storedemail) {
      setFirstName(storedName);
      setEmail(storedemail);
    }
  }, []);

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
        <input type="file" className="pinput" id="photo" name="photo" accept="image/*" onChange={(e)=>handlePhotoChange(e) }/>
      </div>
      <div className='details-container'>
      <h2 className='dlabel'>My Profile Details</h2>
      <form>
        <label className="plabel" htmlFor="firstName">First Name:</label>
        <input className='input' type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label className="plabel" htmlFor="lastName">Last Name:</label>
        <input className='input' type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        
        <label className="plabel" htmlFor="email">Email:</label>
        <input className='input' type="text" id="email" name="email" value={email} readOnly={true} />

        <label className="plabel" htmlFor="aadhar">Aadhar Card:</label>
        <input className='input' type="file" id="aadhar" name="aadhar" accept="image/*" onChange={(e) => handleAadharChange(e)} />

        <label className="plabel" htmlFor="services">Services Provided:</label>

        <Space
            style={{
            width: '100%',
            }}
            direction="vertical"
        >
            <Select
            mode="multiple"
            value={selectedServices}
            allowClear
            style={{
                width: '100%',
            }}
            placeholder="Please select"
            onChange={handleChange}
            options={options}
            />
        </Space>

        

        <label className="plabel" htmlFor="phoneNumber">Phone Number:</label>
        <input className='input' type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

        <label className="plabel" htmlFor="duration">Duration:</label>
        <Space
            style={{
            width: '100%',
            }}
            direction="vertical"
        >
            <Select
            mode="multiple"
            allowClear
            style={{
                width: '100%',
            }}
            placeholder="Please select"
            onChange={handleChangeDur}
            value={duration}

            options={durlist}
            />
        </Space>
        {/* <select className='input' id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="twiceAWeek">Twice a Week</option>
        </select> */}

        <label className="plabel" htmlFor="available">Available:</label>
        <select className='input' id="available" name="available" value={available} onChange={(e) => setAvailablilty(e.target.value)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label className="plabel" htmlFor="communicationLanguage">Communication Languages:</label>
        <Space
            style={{
            width: '100%',
            }}
            direction="vertical"
        >
            <Select
            mode="multiple"
            allowClear
            style={{
                width: '100%',
            }}
            placeholder="Please select"
            onChange={handleChangeLan}
            value={communicationLanguage}

            options={lan}
            />
        </Space>
        {/* <select className='input'
          id="communicationLanguage"
          name="communicationLanguage"
          value={communicationLanguage}
          onChange={(e) => setCommunicationLanguage(e.target.value)}
        >
          <option value="malayalam">Malayalam</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="tamil">Tamil</option>
        </select> */}

        <label className="plabel" htmlFor="expectedSalary">Expected Salary:</label>
        <input className='input' type="number" id="expectedSalary" name="expectedSalary" value={expectedSalary} onChange={(e) => setExpectedsalary(e.target.value)} />

        <label className="plabel" htmlFor="paymentMethod">Payment Method:</label>
        <Space
            style={{
            width: '100%',
            }}
            direction="vertical"
        >
            <Select
            mode="multiple"
            allowClear
            style={{
                width: '100%',
            }}
            placeholder="Please select"
            defaultValue={['cash']}
            onChange={handleChangePayment}
            value={paymentMethod}

            options={payment}
            />
        </Space>
        {/* <input className='input' type="text" id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} /> */}

        <button type="button" onClick={handleSave}>Save Changes</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
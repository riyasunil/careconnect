import React, {useRef, useState} from 'react'
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    Alert
  } from 'antd';
  import { Link, Navigate, useNavigate } from "react-router-dom";
import {supabase} from "../../supabase/client"  
import "./Creg.css"
import { ColorFactory } from 'antd/es/color-picker/color';

const ClientReg = () => {
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const [UserDetails, setUserDetails] = useState({
      name: "",
      email: "",
      gender: "",
    });

    const handleChange = (e) => {
      setUserDetails({...UserDetails, [e.target.name]: e.target.value});
      console.log(UserDetails);
    };


    const register = async () => {
      console.log("clicked");
  
      const {data, error} = await supabase
        .from("testprofile")
        .insert([UserDetails]);
        //set err here
        if(error)console.log(error);
        else navigate('/login');
    };

    

  return (
    <div className="cregformbc">
    <div className='CregForm'>
      <div className="headerc">Register as Client</div>
        <Form 
            
            labelCol={{ span: 10}}
            wrapperCol={{span : 14}}
            >
            <Form.Item name='fullName' label='Full Name' rules={[{required: true, message:'Please Enter Your Name'}]}>
                <Input placeholder='Type your name' value={UserDetails.name} name='name'  onChange={handleChange}/>
            </Form.Item>
            <Form.Item name='email'  label='Email'>
                <Input placeholder='Your email' value={UserDetails.email} name='email' onChange={handleChange}/>
            </Form.Item>
            <Form.Item name='password'  label='Password'>
                <Input.Password  value={UserDetails.password} name='password' placeholder='password'/>
            </Form.Item>
            <Form.Item name='confirmPassword' label='Confirm Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            <Form.Item name='gender' label='Gender'>
                <Select   value={UserDetails.gender}
                          name='gender'
                          onChange={(value) => setUserDetails({ ...UserDetails, gender: value })}
                          placeholder='gender'>
                    <Select.Option value='male'>Male</Select.Option>
                    <Select.Option value='female'>Female</Select.Option>
                    <Select.Option value='nospecify'>Choose not to specify</Select.Option>
                </Select>
            </Form.Item>
            {/* <Form.Item name='dob' label='Date Of Birth'>
                <DatePicker style={{width:'100%'}} picker='date' placeholder='Choose a date'/>
            </Form.Item> */}
            <Form.Item name='tandc' wrapperCol={{span: 24}}>
                <Checkbox> Agree to our <a href="#"> Terms and Conditons </a></Checkbox>
            </Form.Item>
            {errorMsg && (
             <Alert message={errorMsg} type='error' />
            )}
            {msg && (
             <Alert message={msg} type='success' />
            )}
            <Form.Item wrapperCol={{span: 24}}>
                <Button block type='primary' htmlType='submit' onClick={register}>Register</Button>
            </Form.Item>
        </Form>
        <div className="alrAuser">
            Already a user? <Link to={"/login"}> Login</Link>
            </div>
    </div>
  </div>
  )
}

export default ClientReg



// if (error) {
  //   throw error;
  // }
  // if (!user || !user.id) {
  //   throw new Error('User not created or does not have an ID');
  // }
  // const { data, error: insertError } = await supabase
  //   .from('users')
  //   .insert([{ email, name, gender, id: user.id }]);
  // if (insertError) {
  //   throw insertError;
  // }


  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     setErrorMsg("");
    //     setLoading(true);
    //     const { data, error } = await supabase.auth.signUp({
    //       email: Cemail,
    //       password: Cpassword,
    //       options: {
    //         data: {
    //           name: Cname,
    //           gender: Cgender
    //         }
    //       }
    //     });



    //     // if (error) {
    //     //   console.error(error);
    //     // } else {
    //     //   user = data.user;
    //     //   const { data, error: insertError } = await supabase
    //     //     .from('ccprofiles')
    //     //     .insert([{ user_id: user.id, email: user.email, name: Cname, gender: Cgender }]);
        
    //     //   if (insertError) {
    //     //     console.error(insertError);
    //     //   } else {
    //     //     console.log(data);
    //     //   }
    //     // }
    
    //     if (error) {
    //       console.error(error.message);
    //       setErrorMsg("Error in Creating Account");
    //       // handle the error here
    //     } else {
    //       console.log(user);
    //       // handle the successful sign up here
    //       setMsg("Registration Successful. Check your email to confirm your account");
    //     }
    //   } catch (error) {
    //     setErrorMsg("Error in Creating Account");
    //     console.log(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
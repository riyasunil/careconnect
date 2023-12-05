import React from 'react'
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import "./Login.css";
import {supabase} from "../../supabase/client"

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
const Login = () => {
  const [Lemail, setLemail] = useState("");  
  const [Lpassword, setLpassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setErrorMsg("");
        setLoading(true);
    
        // Query testprofile table to find matching email
        const { data: profiles, error } = await supabase
          .from('testprofile')
          .select('*')
          .eq('email', Lemail)
          .single();
    
        if (error) {
          setErrorMsg("Error occurred while logging in");
          console.error(error);
        } else if (!profiles) {
          setErrorMsg("Email or Password Incorrect");
          console.log("User not found");
        } else {
          // Check password match here or perform additional verification if necessary
          // For example, if you have a password field in the testprofile table:
          
            // Navigate to user profile upon successful login
            navigate('/home'); // Replace '/user-profile' with your user profile route
        }
      } catch (error) {
        setErrorMsg("Error occurred while logging in");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
  return (
    <div className='LoginForm'>
    <Form >
            <Form.Item name='email' label='Email' value={Lemail} onChange={(e)=> setLemail(e.target.value)}>
                <Input placeholder='Your email'/>
            </Form.Item>
            <Form.Item name='password'value={Lpassword} onChange={(e)=> setLpassword(e.target.value)} label='Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            {errorMsg && (
              <Alert message={errorMsg} type='error' onClose={() => {setErrorMsg("")}}/>)}

            <Form.Item>
                <Button type='primary' htmlType='submit' onClick={handleSubmit}>Login</Button>
            </Form.Item>
    </Form>
    </div>
  )
}

export default Login
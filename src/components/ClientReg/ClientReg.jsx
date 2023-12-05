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
  import { Link } from "react-router-dom";
import {supabase} from "../../supabase/client"  
import "./Creg.css"
import { ColorFactory } from 'antd/es/color-picker/color';

const ClientReg = () => {
    const [Cemail, setCemail] = useState(""); // State for email
    const [Cpassword, setCpassword] = useState("");
    const CconfirmPasswordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const register = (email, password) =>
    supabase.auth.signUp({ email, password });

    const handleEmailChange = (e) => {
        setCemail(e.target.value);
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setErrorMsg("");
          setLoading(true);
          //calling supabase register fucntion from above
          const { data, error } = await register(
            Cemail,
            Cpassword
          );
          console.log(
            Cemail,
            Cpassword
          )
          if (!error && data) {
            setMsg(
              "Registration Successful. Check your email to confirm your account"
            );
          }
        } catch (error) {
          setErrorMsg("Error in Creating Account");
          console.log(error)
        }
        setLoading(false);
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
                <Input placeholder='Type your name'/>
            </Form.Item>
            <Form.Item name='email'  label='Email'>
                <Input placeholder='Your email' value={Cemail} onChange={handleEmailChange}/>
            </Form.Item>
            <Form.Item name='password'  label='Password'>
                <Input.Password value={Cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='password'/>
            </Form.Item>
            <Form.Item name='confirmPassword' label='Confirm Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            <Form.Item name='gender' label='Gender'>
                <Select placeholder='gender'>
                    <Select.Option value='male'>Male</Select.Option>
                    <Select.Option value='female'>Female</Select.Option>
                    <Select.Option value='nospecify'>Choose not to specify</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name='dob' label='Date Of Birth'>
                <DatePicker style={{width:'100%'}} picker='date' placeholder='Choose a date'/>
            </Form.Item>
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
                <Button className='insidebutton' block type='primary' htmlType='submit' onClick={handleSubmit}>Register</Button>
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


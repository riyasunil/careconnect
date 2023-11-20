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

const ClientReg = () => {
    const CemailRef = useRef(null);
    const CpasswordRef = useRef(null);
    const CconfirmPasswordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const register = (email, password) =>
    supabase.auth.signUp({ email, password });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setErrorMsg("");
          setLoading(true);
          //calling supabase register fucntion from above
          const { data, error } = await register(
            CemailRef.current.value,
            CpasswordRef.current.value
          );
          if (!error && data) {
            setMsg(
              "Registration Successful. Check your email to confirm your account"
            );
          }
        } catch (error) {
          setErrorMsg("Error in Creating Account");
        }
        setLoading(false);
      };

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Item name='fullName' label='Full Name' rules={[{required: true, message:'Please Enter Your Name'}]}>
                <Input placeholder='Type your name'/>
            </Form.Item>
            <Form.Item name='email' ref={CemailRef} label='Email'>
                <Input placeholder='Your email'/>
            </Form.Item>
            <Form.Item name='password' ref={CpasswordRef} label='Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            <Form.Item name='confirmPassword' label='Confirm Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            <Form.Item name='gender' label='Gender'>
                <Select placeholder='gender'>
                    <Select.Option value='male'>Male</Select.Option>
                    <Select.Option value='female'>Female</Select.Option>
                    <Select.Option value='female'>Choose not to specify</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name='dob' label='Date Of Birth'>
                <DatePicker picker='date' placeholder='Choose a date'/>
            </Form.Item>
            <Form.Item name='tandc'>
                <Checkbox> Agree to our terms and conditons</Checkbox>
            </Form.Item>
            {errorMsg && (
             <Alert message={errorMsg} type='error' />
            )}
            {msg && (
             <Alert message={msg} type='success' />
            )}
            <Form.Item>
                <Button type='primary' htmlType='submit'>Register</Button>
            </Form.Item>
        </Form>
        <div className="alrAuser">
            Already a user? <Link to={"/login"}> Login</Link>
        </div>
    </div>
  )
}

export default ClientReg


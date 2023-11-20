import React from 'react'
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
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
import {supabase} from "../../supabase/client"
const Login = () => {
    const LemailRef = useRef(null);
    const LpasswordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setErrorMsg("");
          setLoading(true);
          const {
            data: { user, session },
            error
          } = await login(LemailRef.current.value, LpasswordRef.current.value);
          if (error) setErrorMsg(error.message);
          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          if (user && session) navigate("/");
        } catch (error) {
          setErrorMsg("Email or Password Incorrect");
        }
        setLoading(false);
      };
  return (
    <div>
    <Form onSubmit={handleSubmit}>
            <Form.Item name='email' ref={LemailRef} label='Email'>
                <Input placeholder='Your email'/>
            </Form.Item>
            <Form.Item name='password' ref={LpasswordRef} label='Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            {errorMsg && (
              <Alert message={errorMsg} type='error' onClose={() => {setErrorMsg("")}}/>)}

            <Form.Item>
                <Button type='primary' htmlType='submit'>Login</Button>
            </Form.Item>
    </Form>
    </div>
  )
}

export default Login
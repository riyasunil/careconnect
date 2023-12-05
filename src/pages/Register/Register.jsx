import React from 'react'
import "./Register.css";
import { Link } from 'react-router-dom';
/*import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker
  } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const Register = () => {
  return (
    <div className='registerationForm'>
       
        <Form>
            <Form.Item name='fullName' label='Full Name'>
                <Input placeholder='Type your name'/>
            </Form.Item>
            <Form.Item name='email' label='Email'>
                <Input placeholder='Your email'/>
            </Form.Item>
            <Form.Item name='password' label='Password'>
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
            <Form.Item>
                <Button type='primary' htmlType='submit'>Register</Button>
            </Form.Item>
        </Form>
    </div>
    
  )
}*/

function Register() {
    return(
    <div className="mainbox">
        <Link to={"/creg"}>
        <button className='b1'>
        <div className="boxclient">
           Register as Client
        </div>
        </button>
        </Link>
        <Link to={"/preg"}>
        <button className='b2'>
        <div className="boxprovider" >
         Register as Service Provider
        </div>
        </button>
        </Link>
    </div>
    
    )
}


export default Register


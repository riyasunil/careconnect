import React from 'react'
import { Link } from "react-router-dom";
import "./Provider.css"
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker
  } from 'antd';

  
import { useRef, useState } from "react";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const ProviderReg = () => {
  return (
    <div className="providerregbc">
        <div className="providerreg">
        <div className="pregheader">Register as Service Provider </div>
        <div className="pregform">
            
        <Form 
         labelCol={{ span: 10}}
         wrapperCol={{span : 14}}
        >
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
                <DatePicker style={{width:'100%'}}  picker='date' placeholder='Choose a date'/>
            </Form.Item>
            <div className="insidepregform">
            <Form.Item name='tandc' wrapperCol={{span: 24}}>
                <Checkbox> Agree to our <a href="#"> Terms and Conditons </a></Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{span: 24}}>
                <Button type='primary' htmlType='submit' className='preginsidebutton'>Register</Button>
            </Form.Item>
            </div>
        </Form>
        </div>
        <div className="alrAuser">
            Already a user? <Link to={"/login"}> Login</Link>
        </div>
        </div>
    </div>
  )
}

export default ProviderReg


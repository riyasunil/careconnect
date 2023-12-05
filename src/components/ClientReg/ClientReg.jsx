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

const ClientReg = () => {
    const [Cemail, setCemail] = useState(""); // State for email
    const [Cpassword, setCpassword] = useState("");
    const [Cgender, setCgender] = useState("");
    const [Cname, setCname] = useState("");
    const CconfirmPasswordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setErrorMsg("");
        setLoading(true);
        const { user, error } = await supabase.auth.signUp({
          email: Cemail,
          password: Cpassword,
          options: {
            data: {
              name: Cname,
              gender: Cgender
            }
          }
        });
    
        if (error) {
          console.error(error.message);
          setErrorMsg("Error in Creating Account");
          // handle the error here
        } else {
          console.log(user);
          // handle the successful sign up here
          setMsg("Registration Successful. Check your email to confirm your account");
        }
      } catch (error) {
        setErrorMsg("Error in Creating Account");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    

  return (
    <div className='CregForm'>
        <Form 
            
            labelCol={{ span: 10}}
            wrapperCol={{span : 14}}
            >
            <Form.Item name='fullName' label='Full Name' rules={[{required: true, message:'Please Enter Your Name'}]}>
                <Input placeholder='Type your name' value={Cname} onChange={(e)=> setCname(e.target.value)}/>
            </Form.Item>
            <Form.Item name='email'  label='Email'>
                <Input placeholder='Your email' value={Cemail} onChange={(e) => setCemail(e.target.value)}/>
            </Form.Item>
            <Form.Item name='password'  label='Password'>
                <Input.Password value={Cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='password'/>
            </Form.Item>
            <Form.Item name='confirmPassword' label='Confirm Password'>
                <Input.Password placeholder='password'/>
            </Form.Item>
            <Form.Item name='gender' label='Gender'>
                <Select onChange={(value) => setCgender(value)} placeholder='gender'>
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
                <Button block type='primary' htmlType='submit' onClick={handleSubmit}>Register</Button>
            </Form.Item>
        </Form>
        <div className="alrAuser">
            Already a user? <Link to={"/login"}> Login</Link>
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
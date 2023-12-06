import React, {useState} from "react"
import { Radio } from "antd"
import "./Register.css"
import { useNavigate } from "react-router"
const Register = () => {
    const navigate = useNavigate()
    const [userType, setUserType] = useState("");
    const onChange = (e) => {
        setUserType(e.target.value);
        console.log(`checked = ${e.target.checked}`);
      };
      const handleCreateAccount = () => {
        // Navigate based on the selected user type
        if (userType === "client") {
          navigate("/creg");
        } else if (userType === "freelancer") {
          navigate("/preg");
        }
      };
  return (
    <div className="bigbox">
       <div className="clmbox">
            <h1>Join as a client or freelancer</h1>
            <div className="rowbox" >
                    <Radio.Group onChange={onChange} value={userType} className="rowbox2" size="large" buttonStyle="solid"
                    >
                        <div className="clientbox">
                        <Radio className="client" value="client">
                        <h3>I'm a client, hiring workers</h3>
                        </Radio>
                        </div>
                        <div className="freebox">
                        <Radio className="freelance" value="freelancer">
                        <h3>I'm a freelancer, looking for work</h3>
                        </Radio>
                        </div>
                       
                </Radio.Group>
            </div>
            <button onClick={handleCreateAccount}>Create Account</button>
                <p>Already have an account? <span><a href="/login">Log In</a></span></p>
       </div>
    </div>
  )
}

export default Register


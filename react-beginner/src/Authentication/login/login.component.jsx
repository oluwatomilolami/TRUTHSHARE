import React, {useState, useContext} from "react";

import signupimage from '../../assets/images/signup.png';
import CustomButton from '../../components/custom-button/button.component';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/authcontext";
import './login.styles.css';
import FormInput from '../../components/Form-input/form-input.component';
  

export default function LoginPage(){
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const [userInfo, setUserInfo]= useState({
    email: "",
    password: "",
  });
const [error, setError] = useState('');


const handleOnchangeText = (e, fieldName) => {
  setUserInfo({...userInfo, [fieldName]: e.target.value});
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const{email, password} = userInfo;

  try{
    await login(email, password); //handling succesful login.
    console.log("Login successfully!");
    navigate("/home");
  } catch(error) {
    setError(error.message);
    console.log("Login failed please try again.");
  }
};
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${signupimage})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        height:"100vh",
        padding:"30px"
    };
    return(
        <>
        <div style={styles}> 
<div>

    <h1 className='heading-primary'> Login Here </h1>
    <form  onSubmit={handleSubmit}>
    {error ? (
                <p className='text-center text-red-900'>{error}</p>
              ) : null}
<FormInput 
name= "email"
type="email"
 placeholder="Enter your email"
value={userInfo.email}
onChange={(e) => handleOnchangeText(e, "email")}
required

/>

<FormInput 
type="password"
placeholder="Enter your password"
required
value={userInfo.password}
onChange={(e) => handleOnchangeText(e, "password")}
/>
<div className='btnFlex'>
    <CustomButton type="submit">Signin</CustomButton>
</div>

</form>
 <div style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
 }}>
  <h2>if you don't have an account?</h2>
 <span>
    Click the link below to sign-up
    <Link
      to="/signup"
      style={{
        textDecoration: 'underline',
        fontSize: '17px',
        color: "#fff",
        marginLeft: "10px"
      }}
    >
     Sign-up
    </Link>
 </span>
 </div>
</div>
</div>         
  </>
  );
}
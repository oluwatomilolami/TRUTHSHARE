import React, {useState, useContext} from 'react'
import signupimage from '../../assets/images/signup.png';
import './signup.styles.css';
import FormInput from '../../components/Form-input/form-input.component';
import { AuthContext }  from '../context/authcontext';
import CustomButton from '../../components/custom-button/button.component';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage(){
  const navigate = useNavigate();
  const {register} = useContext(AuthContext);
  const [userInfo, setUserInfo]= useState({
    firstName: '',
    lastName:'',
    email: '',
    password: ''
  });
  const [error, setError] = useState('')
  const handleOnchangeText = (e, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: e.target.value}); // the userInfois initializing a spread operators
  }
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${signupimage})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        height:"100vh",
        padding:"30px"
    };

    const handleSubmit = async (e) => {
      e.preventdefault();

      const{ firstName, lastName, email,password } = userInfo;

      try{
        await register (firstName, lastName, email, password);
        console.log("Registration successful");
        navigate("/");
      }  catch(error) {
        setError(error.message); // display the error message to the user 
        console.log('Rgistration failed. please try again.');

      }
      }
    
    return(
        <>
      <div style={styles}>
        <div>
            <h1 className='heading-primary'> Register Here</h1>
            <form onSubmit={handleSubmit}>
              {error ? (
                <p className='text-center text-red-900'>{error}</p>
              ) : null}
            
                <FormInput
                type="text"
                value= {userInfo.firstName}
                onChange={(e) => handleOnchangeText(e, "firstName")}
                placeholder="Enter your first name"
                required
                />
                 <FormInput
                type="text"
                value= {userInfo.lastName}
                onChange={(e) => handleOnchangeText(e, "lastName")}
                placeholder="Enter your last name"
                required
                />
                 <FormInput
                type="email"
                value= {userInfo.email}
                onChange={(e) => handleOnchangeText(e, "email")}
                placeholder="Enter your email"
                required
                />
                 <FormInput
                type="password"
                value= {userInfo.password}
                onChange={(e) => handleOnchangeText(e, "password")}
                placeholder="Enter your password"
                required
                />
              <div style={{
                display: 'flex',
                justifyContent:'center'
              }}>
                <input type='checkbox'/>
                <span
                style={{
                    color: "white",
                    marginLeft:"20px"
                }}
                >
                    i accept to terms and conditions 
                </span>
              </div>
   <div className='btnFlex'>
<CustomButton type="submit">Signup</CustomButton>
</div>
            </form>
<div className='btnFlex'>
    <h2> Already have an account?</h2>
    <span>
        Click the link below to sign-in 
        <Link
        to='/'
        style={{
            textDecoration: "unerline",
            fontSize:"17px",
            color:"yellow",
            marginLeft:"10px"
        }}
        >Sign-in</Link>
    </span>
</div>
        </div>
      </div>
    
        </>
    );
}
import React, { useState } from 'react'
import "./Auth.css";
import Logo from "../../img/logotok.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from '../../actions/AuthActions';

const Auth = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading)
  const [data, setData] = useState({
    firstname: "", 
    lastname:"", 
    password:"", 
    username:"",
  });

  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmPass, setConfirmPass] = useState(true);

  // Reset Form
  const resetForm = () => {
    setConfirmPass(true);
    setData({firstname: "", 
    lastname:"", 
    password:"", 
    username:"",
  })
  };
  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp){
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }

  };
  return (
    <div className="Auth">
      {/* Left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>TokTok</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          {isSignUp && (
            <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
              onChange={handleChange}
              value={data.firstname}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              onChange={handleChange}
              value={data.lastname}
            />
          </div>
          )}
          
  
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onChange={handleChange}
              value={data.username}
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={data.confirmPass}
            />
            )}
            
          </div>
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                  display: confirmPass ? "none" : "block",
                }}  
              >
              *Confirm password is not same
              </span>
          <div>
              <span 
                style={{fontSize: '12px' , cursor: "pointer"}} 
                onClick = {()=>{setIsSignUp((prev)=>!prev); resetForm()}}>
                {isSignUp?  "Already have an account. Login!" : "Don't have an account? Signup"}
              </span>
          </div>
          <button className="button infoButton" type="submit" disabled ={loading}>
          {loading? "Loading..." : isSignUp ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
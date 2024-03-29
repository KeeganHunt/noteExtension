import React, { useState } from 'react';
import "../styles/Register.css";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';



const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const responseGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    navigate('/nav')
    
  };

  const responseGoogleFailure = (response) => {
    console.log('Google login failed:', response);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle sign-up logic
    console.log('Signing up with:', firstName, lastName, username, password);
    navigate('/')
  };

  return (
    <div className='login-form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
       
        <GoogleLogin
            className = "google-login-button"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={'single_host_origin'}
          />
       
      </form>
      </div>
  );
};

export default SignUp;

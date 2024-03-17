import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";
import { useState } from 'react';
const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', username, password);
    // Redirect to another page after successful login
    navigate('/dashboard');
  };


  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-form">
     
      <h1>Login</h1>
      <form onSubmit={handleLoginClick}>
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
         <button type='submit' onClick={handleLoginClick}>Login</button>
         <button type='submit1' onClick={handleSignupClick}>Sign Up</button>
      </form>
        </div>
      
  );
};

export default Home;

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
    <div className="center-container">
      <div className={"home-container"}>
        <h1>WebNote Extention</h1>
        <div>
      <h2>Login</h2>
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
         <button onClick={handleLoginClick}>Login</button>
      </form>
    </div>
        <button onClick={handleSignupClick}>Sign Up</button>
      </div>
    </div>
  );
};

export default Home;

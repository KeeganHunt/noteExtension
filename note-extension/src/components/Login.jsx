// import React, { useState } from "react";
// import '../styles/login.css';
// export const Login = () => {
//     const [username, setUsername] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(username)
//     }

//     return (
//         <>

//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">username</label>
//                 <input value={username} type="username" placeholder="your username" id="username" name="username"></input>
//                 <label htmlFor="password">password</label>
//                 <input value={pass} type="password" placeholder="************" id="password" name="password"></input>
//                 <button>Login</button>
//             </form>
//             <button>Don't have an account? Register here!</button>
//         </>
//     )
// }
// LoginPage.js
import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

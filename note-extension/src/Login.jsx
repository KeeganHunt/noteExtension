import React, { useState } from "react";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username)
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} type="username" placeholder="your username" id="username" name="username"></input>
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="************" id="password" name="password"></input>
                <button>Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        </div>
    )
}
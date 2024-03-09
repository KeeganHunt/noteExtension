import React, { useState } from "react";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username)
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} type="username" placeholder="your username" id="username" name="username"></input>
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="************" id="password" name="password"></input>
                <button>Login</button>
            </form>
            <button>Don't have an account? Register here!</button>
        </>
    )
}
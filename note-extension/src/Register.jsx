import React, { useState } from "react";

export const Register = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username)
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <label htmlFor="firsName">First Name</label>
                <input value={firstName} placeholder="First Name" id="firstName" name="username"></input>
                <label htmlFor="username">username</label>
                <input value={username} type="username" placeholder="your username" id="username" name="username"></input>
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="************" id="password" name="password"></input>
                <button>Login</button>
            </form>
            <button>Already have an account? Login here!</button>
        </>
    )
}
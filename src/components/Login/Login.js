import axios from 'axios';
import React from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login ({setShowLogin}) {
 
    const [error, setError] = useState(false);
    
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => { e.preventDefault();
        const user = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            await axios.post("http://localhost:5050/api/users/login", user);
            setError(false);
        } catch (error) {
            setError(true);
   
        }

    }

    const notify = () => toast("Succes!");
    const notifyError = () => toast("Error!");

    return (
        <>
<div>
    <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Username" ref={nameRef} />
        <label>Email</label>
        <input type="text" placeholder="Password" ref={passwordRef} />
        <button type="submit"
        onClick={() => {
            notify();
            notifyError();
        }} >Login</button>

        {error && (
            <ToastContainer />
        ) }
    </form>
    <button onClick={() => setShowLogin(false)}>Cancel</button>
</div>
        </>
      )
}
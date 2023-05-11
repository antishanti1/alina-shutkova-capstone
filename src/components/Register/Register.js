import axios from 'axios';
import React from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register ({setShowSignup}) {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
   

    const handleSubmit = async (e) => { e.preventDefault();
        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
          
        };

        try {
            await axios.post("http://localhost:5050/api/users/register", newUser);
            setSuccess(true);
            setError(false);
            notify('Succes!');
        } catch (error) {
            setError(true);
            notifyError('Error!');
   
        }

    }

    const notify = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);

    return (
        <>
<div>
    <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Username" ref={nameRef} />
        <label>Email</label>
        <input type="text" placeholder="Email" ref={emailRef}/>
        <label>Password</label>
        <input type="text" placeholder="Password" ref={passwordRef} />
        <button type="submit">Sign Up</button>
    </form>
    <button onClick={() => setShowSignup(false)}>Cancel</button>
    <ToastContainer />
</div>
        </>
      )
}
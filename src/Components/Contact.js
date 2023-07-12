import React from 'react'
import { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      
    } else {
      // Perform form submission
      // Reset form state and display success message
      setName('');
      setEmail('');
      setPassword('');
      setError('Form submitted successfully!');
    }
  };
  
  return (
    <div className='container shadow p-3 mb-5 bg-body-tertiary rounded m-auto w-50'>
    <label className='form-label'>        Name:</label> 
      <input className='form-control' type="text" value={name} onChange={handleNameChange} /> <br />
    <label className='form-label'>
      Email:    </label> 
      <input className='form-control' type="email" value={email} onChange={handleEmailChange} /> <br />
    <label className='form-label'>
      Password:    </label> 
      <input className='form-control' type="password" value={password} onChange={handlePasswordChange} />
    <br />

    <button type='submit' onClick={handleSubmit} className="btn btn-outline-dark btn-lg w-100">Submit</button>
    {error && <p style={{ color: 'red' }}>{error}</p>}

  </div>
  )
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [registerData, setRegisterData] = useState({ username: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://stormhacks2025-t9xb.onrender.com/users/register', registerData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });

      console.log('Registration successful:', response.data);
      setErrorMsg('');
      navigate('/login'); // redirect to login page after success
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response?.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            required
          />

          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

          <div className="action-row">
            <button type="submit" className="black-button">Register</button>
            <Link to="/login" className="prompt-button">
              Already Have An Account?<br />Log In.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

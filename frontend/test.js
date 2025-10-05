

import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';              // <-- Import axios
import { Link, useNavigate } from 'react-router-dom'; // <-- Import useNavigate


const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();      // <-- Setup navigate for redirect
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // clear any previous error message

    try {
      const response = await axios.post('http://localhost:3500/users/login', loginData, {
        withCredentials: true, // to send cookies if backend sets any
      });
      console.log(response.data);
      if (response.status === 200) {
        // Optionally store access token if you want:
        localStorage.setItem('accessToken', response.data.accessToken);

        // Redirect to homepage
        navigate('/');
      }
    } catch (error) {
      // Handle error response from backend
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <div className="action-row">
            <button type="submit" className="black-button">Login</button>
            <Link to="/register" className="prompt-button">
              Don’t Have An Account?<br />Get Started.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
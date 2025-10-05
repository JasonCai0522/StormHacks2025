import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', loginData);
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [registerData, setRegisterData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', registerData);
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
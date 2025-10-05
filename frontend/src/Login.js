import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Get the attempted route, or fallback to home
  const from = location.state?.from?.pathname || '/';

  console.log("📍 Login redirect target (from):", from);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post('http://localhost:3500/users/login', loginData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const accessToken = response.data.accessToken;

        //testing token
        console.log("🪪 Received access token:", accessToken);

        // Save token and update login state
        localStorage.setItem('accessToken', accessToken);
        setIsLoggedIn(true);

        // Redirect to the original route or home
        navigate(from, { replace: true });
      }
    } catch (error) {
      if (error.response?.data?.message) {
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


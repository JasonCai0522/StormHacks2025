import React, { useState } from "react";
import Button from './Button'
import { useNavigate } from "react-router-dom";


const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()
  const [showButtons, setShowButtons] = useState(true);
  
  const handleLogin = () => {
    setShowButtons(false);
    navigate("/login");
  };

  const handleRegister = () => {
    setShowButtons(false);
    navigate("/register");
  };

  const handleAbout = () => {
    setShowButtons(false);
    navigate("/about");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowButtons(true);
    //localStorage.removeItem('accessToken');
    navigate("/");
  }

  const handleMain = () => {
    setIsLoggedIn(true);
    setShowButtons(false);
    navigate("/mainScreen");
  };

  return (

    <header class="App-header">
        <h1>placeholder</h1>
        <div className="button-group">
          {showButtons && (
            <>
              <Button className = "register-button" text="About Us" onClick={() => handleAbout()} />
              <Button className = "login-button" text="Register" onClick={() => handleRegister()} />
              <Button className = "login-button" text="Login" onClick={() => handleLogin()} />
            </>
          )}
          {!showButtons && !isLoggedIn &&(
            <Button className = "login-button" text="Return Home" onClick={() => handleLogout()} />
          )}
          
          {!showButtons && isLoggedIn &&(
            <Button className = "login-button" text="Logout" onClick={() => handleLogout()} />
          )}
        </div>
           
    </header>
  )
}

export default Header
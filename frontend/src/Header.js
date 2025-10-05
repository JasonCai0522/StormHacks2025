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
    navigate("/");
    setShowButtons(true);
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
              <Button className = "login-button" text="main" onClick={() => handleMain()} />
            </>
          )}
          {!showButtons && !isLoggedIn &&(
            <Button className = "login-button" text="Return Home" onClick={() => handleLogout()} />
          )}
        </div>
           
    </header>
  )
}

export default Header
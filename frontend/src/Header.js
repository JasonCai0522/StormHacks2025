import React, { useState } from "react";
import Button from './Button'
import { useNavigate } from "react-router-dom";


const Header = () => {
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
        </div>
           
    </header>
  )
}

export default Header
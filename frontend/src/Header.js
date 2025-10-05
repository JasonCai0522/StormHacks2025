import React from 'react'
import Button from './Button'

const Header = () => {
  return (

    <header class="App-header">
        <h1>GOGGIFY</h1>
        <div className="button-group">
          <Button className = "register-button" text="About Us" onClick={() => console.log("About Clicked")} />
          <Button className = "login-button" text="Register" onClick={() => console.log("Register clicked")} />
          <Button className = "login-button" text="Login" onClick={() => console.log("Login clicked")} />
        </div>
    </header>
  )
}

export default Header
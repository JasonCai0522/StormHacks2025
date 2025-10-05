import React from 'react'

const Button = ({ text, onClick, type = "button", className = ""}) => {
  return (
    <button className={`"home-button" ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button
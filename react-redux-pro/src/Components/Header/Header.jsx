
import React from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
     
        <div className="logo">Movie App</div>
      
      <div className="user-image">
        <img src="https://github.com/dmalvia/React_Redux_ToolKit_Movie_App/blob/master/src/images/user.png?raw=true" alt="user" />
      </div>
    </div>
  )
}

export default Header

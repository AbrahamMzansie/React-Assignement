import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
        <ul>
            <li>O</li>
            <li>O</li>
            <li>O</li>
        </ul>
        <Link to="/">
        <h1>Deezer</h1>
        </Link>
       
    </div>
  )
}

export default Header
//import React from "react";
import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/logo.webp"
import {useState} from 'react'
import "./Topbar.css"

/**
 * Navigation component
 * @returns render
 */
const Topbar = () => {
  let navigate = useNavigate()
  const [isToggled, setIsToggled] = useState(true)
  return (
    <header className="Topbar-container">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
        <h1 className="title">HRnet</h1>

        {isToggled ? 
        <Link onClick={() => setIsToggled(!isToggled)}
        className="list"
        to="/list">Employees List</Link>
     : <Link 
        className="list"
        to="/">Home</Link>
        }
    </header>
  )
}

export default Topbar;
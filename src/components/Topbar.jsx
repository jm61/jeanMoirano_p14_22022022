//import React from "react";
import { Link } from "react-router-dom"
import Logo from "../assets/logo.webp"
import {useState} from 'react'
import "./Topbar.css"
import Form from '../components/Form'

/**
 * Navigation component
 * @returns render
 */
const Topbar = () => {
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
     : <Link onClick={() => setIsToggled(!isToggled)}
        className="list"
        to="/">Home</Link>
        }
    </header>
  )
}

export default Topbar;
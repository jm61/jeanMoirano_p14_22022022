import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.webp"
import "./Topbar.css"

/**
 * Navigation component
 * @returns render
 */
const Topbar = () => {
  return (
    <header className="Topbar-container">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </NavLink>
        <h1 className="title">HRnet</h1>
      <NavLink activeclassname="active" className="list" to="/list">Employees List</NavLink>
      <NavLink activeclassname="active" className="list" to="/">Home</NavLink>
    </header>
  )
}

export default Topbar;
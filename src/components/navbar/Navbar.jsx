import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-sm ">
  <div className="container p-3">
    <Link className="navbar-brand text-white fs-2 fw-bolder" to="start">START FRAMEWORK</Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-6 fw-bold mx-1 rounded-3 d-inline-block" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-6 fw-bold mx-1 rounded-3 d-inline-block" to="portfolio ">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-6 fw-bold mx-1 rounded-3 d-inline-block" to="contact">CONTACT</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    
  )
}

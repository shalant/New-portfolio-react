import React from 'react'
import './Navbar.css'
import { NavLink } from'react-router-dom'

const Navbar =()=>{ 
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="nav-bar">
            <NavLink className="navbar-brand" href="#"></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="index.html">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://docs.google.com/document/d/1G1z3cVN6IjHW4M2zVytsoE6g_-fWETb0qTSSZqI05Tk/edit">Resume</a>
            </li>    
            </ul>
        </div>  
        </nav>
    )
}

export default Navbar
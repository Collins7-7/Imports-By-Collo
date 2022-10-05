import React,{useState} from 'react';
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="nav-container">
            <Link to="/" className="navbar-logo">
                IBC <i className="fa-sharp fa-solid fa-car"></i>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
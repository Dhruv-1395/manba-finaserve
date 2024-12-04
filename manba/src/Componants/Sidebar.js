import React from 'react'
import '../Css/Sidebar.css'
import { Link } from "react-router-dom";

function SideClose(){
   document.getElementById('Sidebar').style.left="-300px";
}
const Sidebar = () => {
  return (
    <div className='Sidebar shadow' id='Sidebar'>
      <ul className="nav flex-column" >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="cls-btn shadow" id='ClsBtn' onClick={SideClose}><i className="fa-solid fa-xmark"></i></div>
    </div>
  )
}

export default Sidebar

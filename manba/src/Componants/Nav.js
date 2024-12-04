import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import '../Css/Navbar.css'

function SideNavOpn(){
  document.getElementById('Sidebar').style.left=0;

}
const Nav = () => {
  return (
    <div>
      <nav className="navbar  shadow">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <h3 className="title">Manba Finaserve</h3>
          </div>
         
          <ul className="nav justify-content-end" >
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
              <Link to="/service" className="nav-link" href="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            
          </ul>
          <div className="hamburger-menu" id="SideNavOpn" onClick={SideNavOpn}>
          <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

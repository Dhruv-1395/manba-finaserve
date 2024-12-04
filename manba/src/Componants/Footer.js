import React from "react";
import Logo from "../Assets/logo.png";
import '../Css/Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_logo ">
          <img src={Logo} alt="logo" />
          <h3 className="title">Manba Finaserve</h3>
        </div>
        <hr />
        <div className="row">
          <div className="col-xl-6 col-12 left-content">
            <p>
              With thousands of people starting up new businesses every day,
              thousands of fami- lies looking for a new mortgage and so on, the
              loan companies play a vital role in the today's society...
            </p>
            <div className="footer_address">
              <span>
                <i className="fa-solid fa-location-dot"></i> 312, superdiamond
                market
              </span>
              <span>
                <i className="fa-solid fa-phone"></i> +91 22 6212 5000
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-12 footerNavigation">
            <div className="row ">
              <div className="col-md-4 pages">
                <h5 className="title">Pages</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      <i className="fa-solid fa-greater-than"></i> Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      <i className="fa-solid fa-greater-than"></i> About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      <i className="fa-solid fa-greater-than"></i> Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      <i className="fa-solid fa-greater-than"></i> Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 pages">
                <h5 className="title">Loan</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/homeloan">
                      <i className="fa-solid fa-greater-than"></i> Home Loan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/personalloan">
                      <i className="fa-solid fa-greater-than"></i> Personal Loan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/goldloan">
                      <i className="fa-solid fa-greater-than"></i> Gold Loan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/buisnessloan">
                      <i className="fa-solid fa-greater-than"></i> Buisness Loan
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 pages">
                <h5 className="title">Social Media</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                    <i className="fa-brands fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                    <i className="fa-brands fa-instagram"></i> instagram
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                    <i className="fa-brands fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

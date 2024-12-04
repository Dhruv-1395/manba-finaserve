import React from "react";
import "../Css/Service.css";
import { FaAngleLeft } from "react-icons/fa6";
import PersonalLoanimg from "../Assets/personalLoanimg.png";
import Goldloanimg from "../Assets/goldLoanimg.png";
import Homeloanimg from "../Assets/homeLOanimg.png";
import { Link } from "react-router-dom";
import serviceImg from "../Assets/serviceaboutimg.png";
const Service = () => {
  return (
    <div className="service">
      <div className="banner">
        <div className="container">
          <div className="navigation ">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <FaAngleLeft className="angle-left" />
            <span style={{ color: "#3498db" }}>Service</span>
          </div>
          <h1 className="title">
            Our <span style={{ color: "#3498db" }}>Services</span>
          </h1>
          <p>
            Our dedicated customer support team is here to assist you at every
            stage of your loan journey. Whether you have questions about the
            application process or need advice on the right loan for your
            situation, we're just a call or message away.
          </p>

          <Link to="/contact" className="button">
            Submit
          </Link>
        </div>
      </div>

      <div className="loans">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="card shadow">
                <div className="card-body">
                  <img src={PersonalLoanimg} alt="" />
                  <h2 className="title">Personal Loan</h2>
                  <p>
                    Get Personal Loan Based On Your Credit Profile- From 1 Lakh
                    To 15 Lakh.
                  </p>
                  <Link to="/personalloan" className="button">
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4  col-lg-6 col-12">
              <div className="card shadow">
                <div className="card-body">
                  <img src={Goldloanimg} alt="" />
                  <h2 className="title">Gold Loan</h2>
                  <p>
                    The most significant objective is to project gold loans as a
                    'Good Smart Option, as against being the Last Option' for
                    seeking financial credit.
                  </p>
                  <Link to="/goldloan" className="button">
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="card shadow">
                <div className="card-body">
                  <img src={Homeloanimg} alt="" />
                  <h2 className="title">Home Loan</h2>
                  <p>
                    Various insurers in India & buy insurance policy online. Get
                    instant quotes & save huge on premiums.
                  </p>
                  <Link to="/homeloan" className="button">
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service_loan">
        <div className="container">
          <div className="row">
            <div className="service_main_content">
              <div className="col-12">
                <div className="service_img d-flex justify-content-center">
                  <img src={serviceImg} alt="" />
                  <h1 className="title">MORE INFO</h1>
                </div>
              </div>
              <div className="row single_loans">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <div className="single_loan home">
                    <h6 className="title text-center">Home Loan</h6>
                    <p>
                      Owning a home is the most desirable thing for all. it acts
                      as your fiscal wealth and mental security.
                    </p>
                  </div>
                  <div className="single_loan personal">
                    <h6 className="title text-center">Personal Loan</h6>
                    <p>
                    A big Part of financial freedom le having your heart and mind free from worry about the whatifs of life.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <div className="single_loan gold">
                    <h6 className="title text-center">Gold Loan</h6>
                    <p>
                    One can pay back the loan of gold, but one dies forever in debt to those who are kind.
                    </p>
                  </div>
                  <div className="single_loan buisness">
                    <h6 className="title text-center">Business Loan</h6>
                    <p>
                    Get Unsecured Business Loan For Business Expansion And Working Capital From 5 Lakh To 5 Cr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

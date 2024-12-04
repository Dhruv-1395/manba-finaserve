import React from "react";
import "../Css/GoldLoan.css";
import Loanapprove from "../Assets/Easy Loan Approvals.png";
import LowestPossiblePrices from "../Assets/Lowest Possible Prices.png";
import Hasslefree from "../Assets/Hassle free.png";
import SecureLoanProcesss from "../Assets/Secure Loan Processs.png";
import profileimg from "../Assets/profile.png";
import sign from '../Assets/signature.png'
import creditcard from '../Assets/credit-cards.png'
import form from '../Assets/registered-document.png'
import address from '../Assets/address.png'
import identity from '../Assets/identity-card.png'
import { Link } from "react-router-dom";
const GoldLoan = () => {
  return (
    <div className="goldloan">
      <div className="banner">
        <div className="container">
          <h1 className="title">Instant Approval For</h1>
          <h1 className="title" style={{ color: "#00adef" }}>
            Gold Loan
          </h1>
          <p>
            Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant
            e-Approval -
          </p>
        </div>
      </div>
      <div className="choose">
        <div className="container">
          <h1 className="title">
            Reason to Choose <span style={{ color: "#00adef" }}>Gold loan</span>{" "}
          </h1>
          <p>
            We offer award-winning, low-rate gold loans with no ongoing
            fees,saving our customers thousands of rupee.
          </p>

          <div className="row">
            <div className="col-lg-6 col-12 about">
              <img src={Loanapprove} alt="" />
              <h3 style={{ color: "#00adef" }}>Easy Loan Approvals</h3>
              <p>
                At Easy Loan Approvals, we understand that time is of the
                essence when you need financial assistance. Our user-friendly
                online application process takes only minutes to complete.
              </p>
            </div>

            <div className="col-lg-6 col-12 about">
              <img src={LowestPossiblePrices} alt="" />
              <h3 style={{ color: "#00adef" }}>Lowest Possible Prices</h3>
              <p>
              We work tirelessly to secure exclusive discounts and promotions for our users. Our team scours the web for the latest deals, coupons, and limited-time offers, so you don't have to. Saving money has never been easier.
              </p>
            </div>

            <div className="col-lg-6 col-12 about">
              <img src={Hasslefree} alt="" />
              <h3 style={{ color: "#00adef" }}>Hassle free</h3>
              <p>
              We firmly believe that financial assistance should not discriminate based on income. Whether you earn a high salary or have a more modest income, everyone deserves the opportunity to secure a loan when needed. Hassle-Free Loans welcomes applicants from all income brackets.
              </p>
            </div>

            <div className="col-lg-6 col-12 about">
              <img src={SecureLoanProcesss} alt="" />
              <h3 style={{ color: "#00adef" }}>Secure Loan Processs</h3>
              <p>
              To prevent identity theft and fraud, we employ rigorous identity verification procedures. Our process verifies that you are who you claim to be, providing an added layer of security to your loan application.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="documents">
        <div className="container">
          <h1 className="title mb-4">
            What are the documents required for <br />{" "}
            <span style={{ color: "#00adef" }}>Gold Loan?</span>
          </h1>
          <span style={{ fontSize: "20px" }}>TOOLS TO HELP YOU CHOOSE</span>

          <div className="row mt-5">
            <div className="col-lg-6 ">
              <div className="document">
                <img src={profileimg} alt="" />
                <span>Passport sized photographs</span>
              </div>
              <div className="document">
                <img src={sign} alt="" />
                <span>Signature proof</span>
              </div>
              <div className="document">
                <img src={creditcard} alt="" />
                <span>PAN card</span>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="document">
                <img src={form} alt="" />
                <span>Application form</span>
              </div>
              <div className="document">
                <img src={address} alt="" />
                <span>Address proof</span>
              </div>
              <div className="document">
                <img src={identity} alt="" />
                <span>Identity proof</span>
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn">APPLY NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default GoldLoan;

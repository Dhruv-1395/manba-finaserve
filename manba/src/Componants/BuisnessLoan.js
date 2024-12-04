import React from "react";
import "../Css/Buisnessloan.css";

import learnedimg1 from "../Assets/learned.jpg";
import learnedimg2 from "../Assets/business men.jpg";
import learnedimg3 from "../Assets/business women.jpg.jpg";
import moneybag from "../Assets/money-bag (1) 1.png";
import analsis from "../Assets/analysis 1.png";
import annual from "../Assets/Nature.png";
import businesscredit from "../Assets/business-credit-score 1.png";
import profit from "../Assets/profit 1.png";
import briecase from "../Assets/Loan Amount.png";
import img from "../Assets/money (1) 2.png";
import img2 from "../Assets/Annual Turnover.png";
import { Link } from "react-router-dom";
const BuisnessLoan = () => {
  return (
    <div className="buisnessLoan ">
      <div className="banner">
        <div className="container">
          <h1 className="title">
            Instant Approval For <br />
            <span style={{ color: "#00adef" }}>Business Loan</span>
          </h1>
          <p>
            Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant
            e-Approval
          </p>
        </div>
      </div>
      <div className="choose">
        <div className="container">
          <h1 className="title text-center">Reason to Choose </h1>
          <p className="text-center">
            Leveraging business loans strategically enhances growth, stability,
            and long-term prosperity through responsible financial management
            and effective deployment.
          </p>
          <div className="row mt-5">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="learned">
                <img src={learnedimg1} alt="" />
                <p>
                  When embarking on a new business venture, securing adequate
                  capital is often the first and most significant hurdle. A
                  business loan provides the initial capital injection required
                  to transform your vision into reality. It covers startup costs
                  such as product development, marketing, office space, and
                  equipment.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="learned">
                <img src={learnedimg2} alt="" />
                <p>
                  For existing businesses, expansion is the name of the game.
                  Whether you're looking to open new locations, hire additional
                  staff, or diversify your product line, a business loan can
                  provide the financial foundation necessary to fund these
                  growth initiatives.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="learned">
                <img src={learnedimg3} alt="" />
                <p>
                  Many businesses, particularly those in retail or hospitality,
                  experience seasonal fluctuations in revenue. A business loan
                  can help bridge the gap during slow periods, ensuring that
                  your business remains stable and can capitalize on peak
                  seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="documents">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="title mb-4">
                Factors that Affect{" "}
                <span style={{ color: "#00adef" }}>
                  Business Loan Interest Rate
                </span>
              </h1>
            </div>
          </div>


          <div className="row mt-5">
            <div className="col-lg-6 ">
              <div className="document">
                <img src={moneybag} alt="" />
                <span>Financial Health of Business</span>
              </div>
              <div className="document">
                <img src={analsis} alt="" />
                <span>Nature of Business</span>
              </div>
              <div className="document">
                <img src={annual} alt="" />
                <span>Business Plan</span>
              </div>
              <div className="document">
                <img src={businesscredit} alt="" />
                <span>Collateral</span>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="document">
                <img src={profit} alt="" />
                <span>Profitability & Stability</span>
              </div>
              <div className="document">
                <img src={briecase} alt="" />
                <span>CIBIL Score & Credit History</span>
              </div>
              <div className="document">
                <img src={img} alt="" />
                <span>Loan Amount & Repayment Tenure</span>
              </div>
              <div className="document">
                <img src={img2} alt="" />
                <span>Annual Turnover</span>
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn">
            APPLY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuisnessLoan;

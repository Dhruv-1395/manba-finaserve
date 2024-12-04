import React from "react";
import "../Css/CashLoan.css";
import Cashloanimg from "../Assets/cashloanleftimg.png";
import { Link } from "react-router-dom";
const CashLoan = () => {
  return (
    <div className="Cashloan">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img src={Cashloanimg} alt="cashloan" />
          </div>
          <div className="col-xl-6">
            <h1 className="title">Do you need a small cash loan?</h1>
            <h3 className="provide">
              We’ll provide you with anythig between ₹1,00,000 and ₹50L !
            </h3>
            <p>
              If you're facing an unexpected financial expense, such as a
              medical emergency, car repair, or home repair, you may be
              considering taking out a small cash loan. Small cash loans are
              typically unsecured loans, which means you don't need to put up
              any collateral to get them. They can be a good option for people
              with less-than-perfect credit or who need money quickly.
            </p>
            
              <Link className="btn" to="/contact">
                APPLY NOW
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashLoan;

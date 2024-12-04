import React from "react";
import Banner from '../Componants/personalLoan_banner'
import About from "../Componants/personalLoan_about";
import Types from '../Componants/personalLoan_types'
import Howtoapply from '../Componants/personalLoan_apply'
import "../Css/PersonalLoan.css";
const PersonalLoan = () => {
  return (
    <div className="personal_loan">
     <Banner />
      <About />
      <Types />
      <Howtoapply />
    </div>
  );
};

export default PersonalLoan;

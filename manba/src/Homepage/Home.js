import React from "react";
import Banner from "../Componants/Homebanner";
import Homeprovide from "../Componants/Homeprovide";
import ChooseUs from "../Componants/ChooseUs";
import Homeservice from "../Componants/Homeservice";
import HomeAchive from "../Componants/HomeAchive";
import CashLoan from "../Componants/CashLoan";
const Home = () => {
  return (
    <div>
      <Banner />
      <Homeprovide />
      <ChooseUs />
      <Homeservice />
      <HomeAchive />
      <CashLoan />
    </div>
  );
};

export default Home;

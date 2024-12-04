import React from 'react'
import '../Css/HomeAchive.css'
import Finance from '../Assets/finance 1.png'
import Team1 from '../Assets/team 1.png'
import Varified from '../Assets/verified 1.png'
import Medal from '../Assets/medal 1.png'
const HomeAchive = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 Achive-content">
            <img src={Finance} alt="" />
            <h2>2179</h2>
            <p>Successful Loan Approval</p>
          </div>
          <div className="col-lg-3 Achive-content">
            <img src={Team1} alt="" />
            <h2>99%</h2>
            <p>Customer Satisfection</p>
          </div>
          <div className="col-lg-3 Achive-content">
            <img src={Varified} alt="" />
            <h2>70+</h2>
            <p>Bank / NBFC's</p>
          </div>
          <div className="col-lg-3 Achive-content">
            <img src={Medal} alt="" />
            <h2>5+</h2>
            <p>Award Winner</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default HomeAchive

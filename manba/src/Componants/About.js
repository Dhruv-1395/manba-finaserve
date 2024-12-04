import React from 'react'
import '../Css/Aboutpage.css'
import { Link } from 'react-router-dom'
import Loan1 from '../Assets/loan1.jpg'
import Money1 from '../Assets/money1.jpg'
import Group from '../Assets/group 1.jpg'
import help from '../Assets/help-web-button 1.jpg'
const About = () => {
  return (
    <>
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 navigate">
              <Link to="/" className='nav-link'>Home</Link>
              <span><i className="fa-solid fa-greater-than"></i></span>
              <h1 className="title">About</h1>
            </div>
          </div>
        </div>
      </div>
      <section className='About '>
        <div className="container ">
          <div className="heading text-center">
            <h1 className="title ">Who We Are</h1>
          </div>
          <p>specialized financial institution that supplies credit for the purchase of consumer goods and services by purchasing the time-sales contracts of merchants or by granting small loans directly to consumers. Specialized consumer finance agencies now operate throughout western Europe, Canada, the United States, Australia, Japan, and some Latin American countries. Although they existed in the early 1900s, their greatest development came after World War II.
          </p>
          <p>
            Large-sales finance companies, which operate by purchasing unpaid customer accounts at a discount from merchants and collecting payments due from consumers, were a response to the need for installment financing for the purchase of automobiles in the early 1900s. Ally Financial, for example, was established as the General Motors Acceptance Corporation (GMAC) in 1919 to purchase automobile accounts receivable from car dealers who were themselves unable to finance time purchases. Many companies in both Europe and the United States continue to specialize in financing purchases of particular commodities and remain closely associated with specific manufacturers. Some also extend credit for wholesale purchases by retail dealers.
          </p>
          <p>
            Consumer finance or small-loan companies also arose in the 1900s. Until then the need for consumer loans had been met primarily by illegal “loan shark” activities because it was unprofitable for banks to make small loans at rates below legally set usury levels. In 1911 several states in the United States began adopting small-loan laws that authorized loans to consumers at rates above usury levels, making it financially practical to operate a consumer loan business. Today many companies engage both in the sales-finance business and in making loans directly to consumers.</p>
        </div>
      </section>
      <section className='Value shadow'>
        <div className="container">
          <h1 className="title text-center">Values</h1>
          <p className='text-center'>Our values are anchored around our business ethics, consumer focus and <br />
            corporate responsibility towards society at large.</p>

          <div className="row create">
            <div className="col-lg-2 text-center">
              <h1>C</h1>
              <h5>Cost-effective & simple</h5>
            </div>
            <div className="col-lg-2 text-center">
              <h1>R</h1>
              <h5>Respect for all</h5>
            </div>
            <div className="col-lg-2 text-center">
              <h1>E</h1>
              <h5>Exemplary governance</h5>
            </div>
            <div className="col-lg-2 text-center">
              <h1>A</h1>
              <h5>Accountability, professionalism & discipline</h5>
            </div>
            <div className="col-lg-2 text-center">
              <h1>T</h1>
              <h5>CTransparency & integrity</h5>
            </div>
            <div className="col-lg-2 text-center">
              <h1>E</h1>
              <h5>Effective teamwork and commitment</h5>
            </div>
          </div>
        </div>
      </section>
      <section className='works'>
        <div className="container">
          <h1 className="title text-center">How it Works</h1>

          <div className="row cards">
            <div className="col-lg-6">
              <div className="card shadow">
                <div className="card-body">
                  <div className="img shadow">
                    <img src={Loan1} alt="" />
                  </div>
                  <h1>Fast Loans</h1>
                  <p>We are always flexible enough to cover all of your financial needs, whichever those might be. Regardless of whether you're about to make a first-time home purchase.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
            <div className="card shadow">
                <div className="card-body">
                  <div className="img shadow">
                    <img src={Money1} alt="" />
                  </div>
                  <h1>Flexible Money</h1>
                  <p>We are always flexible enough to cover all of your financial needs, whichever those might be. Regardless of whether you're about to make a first-time home purchase.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
            <div className="card shadow">
                <div className="card-body">
                  <div className="img shadow">
                    <img src={Group} alt="" />
                  </div>
                  <h1>Seasoned team</h1>
                  <p>We are always flexible enough to cover all of your financial needs, whichever those might be. Regardless of whether you're about to make a first-time home purchase.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
            <div className="card shadow">
                <div className="card-body">
                  <div className="img shadow">
                    <img src={help} alt="" />
                  </div>
                  <h1>Helpful</h1>
                  <p>We are always flexible enough to cover all of your financial needs, whichever those might be. Regardless of whether you're about to make a first-time home purchase.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
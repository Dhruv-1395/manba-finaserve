import React from 'react'

const personalLoan_types = () => {
  return (
    <div className='Loan_types'>
      <div className="container">
      <h1 className="title text-center" style={{ color: "#3498db" }}>Types of Personal Loan</h1>

      <div className="row types">
          <div className="col-lg-6 col-12">
            <ul>
              <li>Wedding Loan</li>
              <li>Medical Emergency Loan</li>
              <li>Personal loan for your child(s) future</li>
              <li>Travel Loan</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12">
            <ul>
              <li>Consumer Durable Loan</li>
              <li>Home Renovation Loan</li>
              <li>Personal Loan for Women</li>
              <li>Personal Loan for Students</li>
              <li>Festival loan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default personalLoan_types

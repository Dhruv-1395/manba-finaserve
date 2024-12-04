import React from 'react'
import applyloan from '../Assets/Applyloan.png'
const personalLoan_apply = () => {
  return (
    <div className='apply'>
      <div className="container">
      <h1 className="title text-center" style={{ color: "#3498db" }}>
      How To Apply For a Personal Loan ?
          </h1>
          <p className='text-center'>Apply for Manba Finance Personal Loan in 3 easy steps – it’s easy, seamless and quick.</p>
          <div className="row step">
            <div className="col-lg-6">
                <img src={applyloan} alt="" />
            </div>
            <div className="col-lg-6 stepArea">
                <div>
                <div className="step">
                    <div className="dot"></div>
                    <div className="d-flex flex-column">
                        <h3>Step 1</h3>
                        <span>Verify personal details</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="step">
                    <div className="dot"></div>
                    <div className="d-flex flex-column">
                        <h3>Step 2</h3>
                        <span>Choose your loan amount and tenure; confirm your bank details</span>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="step">
                    <div className="dot"></div>
                    <div className="d-flex flex-column">
                        <h3>Step 3</h3>
                        <span>Receive the loan amount in your bank account</span>
                    </div>
                </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default personalLoan_apply

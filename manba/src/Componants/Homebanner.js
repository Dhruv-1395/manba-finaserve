import React from 'react'
import '../Css/Homebanner.css'
import { Link } from 'react-router-dom'
const Homebanner = () => {
  return (
    <>
        <div className="home_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h1 className="title">Bring Your Aspirations To Life,</h1>
                        <h1 className="title text_shadow">With A Quick Loan.</h1>
                        <p className='welcome_msg'>Welcome to Manba Finance, where you can find a loan solutioncustomised for your needs.</p>
                        <Link to="/contact" className='btn'>Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homebanner

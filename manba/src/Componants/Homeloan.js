import React from 'react'
import '../Css/Homeloan.css'
import realEstate from '../Assets/real-estate 2.jpg'
import shopping from '../Assets/shopping 1.jpg'
import briefcase from '../Assets/briefcase 2.jpg'
import mortgage from '../Assets/mortgage 1.jpg'
import discount from '../Assets/discount 1.png'
import hour from '../Assets/24-hours-support.png'
import wallet from '../Assets/wallet.png'
import credit from '../Assets/credit-card.png'
const Homeloan = () => {
    return (
        <div className='Homeloan'>
            <div className="banner">
                <div className="container">
                   <h1 className="title">Instant Approval For</h1>
                    <h2 className="title" style={{ color: "#3498db" }}>Home Loan</h2>
                    <p>Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant e-Approval</p>
                </div>
            </div>
            <div className="chooseus shadow">
                <div className="container">
                    <h1 className="title">
                    Reason to Choose us
                    </h1>
                    <p>We offer award-winning, low-rate Home loans with no ongoing fees,saving our customers thousands of Rupee.</p>

                    <div className="easyLowest row">
                        <div className="col-lg-6">
                            <img src={realEstate} alt="" />
                            <h3 className="title">Easy Loan Approvals</h3>
                            <p>Cum sociis natoque penatibus et nis dis parturgnis dis parturient montes, nascetur ridiculus mus..</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={shopping} alt="" />
                            <h3 className="title">Lowest Possible Prices</h3>
                            <p>One of the best ways to get a lower interest rate on your personal loan is to improve your credit score before applying for a loan.</p>
                        </div>
                    </div>
                    <div className="easyLowest row">
                        <div className="col-lg-6">
                            <img src={briefcase} alt="" />
                            <h3 className="title">Hassle free</h3>
                            <p>Suspendisse potenti. Nunc ut tellus iquam imperdiet lacus s aliquam felis tincidunt.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={mortgage} alt="" />
                            <h3 className="title">Secure Loan Processs</h3>
                            <p>Nulla ornare bibendum laoreteger tempus alesuada libero imperdie fermentum senc a ornare risus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tools">
                <div className="container">
                    <h5 className="title">TOOLS TO HELP YOU CHOOSE</h5>
                    <h1 className="title" style={{ color: "#00adef" }}>Why borrow with MultiBank</h1>

                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="box">
                                <img src={discount} alt="" />
                                <h1 className="title">Get interest rate discount</h1>
                                <p>In just 30 minutes, an experienced banker will help you get a .25% interest rate discount with an eligible checking and savings account.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                             <div className="box">
                                <img src={hour} alt="" />
                                <h1 className="title">Exceptional service from specialists</h1>
                                <p>The most significant objective is to project gold loans as a 'Good Smart Option, as against being the Last Option' for seeking financial credit.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                             <div className="box">
                                <img src={wallet} alt="" />
                                <h1 className="title">Convenient payment options</h1>
                                <p>Make your payments quickly and easily through online and mobile banking, by phone or mail, with recurring automatic payments, or in a branch.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                             <div className="box">
                                <img src={credit} alt="" />
                                <h1 className="title">Secure online & mobile banking</h1>
                                <p>Sign on for 24/7 account access to make payments, transfer money, check balances, and view your statements online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeloan
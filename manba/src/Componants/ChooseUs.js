import React from 'react'
import '../Css/ChooseUs.css'
import Aboutimg from '../Assets/HomeAboutimg.png'
import Aboutimg1 from '../Assets/aboutimg1.png'
import Aboutimg2 from '../Assets/aboutimg2.png'
import Aboutimg3 from '../Assets/aboutimg3.png'

const ChooseUs = () => {
  return (
    <div className='content'>
        <div className="container">
        <h1 className="title text-center">Why Choose Us</h1>
        <div className="row main-content">
            <div className="col-lg-6">
                <img src={Aboutimg} className='about' alt="about" />
            </div>
            <div className="col-lg-6">
                <p>At Manba finanserve, we are more than a loan services provider we are your gateway to financial confidence. When you choose us, you're choosing a dedicated team of professionals who are passionate about helping you achieve your financial goals. Your success is our success, and we're excited to embark on this journey with you. We invite you to experience the Manba finanserve difference – where your financial well-being is our top priority.</p>

                <div className="sub-content ">
                    <div className="img">
                        <img src={Aboutimg1} alt="" />
                    </div>
                    <div className="details d-flex flex-column">
                        <h4 className="title fw-bold">Trusted Expertise</h4>
                        <p>With decades of experience in the financial industry, we have earned the trust of countlessindividuals and businesses.</p>
                    </div>
                </div>
                <div className="line-seprete"></div>
                <div className="sub-content ">
                    <div className="img">
                        <img src={Aboutimg2} alt="" />
                    </div>
                    <div className="details d-flex flex-column">
                        <h4 className="title fw-bold">Comprehensive Loan Options</h4>
                        <p>We offer a diverse range of loan products to meet every need. Whether you're looking for a personal loan, a gold loan, home loan, or any other type of loan, we have a solution designed just for you.</p>
                    </div>
                </div>
                <div className="line-seprete"></div>
                <div className="sub-content ">
                    <div className="img">
                        <img src={Aboutimg3} alt="" />
                    </div>
                    <div className="details d-flex flex-column">
                        <h4 className="title fw-bold">Competitive Rates</h4>
                        <p>We believe that access to funds should be affordable. That's why we offer some of the most competitive interest rates in the market. We work tirelessly to ensure that borrowing with us is cost-effective.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ChooseUs

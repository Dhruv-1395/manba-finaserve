import React from 'react'
import '../Css/Homeprovide.css'
import Economy from '../Assets/economy 1.png'
import Investment from '../Assets/invesment 1.png'
import Agreement from '../Assets/agreement 1.png'
import Continuos from '../Assets/continuous 1.png'

const Homeprovide = () => {
  return (
    <div className='Home_provide'>
      <div className="container">
        <div className="row">
            <div className="col-lg-6 contain">
                    <img src={Economy} alt="" />
                    <p>Embark on your loan journey, understanding the right loan type  personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
            </div>
            <div className="col-lg-6 contain">
                    <img src={Investment} alt="" />
                    <p>Embark on your loan journey, understanding the right loan type  personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 contain">
                    <img src={Agreement} alt="" />
                    <p>Embark on your loan journey, understanding the right loan type  personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
            </div>
            <div className="col-lg-6 contain">
                    <img src={Continuos} alt="" />
                    <p>Embark on your loan journey, understanding the right loan type  personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Homeprovide

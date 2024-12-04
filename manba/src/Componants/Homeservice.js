import React from 'react'
import '../Css/Homeservice.css'
import Servicesimg from '../Assets/homeServiceimg.jpg'
const Homeservice = () => {
  return (
    <div className='Home-services'>
        <div className="container">
            <img src={Servicesimg} alt="" />
        </div>
    </div>
  )
}

export default Homeservice

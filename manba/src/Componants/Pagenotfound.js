import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Pagenotfound.css'

const Pagenotfound = () => {
  return (
    <div className="container error-content">
    <div className="error">404</div>
    <div className="message">Oops! Page Not Found</div>
    <div className="suggestion">
      Let's get you back <Link to="/">home</Link>.
    </div>
  </div>
  
  )
}

export default Pagenotfound
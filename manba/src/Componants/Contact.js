import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Css/Contact.css";
import Contactbanner from "../Assets/Contact-Us-Page.png";
import Officeimg from "../Assets/office-building 1(2).jpg";
import Callimg from "../Assets/old-typical-phone 1.jpg";
import Emailimg from "../Assets/email 2.jpg";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [city,setCity] = useState("");
    const [loan,setLoan] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/api/apply",{name,email,message,phone,city,loan})
        .then(result => console.log(result))
        .catch(err => console.log(err));
        setName("");
        setEmail("");
        setMessage("");
        setCity("");
        setPhone("");
    }
  return (
    <div className="contactUs">
      <div className="contact-banner">
        <img src={Contactbanner} alt="contact" />
      </div>
      <div className="container">
        <div className="input-feilds shadow">
          <h1 className="title" style={{ color: "#3498db" }}>
            Get In Touch
          </h1>
          <span>Please contact us or send us an email.</span>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <input type="text" placeholder="Your Name" 
                onChange={(e)=> setName(e.target.value)}
                value={name}
                />
              </div>
              <div className="col-lg-6 col-12">
                <input type="email" placeholder="Your E-mail"
                onChange={(e)=> setEmail(e.target.value)}
                value={email} />
              </div>
              <div className="col-lg-6 col-12">
                <input type="number" placeholder="Number"
                onChange={(e)=> setPhone(e.target.value)}
                value={phone} />
              </div>
              <div className="col-lg-6 col-12">
                <input type="text" placeholder="City" 
                onChange={(e)=> setCity(e.target.value)}
                value={city}/>
              </div>
            </div>
            
          <select name="loan" id="loan" onChange={(e)=> setLoan(e.target.value)}>
            <option value="">----Select Your Loan----</option>
            <option value="Home Loan">Home loan</option>
            <option value="Personal Loan">Personal Loan</option>
          </select>
          <textarea
            className="w-100"
            name="text"
            id="text"
            placeholder="Your Message"
            onChange={(e)=> setMessage(e.target.value)}
            value={message}
          ></textarea>

          <div className="submit-btn w-100 d-flex justify-content-middle">
           <button type="submit" className="button">SUBMIT</button>
          </div>
          </form>

        </div>
        <div className="row help">
          <div className="col-12">
            <h1 className="title">We are here to help you</h1>
            <p>
              Various versions have evolved over the years sometimes by accident
              sometimes on purpose injected humour and the like.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-body">
                <img src={Officeimg} alt="" />
                <h3 className="title">BRANCH OFFICE</h3>
                <span className="adress">312, super diamond market, surat</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-body">
                <img src={Callimg} alt="" />
                <h3 className="title">CALL US AT</h3>
                <span className="adress">+91 22 6212 5000</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-body">
                <img src={Emailimg} alt="" />
                <h3 className="title">EMAIL ADDRESS</h3>
                <span className="adress">Manbafinaserve@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

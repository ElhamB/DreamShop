import React from 'react'
import { Link } from "react-router-dom";
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={[classes.footer, classes['py-5']].join(' ')}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6' >
           <img alt="logo" className={classes["logo-footer"]} src='/images/logo.png'/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore mag na aliqua.
            </p>
            <div className={classes["socialNetworks "]}>
                     <Link to="#" target="_blank" className={classes["social-network"]} ><i className="fa fa-instagram"></i></Link>
                     <Link to="#" target="_blank" className={classes["social-network"]} title=""><i className="fa fa-send-o"></i></Link>
                     <Link to="#" target="_blank" className={classes["social-network"]} title=""><i className="fa fa-facebook"></i></Link>
                  </div>
          </div>
          <div className="pd10sf col-md-3 col-sm-6">
            <h5>Info</h5>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Blog</Link>
              </li>   
              <li>
                <Link to="/aboutus">About us</Link>
              </li>  
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="pd4sf col-md-3 col-sm-6" >
            <h5>Our Polices</h5>
            <ul>
              <li>
                <Link to="/contactus">FAQ</Link>
              </li>
              <li>
                <Link to="/aboutus">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/products">Refund Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-6'>
            <h5>Contact Us</h5>
            <ul className={classes["ul-contact"]}>
              <li><address>1225, Main Street, Iran, 38000</address></li>
              <li><Link to="mailto:dreamshop@example.com">dreamshop@example.com</Link></li>
              <li>8888-333-120</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

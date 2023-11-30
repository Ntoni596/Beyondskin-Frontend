import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
        <div className='spacing'></div>
        <div id='footer'>
            <div className='footer-column'>
                <h3>Services</h3>
                <Link to="/treatments">
                <p>Facials</p>
                </Link>
                <Link to="/treatments">
                <p>Brows & Lashes</p>
                </Link>
                <Link to="/treatments">
                <p>Manicures & Pedicures</p>
                </Link>
                <Link to="/treatments">
                <p>Massages</p>
                </Link>
                <Link to="/treatments">
                <p>Waxing and Laser Hair Removal</p>
                </Link>
                <Link to="/treatments">
                <p>Teeth Whitening</p>
                </Link>
                <Link to="/treatments">
                <p>Exfoliation</p>
                </Link>
                <Link to="/treatments">
                <p>Packages</p>
                </Link>
            </div>
            <div className='footer-column'>
                <h3>About</h3>
                <Link to="/about">
                <p>About Us</p>
                </Link>
                <Link to="/contact">
                <p>Contact</p>
                </Link>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <h3>Contact</h3>
                <p>04 894 3880</p>
                <a href="mailto:bookings@beyondskin.care">bookings@beyondskin.care</a>
                <div className='group-text-small'>
                <p>Asteron Centre</p>
                <p>61a Featherston Street</p>
                <p>Wellington, 6011</p>
                </div>
            </div>
            <div className='footer-column mobile-center-footer'>
                <div className='group-text'>
                <p>Asteron Centre</p>
                <p>61a Featherston Street</p>
                <p>Wellington, 6011</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5118.219727163335!2d174.7764430131901!3d-41.28021873987453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38ae2c7a8955ef%3A0x68fa761a9d8b6171!2sBeyond%20Skin%20Wellbeing%20Medical%20Spa!5e1!3m2!1sen!2sau!4v1734343871869!5m2!1sen!2sau" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </>
  )
}

export default Footer
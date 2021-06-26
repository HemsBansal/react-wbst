import React from "react";
import {Link} from 'react-router-dom'
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to the newsletter.
        </p>
        <p className="footer-subscription-text">
          Join the Advertise newsletter to recieve our best website deals.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="footer-links">
      <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Tesimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms & Conditions</Link>
          </div>

          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Tesimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms & Conditions</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Tesimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms & Conditions</Link>
          </div>

          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Tesimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms & Conditions</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Tesimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms & Conditions</Link>
          </div>

          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Tesimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms & Conditions</Link>
          </div>
        </div>

        
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              WBST <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>WBST &copy; 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' target='_blank' to='/'>
              <i className='fab fa-facebook'/>
            </Link>

            <Link className='social-icon-link twitter' target='_blank' to='/'>
              <i className='fab fa-twitter'/>
            </Link>
            <Link className='social-icon-link instagram' target='_blank' to='/'>
              <i className='fab fa-instagram'/>
            </Link>
            <Link className='social-icon-link linkedin' target='_blank' to='/'>
              <i className='fab fa-linkedin'/>
            </Link>
            <Link className='social-icon-link youtube' target='_blank' to='/'>
              <i className='fab fa-youtube'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

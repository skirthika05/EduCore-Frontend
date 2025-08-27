import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 EduCore a E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href=""></a>
        </p>
        <div className="social-links">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

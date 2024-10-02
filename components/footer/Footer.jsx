/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Deepanshu Maan/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                {/* <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li> */}
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/deepanshumaanjaat/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://x.com/DeepanshuMaan12" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>

                <a href="https://github.com/Deepanshuman7" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                {/* <a href="https://www.linkedin.com/in/deepanshu-maan-ab8060241/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedIn"></i>
                </a>

                <a href="https://leetcode.com/u/Deepanshumaan7/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-leetcode"></i>
                </a> */}
            </div>

            <span className="footer__copy">&#169; Deepanshu Maan. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
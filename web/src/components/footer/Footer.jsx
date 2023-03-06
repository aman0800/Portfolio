import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aman</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/Aman.Dhiman.0800/" className="footer__social-link"target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/aman_dhiman_ad" className="footer__social-link"target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/aman0800" className="footer__social-link"target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169;  Aman Dhiman. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
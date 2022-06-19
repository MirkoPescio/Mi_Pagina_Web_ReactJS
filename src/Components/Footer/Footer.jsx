import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content__yo">
          <h2>Mis redes</h2>
        </div>
        <div className="footer__content__media">
          <a
            href="https://github.com/MirkoPescio"
            className="footer__content__media__icon"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mirko-pescio-7ab632180/"
            className="footer__content__media__icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/MirkoPescio099"
            className="footer__content__media__icon"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="
            https://wa.me/5491158069635"
            className="footer__content__media__icon"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/mirkopescio/"
            className="footer__content__media__icon"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__copyright">
        <p>
          Copyright <i className="bx bx-copyright"></i> 2022 portfolio personal
        </p>
      </div>
    </footer>
  );
};

export default Footer;

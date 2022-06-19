import React from "react";
import "./About.css";
import resumen from "../../assets/Images/html-css-js-wallpaper-1.webp";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__img">
        <img src={resumen} alt="html-css-js-resumen" />
      </div>
      <div className="about__text">
        <h3>Acerca de mí</h3>
        <p>
          Soy Desarrollador Front-End Junior de ReactJS formado con los cursos
          de CoderHouse. Soy de Buenos Aires, Argentina. Estoy atento a
          cualquier consulta para trabajos FreeLancer y/o profesional
        </p>
        <div className="about__text__count">
          <p href="/" className="about__text__count__projects">
            <span>8</span> Projectos Completados
          </p>
        </div>
        <div className="about__text__main-btn">
          <a href="#contact" className="about__text__main-btn">
            Contacto
          </a>
          <a
            href="https://github.com/MirkoPescio?tab=repositories"
            className="about__text__main-btn"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

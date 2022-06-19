import React from "react";
import "./Resume.css";
import certificadoDW from "../../assets/Images/Mirko-Desarrollo-Web.png";
import certificadoJS from "../../assets/Images/Mirko-Javascript.png";
import certificadoReact from "../../assets/Images/Mirko-React-JS.png";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume__center">
        <h3>Educación y experiencia</h3>
      </div>
      <div className="resume__content">
        <div className="resume__content__box">
          <h6>Desde 2021</h6>
          <h4>Desarrollo Web</h4>
          <p>
            Prácticas con HTML5 y CSS3 complementado con librerías y frameworks
            de css y js como Bootstrap. También la optimización y organización
            en la escritura de css con sass. Y por último el hosting de la
            página web con github pages, netlify o vercel.
          </p>
          <a href={certificadoDW} download>
            <span>Descargar Certificado</span>
          </a>
        </div>
        <div className="resume__content__box">
          <h6>Desde 2021</h6>
          <h4>JavaScript</h4>
          <p>
            Empezando con algoritmos y avanzando con librerías como JQuery para
            la validación de formularios o para optimizar funciones. También el
            uso de APIs, como MercadoPago para generar pagos en el caso de un
            E-Commerce
          </p>
          <a href={certificadoJS} download>
            <span>Descargar Certificado</span>
          </a>
        </div>
        <div className="resume__content__box">
          <h6>Desde 2022</h6>
          <h4>React JS</h4>
          <p>
            Librería creada por Facebook para el desarrollo de páginas Web con
            funciones complementarias exclusivas de la librería. También con el
            fin de organizar de forma más efectiva y dinámica el html, css, js y
            el uso de otros frameworks.
          </p>
          <a href={certificadoReact} download>
            <span>Descargar Certificado</span>
          </a>
        </div>
        <div className="resume__content__box">
          <h6>Desde 2021</h6>
          <h4>Algoritmos en Python</h4>
          <p>
            Tengo hechos en Python, aprendidos en la facultad de ingeniería de
            Buenos Aires (FIUBA), así como también el juego del ahorcado en mi
            repositorio de Github.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;

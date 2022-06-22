import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__center">
        <h3>MIS PROYECTOS</h3>
      </div>
      <div className="services__content">
        <div className="services__content__row">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-sass"></i>
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-bootstrap"></i>
          <h4>Proyecto de desarrollo Web (Coderhouse)</h4>
          <p>
            Argenlocución. Página de diseño con prácticas aplicadas de HTML5,
            CSS3, SASS y Bootstrap
          </p>
          <div className="services__content__row__links-div">
            <a
              href="https://mirkopescio.github.io/Proyecto_Desarrollo_Web_CoderHouse/"
              className="first-link"
            >
              <span>Ir a la página</span>
            </a>
            <a href="https://github.com/MirkoPescio/Proyecto_Desarrollo_Web_CoderHouse">
              <span>Ir al código</span>
            </a>
          </div>
        </div>

        <div className="services__content__row">
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-jquery"></i>
          <i className="bx bxs-file-json"></i>
          <h4>Proyecto de JavaScript (Coderhouse)</h4>
          <p>
            E-Commerce de videojuegos con procesamiento de pagos usando
            MercadoPago. Usando también las librerías de JQuery y Bootstrap.
          </p>
          <div className="services__content__row__links-div">
            <a
              href="https://mirkopescio.github.io/JavaScript_proyecto_final_CoderHouse/"
              className="first-link"
            >
              <span>Ir a la página</span>
            </a>
            <a href="https://github.com/MirkoPescio/JavaScript_proyecto_final_CoderHouse">
              <span>Ir al código</span>
            </a>
          </div>
        </div>

        <div className="services__content__row">
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-react"></i>
          <h4>Proyecto de React JS (Coderhouse)</h4>
          <p>
            E-Commerce de productos de electrónica con procesamiento de pagos
            usando MercadoPago. También usa frameworks como Bootstrap y
            SweetAlert para mostrar notificaciones.
          </p>
          <div className="services__content__row__links-div">
            <a
              href="https://mirkopesciodigitalbuy.netlify.app/"
              className="first-link"
            >
              <span>Ir a la página</span>
            </a>
            <a href="https://github.com/MirkoPescio/Nuevo_Proyecto_de_React_CoderHouse">
              <span>Ir al código</span>
            </a>
          </div>
        </div>

        <div className="services__content__row">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-bootstrap"></i>
          <h4>Maquetación E-Commerce (comida)</h4>
          <p>
            Maquetación genérica de un e-commerce de comida. Adaptado tanto para
            computadoras como para dispositivos móviles.
          </p>
          <div className="services__content__row__links-div">
            <a
              href="https://fastfood-mirkopescio.netlify.app/"
              className="first-link"
            >
              <span>Ir a la página</span>
            </a>
            <a href="https://github.com/MirkoPescio/Pagina-de-comida-maquetado-web-">
              <span>Ir al código</span>
            </a>
          </div>
        </div>

        <div className="services__content__row">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
          <h4>Maquetación web convencional</h4>
          <p>
            Práctica de maquetación web genérica y adaptada para cualquier
            dispositivo.
          </p>
          <div className="services__content__row__links-div">
            <a
              href="https://web-mirko-convencional.netlify.app/"
              className="first-link"
            >
              <span>Ir a la página</span>
            </a>
            <a href="https://github.com/MirkoPescio/Maquetacion_web_convencional">
              <span>Ir al código</span>
            </a>
          </div>
        </div>

        <div className="services__content__row">
          <i className="bx bxl-python"></i>
          <h4>Juego del Ahorcado (Multijugador)</h4>
          <p>
            Juego del ahorcado (Multijugador) programado en Python el cual,
            puede ser ejecutado desde la consola del editor de código. Hecho en
            un trabajo práctico grupal de la facultad (FIUBA) Algoritmos y
            Programación 1.
          </p>
          <div className="services__content__row__links-div">
            <a href="https://github.com/MirkoPescio/Juego-del-ahorcado-multijugador-en-Python">
              <span>Ir al código</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./Home.css";
import miFoto from "../../assets/Images/yo-3.jpg";
import curriculum from "../../assets/Mirko_Pescio-2022.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text">
        <h4>Hola, soy</h4>
        <h2 className="home__text__h2">Mirko Pescio</h2>
        <h6>
          Soy <span>FrontEnd React Developer</span>
        </h6>
        <p>
          Hago maquetación de páginas web usando HTML5, CSS3, SASS, Javascript y
          React JS. Sean páginas personales, intitucionales o E-Commerce.
        </p>
        <a href={curriculum} download className="home__text__btn">
          Descargar CV
        </a>
      </div>

      <div className="home__img">
        <img src={miFoto} alt="Foto-personal" />
      </div>
    </section>
  );
};

export default Home;

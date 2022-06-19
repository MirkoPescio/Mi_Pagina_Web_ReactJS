import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-center">
        <h3>Contacto vía E-Mail</h3>
      </div>
      <div className="contact-form">
        <form action="https://formsubmit.co/49b39e5c02c0fdb4ec8de020be46e37b" method="POST">
          <input type="text" name="name" id="name" placeholder="Nombre" required />
          <input type="email" name="email" id="email" placeholder="E-Mail" required />
          <input type="text" name="subject" id="subject" placeholder="Asunto" required />
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Descripción de la consulta"
            required
          ></textarea>
          <input type="submit" name="send" value="Enviar" className="send-btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import "../../assets/css/TextAboutUs.css";
import { Container } from "react-bootstrap";
import { SobreNosotros } from "../../data/AboutUs";
import nosotrosImg from "../../assets/img/nosotros.jpg";

const TextAboutUs: React.FC = () => {
  return (
    <>
      <section id="nosotros" className="bg-white py-5">
        <Container>
          {SobreNosotros.map((item, index) => (
            <div key={index} className="mb-5 text-center">
              <h2 className="mb-3">{item.title}</h2>
              <p className="text-justify mx-auto" style={{ maxWidth: "900px", lineHeight: "1.8rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section id="nosotros">
        <div className="text-center">
          <h1>¡Bienvenido a nuestra familia!</h1>
          <img src={nosotrosImg} alt="Nosotros" className="img-fluid rounded"/>
        </div>
      </section>
    </>
  );
};

export default TextAboutUs;
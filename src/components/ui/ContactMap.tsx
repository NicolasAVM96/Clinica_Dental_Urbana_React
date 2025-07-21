import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
const MapContact: React.FC = () => {
  return (
    <section className="contact">
      <Container>
        <Row className="mt-5 mb-5">
          {/* Mapa de ubicación */}
          <Col md={6} className="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3323.722812244746!2d-70.580475!3d-33.5865455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d718a032972d%3A0x45da5699698e2261!2sINACAP%20Puente%20Alto!5e0!3m2!1ses!2scl!4v1750092574071!5m2!1ses!2scl"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Clínica Dental Urbana"
            ></iframe>
          </Col>

          {/* Información de contacto */}
          <Col md={6}>
            <h2>¿Deseas una sonrisa sana?</h2>
            <p className="text-muted">
              Ven a visitarnos en Av. Concha y Toro 2730, Puente Alto, Región Metropolitana.
            </p>
            <p className="text-muted">Horario de atención:</p>
            <Table bordered>
              <tbody>
                <tr>
                  <td>Lunes - Viernes</td>
                  <td>09:00 - 19:00 h</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>09:00 - 14:00 h</td>
                </tr>
                <tr>
                  <td>Domingo y Festivos</td>
                  <td>Cerrado</td>
                </tr>
              </tbody>
            </Table>

            <p className="text-muted">Comunícate con nosotros:</p>
            <Table bordered>
              <tbody>
                <tr>
                  <td>Teléfonos</td>
                  <td>+56 9 1234 5678 / +56 9 8765 4321</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>contacto@clinicadentalurbana.cl</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapContact;

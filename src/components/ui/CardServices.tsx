import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/CardServices.css";
import { servicios } from "../../data/services";



const CardServices: React.FC = () => {
  return (
    <section>
      <Container className="mt-5">
        <Row>
          {servicios.map((serv, index) => (
            <Col key={index} md={4} className="mb-4">
              <Link to="/Contáctenos" className="text-decoration-none text-dark">
                <Card className="h-100 shadow">
                  <Card.Img variant="top" src={serv.img} alt={serv.title} className="card-img-top" />
                  <Card.Body>
                    <Card.Title>{serv.title}</Card.Title>
                    <Card.Text>{serv.desc}</Card.Text>
                    <p><strong>Desde:</strong> {serv.precio}</p>
                    {serv.detalles.map((d, i) => (
                      <p className="text-muted" key={i}><small>{d}</small></p>
                    ))}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CardServices;

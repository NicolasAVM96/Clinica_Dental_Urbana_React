import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/CardServices.css";
import { servicios } from "../../data/FuturedServices";
 

//Componente que renderiza los servicios destacados
const CardFuturedServices: React.FC = () => {
  return (
    <section className="py-5" id="services">
      <Container className="text-center">
        <h2 className="mb-4">Nuestros Servicios Destacados</h2>
        <Row>
          {servicios.map((serv, index) => (
            <Col key={index} md={4} className="mb-3">
              <Card className="h-100">
                <Card.Img 
                    variant="top" 
                    src={serv.img} 
                    alt={serv.title} 
                    className="card-img-top" 
                />
                <Card.Body>
                  <Card.Title>{serv.title}</Card.Title>
                  <Card.Text>{serv.desc}</Card.Text>
                  <Link to="/Contáctenos" className="btn btn-primary mt-2">
                    Agendar Cita
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CardFuturedServices;

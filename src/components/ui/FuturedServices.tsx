import { Card, Container, Row, Col } from "react-bootstrap";
import ortodoncia from "../../assets/img/servicios_destacados/ortodoncia.jpg";
import implante from "../../assets/img/servicios_destacados/implante.jpg";
import blanqueamiento from "../../assets/img/servicios_destacados/blanqueamiento.jpg";
import { Link } from "react-router-dom";
import "../../assets/css/FuturedServices.css";

//Se crea un arreglo de objetos para los servicios destacados
//Cada objeto contiene la imagen, título y descripción del servicio
const servicios = [
  {
    img: ortodoncia,
    title: "Ortodoncia",
    desc: "Corrección de la posición dental para una sonrisa alineada.",
  },
  {
    img: implante,
    title: "Implantes Dentales",
    desc: "Soluciones permanentes para dientes perdidos.",
  },
  {
    img: blanqueamiento,
    title: "Blanqueamiento",
    desc: "Recupera el brillo y color natural de tus dientes.",
  },
];

//Componente que renderiza los servicios destacados
const ServiciosDestacados: React.FC = () => {
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

export default ServiciosDestacados;

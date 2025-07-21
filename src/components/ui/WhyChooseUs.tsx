import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/WhyChooseUs.css";
import { BiHeart, BiChip, BiGroup, BiCreditCard, BiMap } from "react-icons/bi";

const WhyChooseUs: React.FC = () => {
  return (
    <section id="porque_elegirnos" className="py-5">
      <Container className="text-center">
        <h2 className="mb-4 display-4">
          ¿Por qué elegir Clínica Dental Urbana?
        </h2>
        <Row>
          <Col md={2} className="offset-md-1 mb-4">
            <BiHeart size={48} />
            <p className="mt-2">
              +5.000 Implantes instalados<br />+35.000 procedimientos
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <BiChip size={48} />
            <p className="mt-2">Tecnología de Vanguardia 3D</p>
          </Col>

          <Col md={2} className="mb-4">
            <BiGroup size={48} />
            <p className="mt-2">+20 años de experiencia</p>
          </Col>

          <Col md={2} className="mb-4">
            <BiCreditCard size={48} />
            <p className="mt-2">12 cuotas sin interés</p>
          </Col>

          <Col md={2} className="mb-4">
            <BiMap size={48} />
            <p className="mt-2">Cerca del Metro</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

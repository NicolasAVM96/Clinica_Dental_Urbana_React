import { Container, Row, Col } from "react-bootstrap";
import { BiPhone, BiTimeFive, BiMap} from "react-icons/bi";
import "../../assets/css/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* Contacto */}
          <Col md={4}>
            <h5 className="font-weight-bold">Contacto</h5>
            <BiPhone className="icono-footer"/>
            <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
            <p><strong>Teléfono:</strong> +56 9 8765 4321</p>
            <p><strong>Email:</strong> contacto@clinicadentalurbana.cl</p>
          </Col>

          {/* Horarios */}
          <Col md={4}>
            <h5 className="font-weight-bold">Horario de Atención</h5>
            <BiTimeFive className="icono-footer"/>
            <p>Lunes a Viernes: 09:00 - 19:00 hrs</p>
            <p>Sábados: 09:00 - 14:00 hrs</p>
            <p>Domingos y festivos: Cerrado</p>
          </Col>

          {/* Ubicación */}
          <Col md={4}>
            <h5 className="font-weight-bold">Ubicación</h5>
            <BiMap className="icono-footer"/>
            <p><strong>Dirección:</strong> Av. Concha y Toro 2730, Puente Alto, Región Metropolitana</p>
            <p>Estación de Metro Protectora de la Infancia</p>
          </Col>
        </Row>

        {/* Línea inferior */}
        <div className="text-center mt-1">
          <p>&copy; 2025 Clínica Dental Urbana. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

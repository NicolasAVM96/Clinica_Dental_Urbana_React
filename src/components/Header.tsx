import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import "@fontsource/oswald/400.css";


const Header: React.FC = () => {

  const styleColorHeader: React.CSSProperties = {
      backgroundColor: "#ffffffff",
    };  
    
  const styleText: React.CSSProperties = {
      color: "#222",
      fontFamily: "Oswald, sans-serif"
    };

  return (
    <Navbar style={styleColorHeader} variant="light" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center" style={styleText}>
          <img
            src={logo}
            alt="Clinica dental Urbana"
            style={{ height: "40px"}}
          />
          Clinica dental Urbana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-black">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Servicios">
              Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Sobre Nosotros">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contáctenos">
              Contáctenos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

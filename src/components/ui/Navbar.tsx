import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";


const TopNavbar: React.FC = () => {

  const styleColorHeader: React.CSSProperties = {
      backgroundColor: "#ffffffff",
    };  
    
  return (
    <Navbar style={styleColorHeader} variant="light" expand="lg" className="px-5">
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
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
    </Navbar>
  );
};

export default TopNavbar;

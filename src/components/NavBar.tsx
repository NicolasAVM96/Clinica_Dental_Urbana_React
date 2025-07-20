import logo from '../assets/images/logo.jpg'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src={logo}
              alt="Logo Clínica Dental"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            Clinica dental Urbana
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Contactenos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
import Carousel from 'react-bootstrap/Carousel';
import instalaciones_comodas from '../assets/images/carousel/instalaciones_comodas.jpg';
import atencion_profesional from '../assets/images/carousel/atencion_profesional.png';
import tecnologia_vanguardia from '../assets/images/carousel/tecnologia_vanguardia.jpg';
import '../assets/css/Carousel.css';

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item className="Carousel.Item">
        <img
          className="d-block w-100"
          src={atencion_profesional}
          alt="Atención profesional"
        />
        <Carousel.Caption className="carousel-caption">
          <h5>Atención profesional</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel.Item">
        <img
          className="d-block w-100"
          src={instalaciones_comodas}
          alt="Instalaciones cómodas"
        />
        <Carousel.Caption className="carousel-caption">
          <h5>Instalaciones cómodas</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel.Item">
        <img
          className="d-block w-100"
          src={tecnologia_vanguardia}
          alt="Tecnología de vanguardia"
        />
        <Carousel.Caption className="carousel-caption">
          <h5>Tecnología de vanguardia</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
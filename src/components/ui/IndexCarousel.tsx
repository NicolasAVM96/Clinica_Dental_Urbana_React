import { Carousel } from "react-bootstrap";
import instalaciones_comodas from '../../assets/img/carousel/instalaciones_comodas.jpg';
import atencion_profesional from '../../assets/img/carousel/atencion_profesional.png';
import tecnologia_vanguardia from '../../assets/img/carousel/tecnologia_vanguardia.jpg';
import "../../assets/css/IndexCarousel.css"

// Se ingresan las imágenes del carrusel como propiedades opcionales
interface CarouselProps {
  images?: {
    src: string;
    alt: string;
    label?: string;
    description?: string;
  }[];
}

const IndexCarousel: React.FC<CarouselProps> = ({ images }) => {
  const defaultImages = [
    {
      src: atencion_profesional,
      alt: "Atenbción profesional",
      label: "Confía en expertos con años de experiencia.",
      description: "Disfruta de un espacio diseñado para tu confort.",
    },
    {
      src: tecnologia_vanguardia,
      alt: "Tecnología de Vanguardia",
      label: "Equipamiento moderno para tu salud dental.",
      description: "Nos adaptamos a tus necesidades con tecnología avanzada.",
    },
    {
      src: instalaciones_comodas,
      alt: "Instalaciones Cómodas",
      label: "Ambiente cálido y acogedor para tu tranquilidad.",
      description: "Tu bienestar es nuestra prioridad, desde el primer momento.",
    },
  ];

  const carouselImages = images && images.length > 0 ? images : defaultImages;

  return (
      <Carousel interval={3000} pause="hover">
        {carouselImages.map((image, idx) => (
          <Carousel.Item key={idx} style={{ position: "relative" }}>
            <div className="carousel-overlay"></div>
            <img
              className="d-block w-100 carousel-img"
              src={image.src}
              alt={image.alt}
            />
            {image.label && (
              <Carousel.Caption className="carousel-caption-custom">
                <h5>{image.label}</h5>
                <p>{image.description}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
  );
};


export default IndexCarousel;
import { Carousel } from "react-bootstrap";
import instalaciones_comodas from "../../assets/img/carousel/instalaciones_comodas.jpg";
import atencion_profesional from "../../assets/img/carousel/atencion_profesional.png";
import tecnologia_vanguardia from "../../assets/img/carousel/tecnologia_vanguardia.jpg";
import "../../assets/css/IndexCarousel.css";

// Props opcionales para personalizar las imágenes del carrusel
interface CarouselProps {
  images?: {
    src: string; // Ruta de la imagen
    alt: string; // Texto alternativo para accesibilidad
    label?: string; // Título o encabezado de la imagen
    description?: string; // Descripción adicional
  }[];
}

// Componente principal del carrusel de la página de inicio
const IndexCarousel: React.FC<CarouselProps> = ({ images }) => {
  // Imágenes por defecto si no se pasan por props
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
      description:
        "Tu bienestar es nuestra prioridad, desde el primer momento.",
    },
  ];

  // Elige las imágenes a mostrar: si se reciben por props, usa esas; si no, usa las imágenes por defecto
  const carouselImages = images && images.length > 0 ? images : defaultImages;

  // Renderiza el carrusel con las imágenes seleccionadas
  return (
    <Carousel interval={3000} pause="hover">
      {/* Recorre cada imagen y crea un slide */}
      {carouselImages.map((image, idx) => (
        <Carousel.Item key={idx} style={{ position: "relative" }}>
          {/* Overlay para efecto visual (puedes personalizar en CSS) */}
          <div className="carousel-overlay"></div>
          {/* Imagen principal del slide */}
          <img
            className="d-block w-100 carousel-img"
            src={image.src}
            alt={image.alt}
          />
          {/* Muestra el caption si existe label */}
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

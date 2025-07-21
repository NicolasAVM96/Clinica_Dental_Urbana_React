import ortodoncia from "../assets/img/servicios_destacados/ortodoncia.jpg";
import implante from "../assets/img/servicios_destacados/implante.jpg";
import blanqueamiento from "../assets/img/servicios_destacados/blanqueamiento.jpg";

//Se crea un arreglo de objetos para los servicios destacados
//Cada objeto contiene la img, título y descripción del servicio
export const servicios: Servicio[] = [
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

export interface Servicio {
  title: string;
  desc: string;
  img: string;
}
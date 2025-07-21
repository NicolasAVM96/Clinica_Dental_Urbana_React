import ortodoncia from "../assets/img/servicios_destacados/ortodoncia.jpg";
import implante from "../assets/img/servicios_destacados/implante.jpg";
import blanqueamiento from "../assets/img/servicios_destacados/blanqueamiento.jpg";
import diseño_sonrisa_digital from "../assets/img/servicios_destacados/diseño_sonrisa_digital.jpg";
import emergencias_dentales from "../assets/img/servicios_destacados/emergencias_dentales.jpg";
import limpieza from "../assets/img/servicios_destacados/limpieza.jpg";

//Se crea un arreglo de objetos para los servicios destacados
//Cada objeto contiene la img, título y descripción del servicio
export const servicios: Servicio[] = [
  {
    title: "Ortodoncia",
    desc: "Corrección de la posición dental con frenillos tradicionales o invisibles.",
    precio: "$450.000 CLP",
    detalles: [
      "Incluye controles mensuales",
      "Evaluación previa requerida.",
      "Valor estimado puede variar según diagnóstico."
    ],
    img: ortodoncia,
  },
  {
    title: "Implante",
    desc: "Solución permanente para reemplazar piezas dentales perdidas mediante implantes de titanio.",
    precio: "$800.000 CLP",
    detalles: ["Evaluación previa requerida.", "No incluye corona."],
    img: implante,
  },
  {
    title: "Blanqueamiento",
    desc: "Tratamiento estético para aclarar el color de los dientes de forma segura y eficaz.",
    precio: "$120.000 CLP",
    detalles: ["Evaluación previa requerida.", "No recomendado para menores de 18 años."],
    img: blanqueamiento,
  },
  {
    title: "Limpieza y Profilaxis",
    desc: "Eliminación de placa bacteriana y sarro para mantener una buena salud bucal.",
    precio: "$35.000 CLP",
    detalles: ["Duración aproximada de 30 minutos.", "Recomendado cada 6 meses."],
    img: limpieza,
  },
  {
    title: "Diseño Sonrisa Digital",
    desc: "Simulación 3D personalizada del resultado estético antes de iniciar el tratamiento.",
    precio: "$60.000 CLP",
    detalles: ["Descontable del tratamiento total si continua."],
    img: diseño_sonrisa_digital,
  },
  {
    title: "Emergencias Dentales",
    desc: "Atención inmediata para el dolor intenso, fracturas dentales o infecciones.",
    precio: "$25.000 CLP",
    detalles: ["Costo base. No incluye procedimientos adicionales."],
    img: emergencias_dentales,
  },
];

export interface Servicio {
  title: string;
  desc: string;
  precio: string;
  detalles: string[];
  img: string;
}
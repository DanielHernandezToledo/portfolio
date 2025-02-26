import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Soy un apasionado desarrollador web Full Stack con habilidad para crear aplicaciones web robustas y escalables. Con experiencia práctica en el desarrollo de soluciones tecnológicas, he perfeccionado mis habilidades en tecnologías frontend como React, Bootstrap y Tailwind CSS, así como en backend utilizando Laravel, Node.js, MySQL y PostgreSQL. Además, cuento con experiencia en soporte TI, gestionando bases de datos, respaldos y digitalización de procesos empresariales. Mi objetivo es aprovechar mi conocimiento para crear soluciones innovadoras que impulsen el crecimiento del negocio y ofrezcan experiencias excepcionales a los usuarios.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Encargado de Soporte TIC",
    company: "Transporte y Logística Avanti",
    description: `Encargado del área tecnológica de la empresa. Las principales tareas fueron la administración de Windows server, gestion de software internos/externos, mantenimiento de página web, configuraciones de red y soporte a usuarios tanto de la empresa como clientes.`,
    technologies: ["PHP", "Laravel", "Linux", "Windows Server"],
  },
  {
    year: "2022",
    role: "Desarrollador Web",
    company: "Lealtad 360",
    description: `Creación de paginas y aplicaciones web conPHP/Laravel como backend y JQuery como frontend.`,
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Ajax"],
  }
];

export const PROJECTS = [
  {
    title: "Safety Partners",
    image: project1,
    description:
      "Landing Page responsiva creada con los componentes y secciones indicados por el cliente. La página cuenta con funcionalidades entregadas por Bootstrap y tene la opción de contacto por Whatsapp.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    url: "https://safetypartners.cl/"
  },
  {
    title: "Mamma Mia",
    image: project2,
    description:
      "Pizzeria con carrito de compras creada con React y gestionado con local storage para hacerlo persistente.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    url: "https://mammamiadaht.netlify.app/Home"
  },
  {
    title: "GuitarStore",
    image: project3,
    description:
      "Tienda de Guitarras con carrito de compras gestionado con local storage para persistencia y crada con React para lograr el dinamismo de esta.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    url: "https://danielhernandezguitarll.netlify.app/"
  },
  {
    title: "Fresh Coffee",
    image: project4,
    description:
      "Tienda de venta de alimentos construida con opción de carrito de compras gestionado con React y control de usuarios gestionados con Laravel.",
    technologies: ["HTML", "CSS", "React", "Laravel", "Tailwind"],
    url: "https://quioscoreactdaht.netlify.app/"
  },
];

export const CONTACT = {
  address: "Coronel, Chile",
  email: "daniel.aht1993@gmail.com",
};

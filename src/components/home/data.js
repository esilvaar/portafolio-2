import { SiReact, SiNodedotjs, SiPython, SiPostgresql, SiDocker } from "react-icons/si";
export const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export const techStack = ["React", "Node.js", "Python", "PostgreSQL", "Docker"];

export const projects = [
  {
    title: "Sistema interno para Universidad Autónoma ",
    tags: ["React", "Python",  "Microservicios", "Docker"],
    description:
      "Plataforma para gestionar registros de asistencia en ayudantias y tutorias universitarias. Permite a estudiantes y profesores llevar un control eficiente de la participación académica complementado con un dashboard de estadísticas.",
    web: "https://ua.esilva.xyz/login",
  },
  {
    title: "Sistema de gestión de ventas de rifa",
    tags: ["react", "Firebase"],
    description:
      "Sistema interno de gestion de ventas de rifa para un club de pesca, con un panel de visualización pública en donde se pueden realizar reservaciones de numeros que en el panel de administracion se pueden aceptar o liberar por el vendedor.",
    web: "https://rifa.cdpcriotolten.online",
  },
  
];

export const skills = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
];

export const experience = [
  {
    role: "Desarrollador Frontend – Sistema de Asistencia",
    place: "Proyecto personal / académico",
    period: "2025 - Actualidad",
    detail:
      "Diseño e implementación de un sistema de gestión de asistencia, incluyendo desarrollo frontend, backend, autenticación de usuarios y manejo de base de datos.",
  },
  {
    role: "Practicante de Infraestructura y Cloud",
    place: "Anacondaweb S.A",
    period: "Dic 2025 - Feb 2026",
    detail:
      "Participación en entornos de infraestructura cloud y datacenter, apoyando en la administración de servidores, monitoreo de servicios y resolución de incidencias en plataformas web.",
  },
];

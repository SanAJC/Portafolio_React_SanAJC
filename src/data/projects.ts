import imgDjango from '../assets/django.svg';
import imgReact from '../assets/react.svg';
import imgNode from '../assets/nodejs.svg';
import imgExpress from '../assets/expressjs_dark.svg';
import imgPostgres from '../assets/postgresql.svg';
import imgTypescript from '../assets/typescript.svg';
import imgTailwind from '../assets/tailwindcss.svg';
import imgPython from '../assets/python.svg';
import imgMysql from '../assets/mysql.svg';
import imgMongoDB from '../assets/mongodb.svg';
import imgFirebase from '../assets/firebase.svg';
import imgHtml from '../assets/html5.svg';
import imgCss from '../assets/css_old.svg';
import imgDocker from '../assets/docker.svg';
import imgRedSocial from '../assets/redsocial.png';
import imgJavaScript from '../assets/javascript.svg';
import imgAzure from '../assets/azure.svg';
import imgRedis from '../assets/redis.svg';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';

import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';

import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';
import img17 from '../assets/17.jpg';
import img18 from '../assets/18.jpg';
import img19 from '../assets/19.jpg';
import img20 from '../assets/20.jpg';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.jpg';

import img23 from '../assets/23.jpg';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.jpg';
import img26 from '../assets/26.jpg';
import img27 from '../assets/27.jpg';

import img28 from '../assets/28.jpeg';
import img29 from '../assets/29.jpeg';
import img30 from '../assets/30.jpeg';
import img31 from '../assets/31.jpeg';
import img32 from '../assets/32.jpeg';
import img33 from '../assets/33.jpeg';

import img34 from '../assets/34.jpeg';
import img35 from '../assets/35.jpeg';
import img36 from '../assets/36.jpeg';
import img37 from '../assets/37.jpeg';
import img38 from '../assets/38.jpeg';
import img39 from '../assets/39.jpeg';
import img40 from '../assets/40.jpeg';
import img41 from '../assets/41.jpeg';
import img42 from '../assets/42.jpeg';
import img43 from '../assets/43.jpeg';


export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  technologies: {
    name: string;
    icon: string;
  }[];
  images: string[];
  url_repo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Software de Monitoreo de Consumo Energético",
    role: "Desarrollador Full Stack",
    description: "Software de monitoreo de consumo energético que permite a los usuarios gestionar y visualizar sus datos de consumo en tiempo real, con gráficos interactivos y alertas en tiempo real en el Hotel Kamila.",
    technologies: [
      { name: "React", icon: imgReact },
      { name: "Node.js", icon: imgNode },
      { name: "Django", icon: imgDjango },
      { name: "Python", icon: imgPython },
      { name: "PostgreSQL", icon: imgPostgres },
      { name: "Redis", icon: imgRedis },
    ],
    images: [img28, img29, img30, img31, img32, img33],
    url_repo: "https://github.com/SanAJC/Hotel_Monitoring_Remote"
  },
  {
    id: 2,
    title: "App web para la gestión de procesos en el Hotel Kamila",
    role: "Desarrollador Full Stack",
    description: "Aplicación web para la gestión de procesos en el Hotel Kamila. En conjunto con su lading page",
    technologies: [
      { name: "Django", icon: imgDjango },
      { name: "Python", icon: imgPython },
      { name: "HTML", icon: imgHtml },
      { name: "Tailwind CSS", icon: imgCss },
      { name: "PostgreSQL", icon: imgPostgres },
    ],
    images: [img34, img35, img36, img37, img38, img39,img40, img41, img42, img43],
    url_repo: "https://github.com/SanAJC/App_Hotel_Kamila"
  },
  {
    id: 3,
    title: "Aplicación web para la gestión de proyectos",
    role: "Desarrollador Backend",
    description: "Aplicación web para la gestión integral de proyectos, permitiendo a los usuarios crear, editar y supervisar proyectos de manera eficiente. Incorporando estadisticas del seguimientos de los proyectos y tareas integrado con github.",
    technologies: [
      { name: "React", icon: imgReact },
      { name: "Node.js", icon: imgNode },
      { name: "Express", icon: imgExpress },
      { name: "Firebase", icon: imgFirebase },
      { name: "TypeScript", icon: imgTypescript }
    ],
    images: [img1, img2, img3, img4, img5],
    url_repo: "https://github.com/SanAJC/App_Gestion_Proyectos"
  },
  {
    id: 4,
    title: "E-commerce de Productos de Zapatillas",
    role: "Desarrollador Full Stack",
    description: "Tienda Zapas es una aplicación web para la gestión de una tienda de zapatos, desarrollada con Django. Permite a los usuarios ver, buscar y comprar productos, así como gestionar el inventario y los pedidos.",
    technologies: [
      { name: "Django", icon: imgDjango },
      { name: "Python", icon: imgPython },
      { name: "MySQL", icon: imgMysql },
      { name: "HTML5", icon: imgHtml },
      { name: "CSS", icon: imgCss }
    ],
    images: [img23, img24, img25, img26, img27],
    url_repo: "https://github.com/SanAJC/Tienda_Zapas"
  },
  {
    id: 5,
    title: "Plataforma Analisis de Datos",
    role: "Desarrollador Backend",
    description: "Herramienta para el análisis y visualización de grandes volúmenes de datos con generación de gráficos interactivos y reportes personalizados. Desarrollé algoritmos de procesamiento de datos.",
    technologies: [
      { name: "Django", icon: imgDjango },
      { name: "Python", icon: imgPython },
      { name: "MySQL", icon: imgMysql },
      { name: "React", icon: imgReact },
      { name: "TypeScript", icon: imgTypescript },
      { name: "Tailwind CSS", icon: imgTailwind }
    ],
    images: [img15, img16, img17, img18, img19,img20,img21,img22],
    url_repo: "https://github.com/SanAJC/Herramienta_Analisis_Datos"
  },
  {
    id: 6,
    title: "Red Social en Microservicios",
    role: "Desarrollador Backend",
    description: "Aplicación de red social desarrollada con una arquitectura de microservicios, facilitando la escalabilidad, mantenibilidad y despliegue independiente de cada componente.",
    technologies: [
      { name: "Django", icon: imgDjango },
      { name: "MongoDB", icon: imgMongoDB },
      { name: "Python", icon: imgPython },
      { name: "Docker", icon: imgDocker },
      { name: "PostgreSQL", icon: imgPostgres },
      
    ],
    images: [imgRedSocial,],
    url_repo: "https://github.com/SanAJC/Red_Social_Microservicios"
  },
  {
    id: 7,
    title: "Sistema Gestor de Citas",
    role: "Desarrollador Backend",
    description: "Aplicación web para la gestión de citas profesionales, diseñada para facilitar la programación y administración de citas entre profesionales y clientes. Recordatorios en Google Calendar integrado para los usuarios con citas programadas.",
    technologies: [
      { name: "Python", icon: imgPython },
      { name: "Django", icon: imgDjango },
      { name: "React", icon: imgReact },
      { name: "PostgreSQL", icon: imgPostgres },
      { name: "JavaScript", icon: imgJavaScript }
    ],
    images: [img10, img11, img12, img13, img14],
    url_repo: "https://github.com/SanAJC/Sis_Gestor_Citas_Profesionales"
  },
  {
    id: 8,
    title: "App de Gestion de Inventario",
    role: "Desarrollador Full Stack",
    description: "Aplicación web para la gestión integral de inventarios, permitiendo a los usuarios administrar productos, clientes y ventas de manera eficiente a través del panel de administración de Django.",
    technologies: [
      { name: "Django", icon: imgDjango },
      { name: "Python", icon: imgPython },
      { name: "PostgreSQL", icon: imgPostgres },
      { name: "HTML5", icon: imgHtml },
      { name: "CSS", icon: imgCss },
      { name: "Azure", icon: imgAzure },
      

    ],
    images: [img6, img7, img8, img9],
    url_repo: "https://github.com/SanAJC/Sys_Gestion_Inventario"
  }
];

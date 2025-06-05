import imgProfile from './assets/Perfil.png'
import imgGitHub from './assets/github_dark.svg'
import imgLinkedin from './assets/linkedin.svg'
import imgPerson from './assets/person.png'
import imgDjango from './assets/django.svg'
import imgReact from './assets/react.svg'
import imgNode from './assets/nodejs.svg'
import imgExpress from './assets/expressjs_dark.svg'
import imgPostgres from './assets/postgresql.svg'
import imgTypescript from './assets/typescript.svg'
import imgTailwind from './assets/tailwindcss.svg'
import imgPython from './assets/python.svg'
import imgRectRouter from './assets/reactrouter.svg'
import imgEmail from './assets/email.png'
import imgPhone from './assets/phone.png'
import imgGit from './assets/git.svg'
import imgRailway from './assets/railway_dark.svg'
import imgMysql from './assets/mysql.svg'
import imgMongoDB from './assets/mongodb.svg'
import imgFirebase from './assets/firebase.svg'
import imgAzure from './assets/azure.svg'
import imgSqlite from './assets/sqlite.svg'
import imgHtml from './assets/html5.svg'
import imgCss from './assets/css_old.svg'
import imgRedis from './assets/redis.svg'
import imgDocker from './assets/docker.svg'
import imgLocation from './assets/location.png'
import { projects } from './data/projects'
import { certificates } from './data/certificate'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function App() {
  return (
    <>
      <div className='bg-[#1F1F21] min-h-screen w-screen flex items-center justify-center flex-col'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 w-full min-h-screen px-4 py-8'>
          <div className='w-full md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0'>
            <img src={imgProfile} alt="imgProfile" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full" />
          </div>
          <div className='w-full md:w-1/2 p-4 md:p-10 md:ml-15 order-2 md:order-1 text-center md:text-left'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-2'>Santiago Jaimes</h1>
            <span className='text-xl md:text-2xl font-bold text-[#40C8F1]'>Ingeniero de Software</span>
            <p className='text-[#c3c3c3] mt-8'>
              Soy un joven Ingeniero de software con habilidades 
              en el desarrollo de aplicaciones basadas en web, empleando tecnologias
              eficientes para determinados proyectos siendo lider, gestor y desarrollador fullstack dentro de mi campo.  
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mt-10'>
              <button className='w-full sm:w-auto bg-[#40C8F1] text-white px-8 py-3 rounded-xl transition-all hover:transform hover:translate-y-[-5px] hover:bg-transparent hover:text-[#40C8F1] hover:border-solid hover:border-[#40C8F1] hover:border-[2px]'>Descargar CV</button>
              <button className='w-full sm:w-auto bg-black text-white px-8 py-3 rounded-xl transition-all hover:transform hover:translate-y-[-5px] hover:bg-white hover:text-black hover:border-solid hover:border-black hover:border-[2px] mt-4 sm:mt-0'>Contactame</button>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-5 mt-10'>
              <p className='text-white text-xl font-bold'>Echa un vistado a mi</p>
              <div className='flex items-center justify-center gap-5 mt-4 sm:mt-0'>
                <a href="https://github.com/SantiagoJaimesC" target="_blank" rel="noopener noreferrer">
                  <img src={imgGitHub} className="w-8 h-8" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/santiago-jaimes-c" target="_blank" rel="noopener noreferrer">
                  <img src={imgLinkedin} className="w-8 h-8" alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#232324] w-screen min-h-screen py-10 flex items-center justify-center flex-col'>
        <h1 className='text-4xl text-white font-bold mb-10 mt-5'>Proyectos Destacados</h1>
        <div className='relative w-full max-w-[1200px] px-12'>
          <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div className='w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-6'>
                  <Carousel className="w-full max-w-[300px] sm:max-w-[300px] md:max-w-[350px]">
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src={image} alt={`Imagen ${imageIndex + 1} del proyecto ${project.title}`} className="object-contain w-full h-full rounded-md" />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className='max-[500px]:absolute max-[500px]:left-0 max-[500px]:size-10'/>
                    <CarouselNext className='max-[500px]:absolute max-[500px]:right-0 max-[500px]:size-10'/>
                  </Carousel>
                  <div className='w-[50%] h-full flex items-center justify-center flex-col ml-20 max-[500px]:ml-0'>
                    <h1 className='text-2xl text-white font-bold max-[500px]:text-l'>{project.title}</h1>
                    <span className='flex items-center justify-center gap-5 mt-5'>
                      <img src={imgPerson} alt="Rol" className='w-5 h-5'/>
                      <p className='text-[#40C8F1]'>{project.role}</p>
                    </span>

                    <p className='text-[#c3c3c3] mt-8 w-full max-[500px]:w-full'>
                      {project.description}
                    </p>
                    <h2 className='text-white text-l mb-5 max-[500px]:mt-4'>Tecnologias Utilizadas</h2>
                    <div className='flex items-center justify-center gap-5 flex-wrap'>
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <img src={tech.icon} alt={tech.name} className='w-10 h-10' />
                          <span className="text-xs text-white mt-1">{tech.name}</span>
                        </div>
                      ))}
                      <div className='flex items-center justify-center gap-2 flex-col'>
                        <img src={imgGitHub} alt="Repo" className='w-10 h-10' />
                        <a href={project.url_repo} target="_blank" rel="noopener noreferrer" className='text-[#40C8F1] text-xs font-bold'>Ver Repo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='max-[500px]:absolute max-[500px]:left-0 max-[500px]:size-10' />
          <CarouselNext className='max-[500px]:absolute max-[500px]:right-0 max-[500px]:size-10' />
        </Carousel>
        </div>
      </div>
      <div className='bg-[#1F1F21] w-screen min-h-screen flex items-center justify-center flex-col'>
        <h1 className='text-4xl text-white font-bold mb-10 max-[500px]:mt-5'>Sobre Mi</h1>
        <div className='w-full h-[90%] flex items-center justify-center flex-row gap-3 max-[500px]:flex-col'>
          <div className='w-1/2 h-full flex items-center justify-center'>
            <p className='text-[#c3c3c3] text-l w-[80%] max-[500px]:w-full max-[500px]:text-center max-[500px]:mt-5'>
              Soy un <span className='text-[#40C8F1] font-bold'>ingeniero de software</span> especializado en el desarrollo fullstack, con un enfoque sólido en el backend usando Django, framework con el que llevo más de 2 años construyendo soluciones tanto en proyectos personales como freelance. En el frontend, trabajo principalmente con React, lo que me permite desarrollar aplicaciones completas, modernas y funcionales.
              <br />
              <br />
              Me apasiona crear soluciones tecnológicas útiles, enfocadas en resolver problemas reales. Valoro escribir código limpio, mantenible y bien estructurado, siempre teniendo en cuenta la experiencia del usuario y la escalabilidad del producto.
              <br />
              <br />
              Además de programar, disfruto aprender constantemente y mantenerme al día con nuevas tecnologías. Me interesa seguir creciendo como profesional, colaborar en proyectos desafiantes y formar parte de equipos que compartan una visión de impacto a través del software.
            </p>
          </div>
          <div className='w-1/2 h-full flex items-center justify-center flex-col gap-5'>
            <h1 className='text-2xl text-white font-bold'>Informacion de Contacto</h1>
            <div className='flex items-baseline justify-center flex-col gap-5 mb-5'>
              <div className='flex items-center justify-center gap-5 flex-row'>
                <img src={imgEmail} alt="imgEmail" className='w-10 h-10' />
                <div >
                  <h2 className='text-white text-xl'>Email</h2>
                  <p className='text-[#c3c3c3]'>sanjaimesgo@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-5 flex-row'>
                <img src={imgPhone} alt="imgPhone" className='w-10 h-10' />
                <div>
                  <h2 className='text-white text-xl'>Telefono</h2>
                  <p className='text-[#c3c3c3]'>3156579583</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-5 flex-row'>
                <img src={imgLocation} alt="imgLocation" className='w-10 h-10' />
                <div>
                  <h2 className='text-white text-xl'>Ubicacion</h2>
                  <p className='text-[#c3c3c3]'>Santa Marta, Colombia</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
      <div className='bg-[#232324] w-screen min-h-screen flex items-center justify-center flex-col'>
        <h1 className='text-4xl text-white font-bold mt-5'>Tecnologias y Certificaciones</h1>
        <div className='w-full h-[90%] flex items-center justify-center gap-3 mt-10 flex-wrap flex-row'>
          <img src={imgPython} alt="" className='w-10 h-10'/>
          <img src={imgDjango} alt="" className='w-10 h-10'/>
          <img src={imgGitHub} alt="" className='w-10 h-10'/>
          <img src={imgTypescript} alt="" className='w-10 h-10'/>
          <img src={imgTailwind} alt="" className='w-10 h-10'/>
          <img src={imgExpress} alt="" className='w-10 h-10'/>
          <img src={imgPostgres} alt="" className='w-10 h-10'/>
          <img src={imgReact} alt="" className='w-10 h-10'/>
          <img src={imgGit} alt="" className='w-10 h-10'/>
          <img src={imgNode} alt="" className='w-10 h-10'/>
          <img src={imgFirebase} alt="" className='w-10 h-10'/>
          <img src={imgRailway} alt="" className='w-10 h-10'/>
          <img src={imgMysql} alt="" className='w-10 h-10'/>
          <img src={imgMongoDB} alt="" className='w-10 h-10'/>
          <img src={imgAzure} alt="" className='w-10 h-10'/>
          <img src={imgSqlite} alt="" className='w-10 h-10'/>
          <img src={imgHtml} alt="" className='w-10 h-10'/>
          <img src={imgRectRouter} alt="" className='w-10 h-10'/>
          <img src={imgCss} alt="" className='w-10 h-10'/>
          <img src={imgRedis} alt="" className='w-10 h-10'/>
          <img src={imgDocker} alt="" className='w-10 h-10'/>
        </div>
        <div className='w-full h-[90%] flex items-center justify-center gap-3 mt-10'>
          <Carousel className="w-full max-w-[400px]">
            <CarouselContent>
              {certificates.map((certificate, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={certificate.images[0]} alt="" className="object-contain w-full h-full rounded-md"/>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='max-[500px]:absolute max-[500px]:left-0 max-[500px]:size-10' />
            <CarouselNext className='max-[500px]:absolute max-[500px]:right-0 max-[500px]:size-10' />
          </Carousel>
        </div>

      </div>
    </>
  )
}

export default App

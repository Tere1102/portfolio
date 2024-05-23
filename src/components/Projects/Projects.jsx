import './../Projects/Projects.css'
import P1 from './../../assets/P1.jpeg'
import P2 from './../../assets/P2.jpeg'
import P3 from './../../assets/P3.jpg'
import github from './../../assets/github.svg'
import html from './../../assets/html.svg'
import CSS from './../../assets/CSS.svg'
import javascript from './../../assets/javascript.svg'
import bootstrap from './../../assets/bootstrap.svg'
import nodejs from './../../assets/nodejs.svg'
import react from './../../assets/react.svg'

const Projects = () => {

    const cards = [
        {
            image: [P2],
            name: 'Traffic-Jungle',
            description: 'Traffic-Jungle es un videojuego arcade en 2D desarrollado utilizando únicamente JavaScript, CSS y HTML. Fue el primer proyecto del bootcamp de desarrollo web, presentado a la tercera semana de iniciar los estudios. Consiste en hacer salir a todos los vehiculos del tablero sin que colisionen entre ellos.',
            tech: [html, CSS, javascript],
            url: 'https://github.com/Tere1102/Traffic-Jungle'
        },
        {
            image: [P1],
            name: 'RipCamp App',
            description: 'RipCamp es una SPA (Single Page Application) creada en una semana con React, React Bootstrap, CSS y HTML. Conecta a los estudiantes actuales de los bootcamps de Data Analytics y Desarrollo Web, con ex alumnos y profesores para ayudarlos a resolver preguntas técnicas y problemas realiacionados con sus estudios y proyectos.',
            tech: [html, CSS, javascript, bootstrap],
            url: 'https://ripcamp.netlify.app/'
        },
        {
            image: [P3],
            name: 'Miauyuda App',
            description: 'Miauyuda es una SPA diseñada para conectar veterinarios y dueños de mascotas las 24/7. Permite a los usuarios registrarse como veterinarios o clientes, ofreciendo dos contextos distintos. Además, cuenta con un chatbot de IA para consultas instantáneas y una integración de Google Maps para localizar profesionales.',
            tech: [html, CSS, javascript, bootstrap, nodejs, react],
            url: 'https://miauyuda.netlify.app/'
        },

    ]

    return (
        <section className='projects'>
            <h2>Proyectos</h2>
            <div className='cards'>

                {
                    cards.map((card, index) => {
                        return (
                            <div key={index} className='card'>
                                <div className='img'>
                                    <img width="100%" height="175px" src={card.image} alt="imagen proyecto" />
                                </div>
                                <h3>{card.name}</h3>

                                <p>{card.description}</p>

                                <div className='tech'>
                                    {card.tech.map((techIcon, i) => (
                                        <img key={i} width="30px" src={techIcon} alt="tecnologías" />
                                    ))}
                                </div>
                                <div className='github'>
                                    <a href={card.url} target="_blank">
                                        <img width="30px" src={github} alt="github logo" />
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )

}
export default Projects

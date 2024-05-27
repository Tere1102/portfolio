import './../Projects/Projects.css'
import P1 from './../../assets/P1.jpeg'
import P2 from './../../assets/P2.jpeg'
import P3 from './../../assets/P3.jpg'
import github from './../../assets/github.svg'
import web from './../../assets/web.png'
import html from './../../assets/html.svg'
import CSS from './../../assets/CSS.svg'
import javascript from './../../assets/javascript.svg'
import bootstrap from './../../assets/bootstrap.svg'
import nodejs from './../../assets/nodejs.svg'
import react from './../../assets/react.svg'
import { Row, Col } from 'react-bootstrap'
import Animation2 from './../../assets/Animation2.gif'

const Projects = () => {
    const cards = [
        {
            image: P2,
            name: 'Traffic-Jungle',
            description: 'Traffic-Jungle es un videojuego arcade 2D para pc desarrollado utilizando únicamente JavaScript, CSS y HTML. Fue el primer proyecto del bootcamp de desarrollo web, presentado a la tercera semana de iniciar los estudios. Consiste en hacer salir a todos los vehiculos del tablero sin que colisionen entre ellos.',
            tech: [html, CSS, javascript],
            url: 'https://github.com/Tere1102/Traffic-Jungle',
            url2: 'https://traffic-jungle.netlify.app/'
        },
        {
            image: P1,
            name: 'RipCamp App',
            description: 'RipCamp es una SPA (Single Page Application) creada en una semana con React, React Bootstrap, CSS y HTML. Conecta a los estudiantes actuales de los bootcamps de Data Analytics y Desarrollo Web, con ex alumnos y profesores para ayudarlos a resolver preguntas técnicas y problemas realiacionados con sus estudios y proyectos.',
            tech: [html, CSS, javascript, bootstrap],
            url: 'https://github.com/Tere1102/ripcamp-client',
            url2: 'https://ripcamp.netlify.app/'
        },
        {
            image: P3,
            name: 'Miauyuda App',
            description: 'Miauyuda es una SPA diseñada para conectar veterinarios y dueños de mascotas las 24/7. Permite a los usuarios registrarse como veterinarios o clientes, ofreciendo dos contextos distintos. Además, cuenta con un chatbot de IA para consultas instantáneas y una integración de Google Maps para localizar profesionales.',
            tech: [html, CSS, javascript, bootstrap, nodejs, react],
            url: 'https://github.com/Tere1102/vetsproject-client',
            url2: 'https://miauyuda.netlify.app/'
        }
    ];

    return (
        <section className='projects'>
            <h2>Mis Proyectos</h2>
            <img className='black-gif' src={Animation2} alt="Logo" />

            <div className='cards'>
                {cards.map((card, index) => (
                    <Row key={index} className='mb-4 project-row'>

                        <Col md={5} className='project-image'>
                            <img src={card.image} alt={card.name} style={{ width: '500px' }} />
                        </Col>

                        <Col md={7} className='project-details' style={{ width: '600px' }} >
                            <h3>{card.name}</h3>
                            <p>{card.description}</p>
                            <div className='tech-icons'>
                                {card.tech.map((techIcon, i) => (
                                    <img key={i} src={techIcon} alt='tech' className='tech-icon' />
                                ))}
                            </div>
                            <div className='github-link'>
                                <a className='github-link' href={card.url} target='_blank' rel='noopener noreferrer'>
                                    **Pulsa para ver el repo en GitHub <img src={github} alt='GitHub logo' className='github-icon' />
                                </a>
                            </div>
                            <div className='web-link'>
                                <a className='web-link' href={card.url2} target='_blank' rel='noopener noreferrer'>
                                    **Pulsa para entrar en la web <img src={web} alt='web logo' className='web-icon' />
                                </a>
                            </div>
                        </Col>

                    </Row>
                ))}
            </div>
        </section>

    );
};

export default Projects

import './../AboutMe/AboutMe.css'
import perfil from './../../assets/perfil.jpeg'
import html from './../../assets/html.svg'
import CSS from './../../assets/CSS.svg'
import javascript from './../../assets/javascript.svg'
import bootstrap from './../../assets/bootstrap.svg'
import nodejs from './../../assets/nodejs.svg'
import react from './../../assets/react.svg'

const AboutMe = () => {
    return (
        <section className='aboutMe'>

            <article className='intro'>
                <div className='img'>
                    <img src={perfil} alt="foto de perfil" />
                </div>
                <p>Hola!👋🏽 Soy Teresa Arranz, graduada en desarrollo web en marzo de 2024. Apasionada por el mundo tecnológico, siempre estoy en búsqueda de nuevos aprendizajes, retos y proyectos. ¡No dudes en contar conmigo para los tuyos! 🚀</p>
                <section className='techIcons'>

                    <div lassName='techImg'>
                        <img width="35px" src={javascript} />
                        <img width="35px" src={html} />
                        <img width="35px" src={CSS} />
                        <img width="35px" src={nodejs} />
                        <img width="35px" src={react} />
                        <img width="35px" src={bootstrap} />
                    </div>
                </section>
                <div className='homeDivs'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>

            <article className='intro2'>

                <div className='education'>
                    <h2>Formación</h2>
                    <div>
                        <h3>Ironhack Spain</h3>
                        <span>2024 - Bootcamp Desarrollo Web</span>
                    </div>
                    <h2>Tecnologías</h2>
                    <div>
                        <h3>Front-end</h3>
                        <span>HTML5, CSS, JavaScript, React.js, React Bootstrap</span>
                    </div>
                    <div>
                        <h3>Back-end</h3>
                        <span>Node.js, MongoDB, Mongoose</span>

                    </div>



                </div>
            </article>
        </section>


    )
}

export default AboutMe

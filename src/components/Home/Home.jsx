import './../Home/Home.css'
import React from 'react'
import Animation from './../Animation/Animation'
import { Row, Col } from 'react-bootstrap'
import Animation2 from './../../assets/Animation2.gif'

const Home = () => {
    return (


        <Row className='mb-4 project-row'>
            <Col md={6} className='homeArticle'>
                <article className='homeArticle'>
                    <h1> Full Stack Developer</h1>
                    <p>Apasionada programadora con un enfoque especializado en el desarrollo web.
                        Recientemente graduada del bootcamp de Ironhack Spain, con habilidades sólidas en la creación de aplicaciones web modernas y escalables. </p>
                    <div className='homeDivs'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </article>
            </Col>



            <Col md={6} className='homeButtons'>
                <div className='homeButtons'>
                    <h1>Teresa Arranz Carrasco</h1>
                    <div className='homeButtons'>
                        <a href="mailto:tereac1102@gmail.com" target="_blank">email</a>
                        <a href="https://drive.google.com/file/d/1mnSk4BIvenq3k6o0DobZey7fLEr0E-i_/view?usp=sharing" target="_blank">CV</a>
                        <a href="https://drive.google.com/file/d/1L0uJa29vFv-olf_QZ9t1sFoJxCwcXP7K/view?usp=sharing" target="_blank">certificados</a>
                    </div>
                </div>

            </Col>
            <Animation />
        </Row>


    )
}
export default Home
import React from 'react';
import './App.css';
import Mision from './Pantallas/Mision';
import Vision from './Pantallas/Vision';
import Objetivos from './Pantallas/Objetivos';
import Servicios from './Pantallas/Servicios';
import Footer from './Pantallas/Footer';
import linea from './Img/linea.png';
import logo from './Img/logo-no-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FaAngleDoubleUp  } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <div id='header'>
        <div className="parteSuperior">
          <img src={linea} alt="linea-header" className="linea" />
          <div className="logo-usuario">
            <img src={logo} alt="logo-header" className="logo" />
            <div className="iniciarSesion">
              <FontAwesomeIcon icon={faUserCircle} size="1x" className='icono' />
              <p className='IniciarSesion'>Iniciar Sesión</p>
            </div>
          </div>
        </div>
        <div className="parteCentral">
          <nav>
            <ul className='nav-links'>
              <li><ScrollLink to="Mision" smooth={true} duration={900}>Misión</ScrollLink></li>
              <li><ScrollLink to="Vision" smooth={true} duration={900}>Visión</ScrollLink></li>
              <li><ScrollLink to="Objetivos" smooth={true} duration={900}>Objetivos</ScrollLink></li>
              <li><ScrollLink to="Servicios" smooth={true} duration={900}>Servicios</ScrollLink></li>
              <li><ScrollLink to="Contacto" smooth={true} duration={900}>Contacto</ScrollLink></li>
            </ul>
          </nav>
        </div>
        <div className='banner-container'>
          <h1>¡Únete al Banco Universitario Hoy!</h1>
          <p className='subtitulo-banner'>Queridos estudiantes</p>
          <p className='parrafo-banner'>
            Estamos aquí para ofrecerles una experiencia financiera<br/> diseñada especialmente para ustedes.<br/>
            Inicie sesión con nosotros y aprovechen nuestros servicios,<br/> herramientas digitales 
            avanzadas y un equipo comprometido <br/>en hacer su vida universitaria más sencilla.<br/>
            El Banco Universitario esta aquí para apoyarlos <br/>en cada paso de su camino académico.<br/>
            ¡Únanse a nuestra comunidad y descubran <br/>todo lo que podemos hacer por ustedes!
          </p>
        </div>
      </div>
      <div id="Mision">
        <Mision />
      </div>
      <div id="Vision">
        <Vision />
      </div>
      <div id="Objetivos">
        <Objetivos />
      </div>
      <div id="Servicios">
        <Servicios />
      </div>
      <div className="scroll-to-top">
        <ScrollLink to="header" smooth={true} duration={900}>
          <FaAngleDoubleUp title="Ir al Inicio" className="arrow-icon" />
        </ScrollLink>
      </div>
      <div id="Contacto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
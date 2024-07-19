import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../Img/logo-no-background.png';
import linea from '../Img/linea.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['seccion-izquierda']}>
          <img src={logo} alt="logo-footer" className={styles.logo} />
          <p className={styles['parrafo-footer']}>
            Dirección: Av. Universidad, Edificio Banco Universitario, 
            piso 12, Caracas, Venezuela<br/>
            Teléfono: +58 212-555-5555<br/>
            Fax: +58 212-555-5556<br/>
            Correo electrónico: info@bancouniversitario.com.ve<br/>
            © Todos los derechos reservados.
          </p>
        </div>
        <div className={styles['seccion-derecha']}>
          <a href="@bancouniversitariove" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="@bancouniversitariove" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="@bancouniversitariove" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>
      </div>
      <img src={linea} alt="linea-footer" className={styles.linea} />
    </div>
  );
}

export default Footer;

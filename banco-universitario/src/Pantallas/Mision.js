import React from 'react';
import { useInView } from 'react-intersection-observer';
import mision_1 from '../img/mision-1.jpg';
import mision_2 from '../img/mision-2.jpg';
import mision_3 from '../img/mision-3.jpg';
import styles from './Mision.module.css';

const Mision = () => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  return (
    <div className={styles['seccion-mision']} ref={ref}>
      <h2>Misión</h2>
      <div className={styles['contenido-mision']}>
        <div className={styles['texto-mision']}>
          <p>
            Somos una institución financiera comprometida con los estudiantes universitarios, 
            brindando soluciones financieras ágiles y eficientes.<br/> Nuestra misión es facilitar 
            la gestión de sus recursos y contribuir al crecimiento económico y personal de 
            nuestros clientes.
          </p>
        </div>
        <div className={styles['vertical-line']}></div>
        <div className={`${styles['imagenes-mision']} ${inView ? styles['visible'] : ''}`}>
          <img src={mision_1} alt="Transacción con Tarjeta de Crédito" className={styles.img1} loading='lazy'/>
          <img src={mision_2} alt="Retiro de Dinero" className={styles.img2} loading='lazy'/>
          <img src={mision_3} alt="Jóvenes estudiantes" className={styles.img3} loading='lazy'/>
        </div>
      </div>
    </div>
  );
};

export default Mision;
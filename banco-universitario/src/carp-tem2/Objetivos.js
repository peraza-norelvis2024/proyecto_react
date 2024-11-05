import React from 'react';
import styles from './Objetivos.module.css';

const Objetivos = () => {
  return (
    <div className={styles['container']}>
      <h2>Objetivos</h2>
      <div className={styles['seccion-objetivos']}>
        <div className={styles['fila-objetivos']}>
          <div className={styles['objetivo']}>
            <div className={styles['numero']}>1</div>
            <p>
              Brindar a los estudiantes universitarios un servicio eficiente 
              y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y 
              nuestros puntos de atención presencial.
            </p>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['objetivo']}>
            <div className={styles['numero']}>2</div>
            <p>
              Fomentar el uso de nuestras plataformas digitales para hacer 
              transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo 
              herramientas tecnológicas fáciles y seguras.
            </p>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['objetivo']}>
            <div className={styles['numero']}>3</div>
            <p>
              Promover la educación financiera de los estudiantes 
              universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, 
              la inversión y el uso responsable del crédito.
            </p>
          </div>
        </div>
        <div className={styles['fila-objetivos']}>
          <div className={styles['objetivo']}>
            <div className={styles['numero']}>4</div>
            <p>
              Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios 
              exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas 
              laborales, entre otros.
            </p>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['objetivo']}>
            <div className={styles['numero']}>5</div>
            <p>
              Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, 
              para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objetivos;

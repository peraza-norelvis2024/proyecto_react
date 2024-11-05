import React from 'react';
import styles from './Vision.module.css';

const Vision = () => {
  return (
    <div className={styles['seccion-vision']}>
      <div className={styles['overlay']}>
        <h3 className={styles['titulo-vision']}>Visión</h3>
        <p className={styles['parrafo-vision']}> 
          Queremos ser la mejor opción financiera para estudiantes universitarios en el país. <br/>
          Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención 
          al cliente y nuestro compromiso con la educación y el desarrollo social.
        </p>
      </div>
    </div>
  )
}

export default Vision;

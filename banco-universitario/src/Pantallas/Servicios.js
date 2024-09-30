import React, { useState } from 'react';
import styles from './Servicios.module.css';
import PDF from '../pdf/mas-de-nuestros-servicios.pdf';
import video from '../videos/que-es-el-sistema-financiero.mp4';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faUniversity, faMoneyBill, faMoneyCheckDollar, faSchoolCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.seccionIconos}>
        <div className={styles.seccionOverlay}>
          <h3 className={styles.tituloServicios}>Servicios</h3>
          <div className={styles.seccionContenido}>
            <div className={styles.servicio}>
              <FontAwesomeIcon icon={faUserFriends} size="2x" color='White' />
              <p>Transferencias entre estudiantes sin comisión</p>
            </div>
            <div className={styles.servicio}>
              <FontAwesomeIcon icon={faMoneyCheckDollar} size="2x" color='White'/>
              <p>Pago de matrícula estudiantil</p>
            </div>
            <div className={styles.servicio}>
              <FontAwesomeIcon icon={faSchoolCircleCheck} size="2x" color='White'/>
              <p>Cobro de becas estudiantiles</p>
            </div>
            <div className={styles.servicio}>
              <FontAwesomeIcon icon={faUniversity} size="2x" color='White' />
              <p>Depósitos en efectivo</p>
            </div>
            <div className={styles.servicio}>
              <FontAwesomeIcon icon={faMoneyBill} size="2x" color='White'/>
              <p>Retiros en efectivo</p>
            </div>
          </div>
        </div>
        <div className={styles.seccionMas}>
          <a href={PDF} target="_blank" rel="noopener noreferrer" title="Abrir PDF" className={styles.linkPdf}>Saber Más</a>
        </div>
      </div>
      <div className={styles.seccionInformacion}>
        <div className={styles.seccionIzquierda}>
        <ReactPlayer url={video} playing={isPlaying} controls width="100%" height="100%" onClick={() => setIsPlaying(true)}/>
        </div>
        <div className={styles.seccionDerecha}>
          <h3 className={styles.tituloInformacion}>¡Hablemos de los Sistemas<br/>Financieros!</h3>
          <p className={styles.parrafoInformacion}>
            Te invitamos a ver nuestro video para obtener una explicación detallada sobre el sistema financiero.<br/> 
            Este video te proporcionará la información que necesitas para entender mejor cómo funciona y 
            cómo puede beneficiarte. <br/>¡Haz clic en el video a continuación para aprender más!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
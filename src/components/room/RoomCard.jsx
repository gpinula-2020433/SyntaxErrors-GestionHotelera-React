// src/components/room/RoomCard.jsx
import React from 'react'
import styles from './RoomCard.module.css'

const RoomCard = ({ room }) => {
  return (
    <div className={styles.roomCard}>
      <div className={styles.imageSection}>
        <img src={room.profilePicture} alt={room.name} className={styles.roomImage} />
      </div>

      <div className={styles.infoSection}>
        <h3 className={styles.roomName}>{room.name}</h3>

        <div className={styles.badges}>
          <span className={styles.badge}>Habitación Mediana</span>
          <span className={styles.badge}>Capacidad 2 huéspedes</span>
          <span className={styles.badge}>Conexión Wifi</span>
          <span className={styles.badge}>Aire Acondicionado</span>
          <span className={styles.badge}>Armario</span>
          <span className={styles.badge}>Televisión</span>
          <span className={styles.badge}>Caja Fuerte</span>
        </div>
        
        <div>
          <p className={styles.rating}>⭐ 4.5 (32 reseñas)</p>
          <p className={styles.roomDescription}>{room.roomDescription}</p>
        </div>
    
        <p className={styles.roomPrice}>1 noche · {room.price} GTQ 500</p>
        <button className={styles.reserveButton}>Reservar</button>
      </div>
    </div>
  )
}

export default RoomCard
// src/components/room/RoomCard.jsx
import React from 'react';
import styles from './RoomCard.module.css';

const RoomCard = ({ room }) => {
  return (
    <div className={styles.roomCard}>
      <h3 className={styles.roomName}>{room.name}</h3>
      <p className={styles.roomPrice}>${room.price} por noche</p>
      <p className={styles.roomCapacity}>Capacidad: {room.capacity} personas</p>
      <p className={styles.roomDescription}>{room.description}</p>
    </div>
  );
};

export default RoomCard;

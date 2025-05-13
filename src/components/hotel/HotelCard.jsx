// src/components/hotel/HotelCard.jsx
import React from 'react';
import styles from './HotelCard.module.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className={styles.hotelCard}>
      <h3 className={styles.hotelName}>{hotel.name}</h3>
      <p className={styles.hotelDescription}>{hotel.description}</p>
      <p className={styles.hotelLocation}>{hotel.location}</p>
    </div>
  );
};
export default HotelCard;
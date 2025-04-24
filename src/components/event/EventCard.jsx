// src/components/event/EventCard.jsx
import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ event }) => {
  return (
    <div className={styles.eventCard}>
      <h3 className={styles.eventName}>{event.name}</h3>
      <p className={styles.eventDate}>Fecha: {event.date}</p>
      <p className={styles.eventDescription}>{event.description}</p>
    </div>
  );
};

export default EventCard;

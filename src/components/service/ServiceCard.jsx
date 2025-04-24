// src/components/additionalService/ServiceCard.jsx
import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
        <h4>Service card</h4>
      <h3 className={styles.serviceName}>{service.name}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
    </div>
  );
};

export default ServiceCard;

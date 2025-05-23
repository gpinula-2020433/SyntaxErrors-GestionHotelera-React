import React from 'react';
import './UserCard.css'

export const UserCard = ({ name, surname, username, email, phone }) => {
  return (
    <div className='user-card'>
      <h5>{name} {surname}</h5>
      <div className="user-info">
        <div className="user-info-item">
          <i className="fas fa-user-circle"></i>
          <span>Nombre de Usuario: {username}</span>
        </div>
        <div className="user-info-item">
          <i className="fas fa-envelope"></i>
          <span>Correo: {email}</span>
        </div>
        <div className="user-info-item">
          <i className="fas fa-phone"></i>
          <span>Teléfono: {phone}</span>
        </div>
      </div>
    </div>
  );
};

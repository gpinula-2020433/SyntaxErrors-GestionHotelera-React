import React from 'react';
import { useNavigate } from 'react-router-dom'; // importar navigate
import './HotelCard.css';

export const HotelCard = ({
  id,
  name,
  address,
  description,
  phone,
  category,
  amenities,
  services,
  imageHotel
}) => {
  const navigate = useNavigate(); 

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fa-star ${i < count ? 'fas text-warning' : 'far text-muted'}`}
        style={{ marginRight: 2 }}
      ></i>
    ));
  };

  const handleDetailsClick = () => {
    navigate(`/main/hoteldetails/${id}`);
  };

  return (
    <div className="card hotel-card border-0 shadow-lg overflow-hidden h-100">
      <div className="hotel-image-wrapper">
        <img
  src={`http://localhost:3200/uploads/img/users/${imageHotel}`}
  crossOrigin="anonymous"
  className="card-img-top hotel-image"
  alt={name}
/>
<span
  className="badge position-absolute top-0 end-0 m-2"
  style={{ backgroundColor: '#ffcc00', color: '#000' }}
>
  {category}★
</span>


      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="text-white small mb-2">
  <i className="fas fa-map-marker-alt me-1"></i>{address}
</p>

        <p className="card-text small">{description}</p>

        <div className="mt-2 small">
          <p><i className="fas fa-phone me-2"></i>{phone}</p>
          <p className="mb-1"><strong>Categoria:</strong> {renderStars(category)}</p>
          <p><strong>Amenities:</strong> {amenities?.join(', ') || 'Ninguno'}</p>
          <p><strong>Servicios:</strong> {Array.isArray(services) ? services.map(s => s.name || s).join(', ') : 'Ninguno'}</p>
        </div>

        <button className="btn btn-primary mt-auto animate-btn" onClick={handleDetailsClick}>
          <i className="fas fa-info-circle me-2"></i>Ver detalles
        </button>
      </div>
    </div>
  );
};

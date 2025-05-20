import React from 'react';

export const HotelCard = ({
  name,
  address,
  description,
  phone,
  category,
  amenities,
  services,
  imageHotel
}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '800px' }}>
      <div className="row g-0">
        {imageHotel && (
          <div className="col-md-4">
            <img src={imageHotel} className="img-fluid rounded-start" alt={name} />
          </div>
        )}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{address}</h6>
            <p className="card-text">{description}</p>
            <p className="card-text"><strong>Tel:</strong> {phone}</p>
            <p className="card-text"><strong>Categoría:</strong> {category} estrellas</p>
            <p className="card-text">
              <strong>Amenities:</strong> {amenities?.join(', ') || 'Ninguno'}
            </p>
            <p className="card-text">
              <strong>Servicios:</strong>{' '}
              {Array.isArray(services)
                ? services.map(s => s.name || s).join(', ')
                : 'Ninguno'}
            </p>
            <button className="btn btn-success mt-2">Comentar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

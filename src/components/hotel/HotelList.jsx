import React from 'react';
import { useHotel } from '../../shared/hooks/useHotel';
import { HotelCard } from './HotelCard';

export const HotelList = () => {
  const { hotels, isFetching } = useHotel();
  if (isFetching) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3 text-muted">Cargando hoteles...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">Descubre Nuestros Hoteles</h1>
        <p className="text-white fs-5">Encuentra el lugar perfecto para relajarte o trabajar</p>

      </div>

      <div className="row g-4">
        {Array.isArray(hotels) && hotels.map((hotel) => (
          <div key={hotel._id} className="col-sm-12 col-md-6 col-lg-4">
              <HotelCard 
                name={hotel.name}
                address={hotel.address}
                description={hotel.description}
                phone={hotel.phone}
                category={hotel.category}
                amenities={hotel.amenities}
                services={hotel.services}
                imageHotel={hotel.imageHotel}
              />
            </div>
          ))
        }
      </div>
    </div>
    
  );
};

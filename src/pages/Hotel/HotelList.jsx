import React, { useEffect, useState } from 'react';
import { getHotelsRequest } from '../../services/hotelService';
import {HotelCard} from './HotelCard';
import { useHotel } from '../../shared/hooks/useHotel';

export const HotelList = () => {
  const {hotels, isFetching} = useHotel()
  const [hotel, setHotel] = useState({})


  if (isFetching) {
    return (
      <span>Cargando...</span>
    )
  }


  return (
    <div className="container">
      
      <div className="text-center my4">
        <h2>Hoteles</h2>
      </div>
      <div className='d-flex flex-wrap align-items-center'>
        {
          Array.isArray(hotels) && hotels.map((hotel) => (
            <div key={hotel._id} className='m-3'>
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

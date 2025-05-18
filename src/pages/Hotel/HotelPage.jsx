import React from 'react';
import {HotelList} from './HotelList';

const HotelPage = () => {
  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <h2>Listado de Hoteles</h2>
       <div className="col-md-9 col-lg-10 p-3">
        <HotelList />
      </div>
      <hr style={{ margin: '40px 0' }} />
      <h2>Registrar Nuevo Hotel</h2>
      
    </div>
  );
};

export default HotelPage;

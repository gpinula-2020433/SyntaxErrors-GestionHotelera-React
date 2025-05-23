import React from 'react'
import { useHotelDetails } from '../../shared/hooks/useHotelDetails'
import { useNavigate, useParams } from 'react-router-dom'
import { decodeToken } from '../../shared/utils/decodeToken'
import { FaMapMarkerAlt, FaPhoneAlt, FaStar, FaConciergeBell } from 'react-icons/fa'

import './HotelDetails.css'

export const HotelDetails = () => {
  const { id: hotelId } = useParams()
  const { hotel, rooms, events, services, loading, error } = useHotelDetails(hotelId)
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const userData = decodeToken(token)
  const userId = userData?.uid

  const handleReserve = (room) => {
  const reservationState = {
    hotelId: hotel._id,
    hotel,
    roomId: room._id,
    room,
    serviceId: null
  }

  if (!token) {
    localStorage.setItem('pendingReservation', JSON.stringify(reservationState))
    navigate('/auth/login') // o tu ruta de login
  } else {
    navigate('/main/reservation', {
      state: reservationState
    })
  }
}


  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="error">Error: {error}</p>
  if (!hotel) return <p className="error">No se encontró el hotel.</p>
  

  return (
    <div key={hotel._id} className="hotel-details-container">
      <section>
        <button onClick={() => navigate(-1)} className='back-button'>
          Regresar
        </button>
      </section>

      <section className="hotel-info">
  <div className="leftSide">
    <h2 className="name">{hotel.name}</h2>
    
    {hotel.imageHotel && 
      <img
        src={`http://localhost:3200/uploads/img/users/${hotel.imageHotel}`}
        crossOrigin="anonymous"
        alt={`Imagen de ${hotel.name}`}
        className="image"
      />
    }

    {/* {hotel.imageHotel && <img
  src={`http://localhost:3200/uploads/img/users/${hotel.imageHotel}`}
  crossOrigin="anonymous"
  className="card-img-top hotel-image"
  alt={hotel.name}
/>}
     */}
    <p className="description">{hotel.description}</p>
  </div>

  <div className="rightSide">
    <div className="info">
  <p><strong><FaMapMarkerAlt /> Dirección:</strong> {hotel.address}</p>
  <p><strong><FaPhoneAlt /> Teléfono:</strong> {hotel.phone}</p>
  <p><strong><FaStar /> Categoría:</strong> {[...Array(hotel.category)].map((_, i) => <FaStar key={i} color="gold" />)}</p>
 <p><strong><FaConciergeBell /> Amenidades:</strong> {hotel.amenities.join(', ')}</p>

</div>


    <div className="mapContainer">
      <iframe
        title="mapa"
        className="map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  </div>
</section>


      {/* Habitaciones */}
      <section className="section">
        <h3 className="section-title">Habitaciones</h3>
        {rooms.length === 0 ? (
          <p className="empty-section">Sin habitaciones disponibles</p>
        ) : (
          <div className="card-grid">
            {rooms.map(room => (
              <div
                key={room._id}
                className={`card ${room.status === 'AVAILABLE' ? 'card' : 'card-unavailable'}`}
              >
                <h4 className="card-title">{room.name} ({room.type})</h4>
                <p>{room.roomDescription}</p>
                {room.imageRoom ? (
  <img
    src={`http://localhost:3200/uploads/img/users/${room.imageRoom}`}
    crossOrigin="anonymous"
    alt={`Imagen de ${room.name}`}
    className="image"
  />
) : (
  <p>No hay imagen disponible</p>
)}



                <p><strong>Número:</strong> {room.roomNumber}</p>
                <p><strong>Capacidad:</strong> {room.capacity}</p>
                <p><strong>Precio por noche:</strong> ${room.pricePerNight}</p>
                <p><strong>Estado:</strong> {room.status === 'AVAILABLE' ? 'DISPONIBLE' : 'NO DISPONIBLE'}</p>
                
                <button
                  className={`reserve-button ${room.status === 'AVAILABLE' ? 'button-available' : 'button-unavailable'}`}
                  onClick={() => handleReserve(room)}
                  disabled={room.status !== 'AVAILABLE'}
                >
                  {room.status === 'AVAILABLE' ? 'RESERVAR' : 'NO DISPONIBLE'}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Servicios */}
      <section className="section">
        <h3 className="section-title">Servicios</h3>
        {services.length === 0 ? (
          <p className="empty-section">Sin servicios asignados</p>
        ) : (
          <div className="card-grid">
            {services.map(service => (
              <div key={service._id} className="card">
                <h4 className="card-title">{service.name} ({service.type})</h4>
                <p>{service.description}</p>
                <p><strong>Precio:</strong> ${service.price}</p>
                <p><strong>Disponible:</strong> {service.available ? 'Sí' : 'No'}</p>
                {service.imageHotel && 
      <img
        src={`http://localhost:3200/uploads/img/users/${service.imageHotel}`}
        crossOrigin="anonymous"
        alt={`Imagen de ${service.name}`}
        className="image"
      />
    }
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Eventos */}
      <section className="section">
        <h3 className="section-title">Eventos</h3>
        {events.length === 0 ? (
          <p className="empty-section">Sin eventos disponibles</p>
        ) : (
          <div className="card-grid">
            {events.map(event => (
              <div key={event._id} className="card">
                <h4 className="card-title">{event.title}</h4>
                <p>{event.description}</p>
                <p><strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Ubicación:</strong> {event.location}</p>
                <p><strong>Disponible:</strong> {event.available ? 'Sí' : 'No'}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

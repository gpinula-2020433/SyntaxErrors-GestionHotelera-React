import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createReservation } from '../../services/api'
import { decodeToken } from '../../shared/utils/decodeToken'
import './ReservationForm.css'

export const ReservationForm = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [NIT, setNIT] = useState('')
  const [typeOfPayment, setTypeOfPayment] = useState('CARD')
  const [status, setStatus] = useState('ACTIVA')

  const token = localStorage.getItem('token')
  const user = decodeToken(token)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const reservationPayload = {
      customer: state.customer,
      hotel: state.hotelId,
      room: [state.roomId],
      service: state.serviceId,
      starDate: startDate,
      endDate: endDate,
      NIT,
      typeOfPayment,
      status
    }

    try {
      await createReservation(reservationPayload)
      alert('Reservación creada con éxito')
      navigate('/main/hotellist')
    } catch (err) {
      console.error(err)
      alert('Error al crear la reservación')
    }
  }

  return (
  <div className="reservation-container">
    {/* Columna izquierda: Mensaje arriba, formulario abajo */}
    <div className="left-column">
      <div className="welcome-message">
        <h4>
          Bienvenido {user?.name} a la reservación de su habitación "{state.room?.name}" en el hotel "{state.hotel?.name}"
        </h4>
        <p>Es un placer que esté aquí. Esperamos que tenga una excelente experiencia y disfrute de su estadía.</p>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <h2>Formulario de Reservación</h2>

        <label>Fecha de inicio:</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />

        <label>Fecha de fin:</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />

        <label>NIT:</label>
        <input type="text" value={NIT} onChange={e => setNIT(e.target.value)} required maxLength={9} />

        <label>Tipo de pago:</label>
        <select value={typeOfPayment} onChange={e => setTypeOfPayment(e.target.value)}>
          <option value="CARD">Tarjeta</option>
          <option value="CASH">Efectivo</option>
        </select>

        <label>Estado:</label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="ACTIVA">Activa</option>
          <option value="CANCELADA">Cancelada</option>
          <option value="FINALIZADA">Finalizada</option>
        </select>

        <button type="submit">Confirmar Reservación</button>
        <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
          Cancelar
        </button>

      </form>
    </div>

    {/* Columna derecha: Resumen */}
    <div className="right-column reservation-summary">
      <h2>Resumen de Reservación</h2>

      {/* Hotel */}
      <div className="summary-section">
        <h3>Hotel: {state.hotel?.name}</h3>
        <p><strong>Dirección:</strong> {state.hotel?.address}</p>
        <p><strong>Teléfono:</strong> {state.hotel?.phone}</p>
        <p><strong>Categoría:</strong> {state.hotel?.category} ⭐</p>
        <p><strong>Amenities:</strong> {state.hotel?.amenities?.join(', ')}</p>
        {state.hotel?.imageHotel && (
          <img src={state.hotel.imageHotel} alt="Hotel" className="summary-image" />
        )}
      </div>

      {/* Habitación */}
      <div className="summary-section">
        <h3>Habitación: {state.room?.name} ({state.room?.type})</h3>
        <p><strong>Número:</strong> {state.room?.roomNumber}</p>
        <p><strong>Descripción:</strong> {state.room?.roomDescription}</p>
        <p><strong>Capacidad:</strong> {state.room?.capacity}</p>
        <p><strong>Precio por noche:</strong> ${state.room?.pricePerNight}</p>
        <p><strong>Estado:</strong> {state.room?.status}</p>
        {state.room?.imageRoom && (
          <img src={state.room.imageRoom} alt="Habitación" className="summary-image" />
        )}
      </div>

      {/* Usuario (opcional) */}
      {user && (
        <div className="summary-section">
          <h3>Datos del Usuario</h3>
          <p><strong>Nombre:</strong> {user.name || 'No disponible'}</p>
          <p><strong>Surname:</strong> {user.surname || 'No disponible'}</p>
          <p><strong>Email:</strong> {user.email || 'No disponible'}</p>
          <p><strong>Username:</strong> {user.username || 'No disponible'}</p>
        </div>
      )}
    </div>
  </div>
)

}

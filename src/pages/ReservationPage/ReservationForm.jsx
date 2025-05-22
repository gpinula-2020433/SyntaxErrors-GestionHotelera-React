import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createReservation } from '../../services/api'
import { decodeToken } from '../../shared/utils/decodeToken'
import toast from 'react-hot-toast'
import './ReservationForm.css'

export const ReservationForm = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [NIT, setNIT] = useState('')
  const [typeOfPayment, setTypeOfPayment] = useState('CARD')

  const token = localStorage.getItem('token')
  const user = decodeToken(token)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (NIT.length !== 9) {
      toast.error('Complete los 9 caracteres de su NIT')
      return
    }

    const reservationPayload = {
      hotel: state.hotelId,
      room: [state.roomId],
      service: state.serviceId,
      starDate: startDate,
      endDate: endDate,
      NIT,
      typeOfPayment
    }

    try {
      await createReservation(reservationPayload)
      toast.success('Reservación creada con éxito')
      navigate('/main/hotellist')
    } catch (err) {
      console.error(err)
      toast.error('Error al crear la reservación')
    }
  }

  return (
    <div className="reservation-container">
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
          <input
            type="text"
            value={NIT}
            onChange={e => setNIT(e.target.value)}
            placeholder='(ej. 1234567-8 o 5489381-K)'
            required
            maxLength={9}
            pattern="\d{7}-[0-9K]"
            title="El NIT debe tener 7 números, un guion y un dígito verificador (0-9 o K)"
          />

          <label>Tipo de pago:</label>
          <select value={typeOfPayment} onChange={e => setTypeOfPayment(e.target.value)}>
            <option value="CARD">Tarjeta</option>
            <option value="CASH">Efectivo</option>
          </select>

          <button type="submit">Confirmar Reservación</button>
          <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
            Cancelar
          </button>
        </form>
      </div>

      <div className="right-column reservation-summary">
        <h2>Resumen de Reservación</h2>

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

        {user && (
          <div className="summary-section">
            <h3>Datos del Usuario</h3>
            <p><strong>Nombre:</strong> {user.name || 'No disponible'}</p>
            <p><strong>Apellido:</strong> {user.surname || 'No disponible'}</p>
            <p><strong>Email:</strong> {user.email || 'No disponible'}</p>
            <p><strong>Username:</strong> {user.username || 'No disponible'}</p>
          </div>
        )}
      </div>
    </div>
  )
}
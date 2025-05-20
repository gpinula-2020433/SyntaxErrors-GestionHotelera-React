/* import React from 'react'

export const RoomPage = () => {
  return (
    <div>
      <h1>hola</h1>
    </div>
  )
} */

  import React from "react"
import "./RoomPage.css"

export const RoomPage = ({ rooms = [] }) => {
  return (
    <div className="room-container">
      <div className="room-header">
        <h2>Lista De Habitaciones</h2>
        <button className="btn-primary">Nueva Habitación</button>
      </div>

      <div className="table-responsive">
        <table className="room-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>No. Habitación</th>
              <th>Descripción</th>
              <th>Capacidad</th>
              <th>Precio*Noche</th>
              <th>Estado</th>
              <th>Hotel</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{room.name}</td>
                <td>{room.surname}</td>
                <td>{room.email}</td>
                <td>{room.phone}</td>
                <td className="actions">
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RoomPage
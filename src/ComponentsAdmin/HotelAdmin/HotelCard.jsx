import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export const HotelCard = ({ hotel, handleEdit, handleDelete }) => {
  return (
    <div className="card p-3" style={{ width: '22rem' }}>
      <h5>{hotel.name}</h5>
      <p>{hotel.description}</p>
      <small>{hotel.address}</small>
      <div className="mt-3 d-flex justify-content-between">
        <button 
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#hotelsModal"
          onClick={() => handleEdit(hotel)}
        >
          <FaEdit />
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => handleDelete(hotel._id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}
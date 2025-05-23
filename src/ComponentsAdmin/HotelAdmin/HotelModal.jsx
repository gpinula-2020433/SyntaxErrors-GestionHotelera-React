import React from "react"
import { HotelForm } from "./HotelForm"
import "./HotelPage.css"

export const HotelModal = ({ isEdit, setIsEdit, hotel, closeModal, refreshHotels }) => {
  return (
    <div className="custom-modal-background" onClick={closeModal}>
      <div
        className="custom-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <button onClick={closeModal} className="btn-close">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <HotelForm hotel={hotel} closeModal={closeModal} refreshHotels={refreshHotels} />
        </div>
      </div>
    </div>
  )
}

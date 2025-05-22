/* import React from 'react'
import { HotelForm } from './HotelForm'

export const HotelModal = ({ isEdit, setIsEdit, hotel }) => {
  return (
    + <div className="modal fade" id="hotelModal" tabIndex="-1" aria-labelledby="hotelModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="hotelModalLabel">
              { isEdit ? 'Editar hotel' : 'Agregar hotel' }
            </h1>
            <button  
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={()=> setIsEdit(false)}
            ></button>
          </div>
          <div className="modal-body">
            <HotelForm hotel={hotel} />
          </div>
        </div>
      </div>
    </div>
  )
} */
/* import React from "react";
import { HotelForm } from "./HotelForm";

export const HotelModal = ({ isEdit, show, onClose, hotel }) => {
  if (!show) return null;

  // Evitar que click en contenido cierre el modal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="custom-modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={handleModalContentClick}
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="hotelModalLabel">
              {isEdit ? "Editar hotel" : "Agregar hotel"}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <HotelForm hotel={hotel} onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}; */
/* import React from "react";
import { HotelForm } from "./HotelForm";

export const HotelModal = ({ isEdit, setIsEdit, hotel, addHotel, updateHotel }) => {
  // Para cerrar modal Bootstrap desde React
  const handleCloseModal = () => {
    setIsEdit(false);
    const modalEl = document.getElementById("hotelModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };

  return (
    <div
      className="modal fade"
      id="hotelModal"
      tabIndex="-1"
      aria-labelledby="hotelModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="hotelModalLabel">
              {isEdit ? "Editar hotel" : "Agregar hotel"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <HotelForm
              hotel={hotel}
              isEdit={isEdit}
              addHotel={addHotel}
              updateHotel={updateHotel}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; */

import React from "react"
import { HotelForm } from "./HotelForm"
import "./HotelPage.css"

export const HotelModal = ({ isEdit, setIsEdit, hotel, closeModal }) => {
  return (
    <div className="custom-modal-background" onClick={closeModal}>
      <div
        className="custom-modal-content"
        onClick={e => e.stopPropagation()} // Para que no cierre al hacer click dentro del modal
      >
        <div className="modal-header">
          <h1>{isEdit ? "Editar hotel" : "Agregar hotel"}</h1>
          <button onClick={closeModal} className="btn-close">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <HotelForm hotel={hotel} closeModal={closeModal} />
        </div>
      </div>
    </div>
  )
}

/* import React, { useState } from "react"
import "./HotelPage.css"
import { HotelModal } from "./HotelModal"
import { useHotelsAdmin } from "../../../src/shared/hooks/useHotelAdmin"

export const HotelPage = () => {
  const { hotels, isFetching, addHotel, updateHotel ,deleteHotel } = useHotelsAdmin()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState(null)

  const handleAdd = () => {
    setSelectedHotel(null)
    setIsEdit(false)
  }

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel)
    setIsEdit(true)
  }

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de eliminar este hotel?")) {
      deleteHotel(id)
    }
  }

  if (isFetching) {
    return <span>Cargando hoteles...</span>
  }

  console.log("Render HotelPage");
  return (
    <div className="hotel-container">
      <HotelModal isEdit={isEdit} setIsEdit={setIsEdit} hotel={selectedHotel} />

      <div className="hotel-header">
        <h2>Lista De Hoteles</h2>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#hotelModal"
          onClick={handleAdd}
        >
          Agregar Nuevo Hotel
        </button>
      </div>

      <div className="table-responsive">
        <table className="hotel-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Descripción</th>
              <th>Teléfono</th>
              <th>Categoría</th>
              <th>Comodidades</th>
              <th>Servicios</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel._id}>
                <td>{index + 1}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.description}</td>
                <td>{hotel.phone}</td>
                <td>{hotel.category}</td>
                <td>{hotel.amenities?.join(", ")}</td>
                <td>{hotel.services?.map(s => s.name).join(", ")}</td>
                <td>
                  <img src={hotel.image} alt="hotel" width="60" />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#hotelModal"
                    onClick={() => handleEdit(hotel)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(hotel._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HotelPage
 */
/* import React, { useState } from "react";
import "./HotelPage.css";
import { HotelModal } from "./HotelModal";
import { useHotelsAdmin } from "../../../src/shared/hooks/useHotelAdmin";

export const HotelPage = () => {
  const { hotels, isFetching, addHotel, updateHotel, deleteHotel } = useHotelsAdmin();

  const [isEdit, setIsEdit] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    setSelectedHotel(null);
    setIsEdit(false);
    setShowModal(true); // abrir modal
  };

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel);
    setIsEdit(true);
    setShowModal(true); // abrir modal
  };

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de eliminar este hotel?")) {
      deleteHotel(id);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setSelectedHotel(null);
  };

  if (isFetching) {
    return <span>Cargando hoteles...</span>;
  }

  return (
    <div className="hotel-container">
      <HotelModal
        isEdit={isEdit}
        show={showModal}
        onClose={handleCloseModal}
        hotel={selectedHotel}
      />

      <div className="hotel-header">
        <h2>Lista De Hoteles</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          Agregar Nuevo Hotel
        </button>
      </div>

      <div className="table-responsive">
        <table className="hotel-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Descripción</th>
              <th>Teléfono</th>
              <th>Categoría</th>
              <th>Comodidades</th>
              <th>Servicios</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel._id}>
                <td>{index + 1}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.description}</td>
                <td>{hotel.phone}</td>
                <td>{hotel.category}</td>
                <td>{hotel.amenities?.join(", ")}</td>
                <td>{hotel.services?.map((s) => s.name).join(", ")}</td>
                <td>
                  <img src={hotel.image} alt="hotel" width="60" />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(hotel)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(hotel._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelPage; */


/* import React, { useState } from "react";
import "./HotelPage.css";
import { HotelModal } from "./HotelModal";
import { useHotelsAdmin } from "../../../src/shared/hooks/useHotelAdmin";

export const HotelPage = () => {
  const { hotels, isFetching, addHotel, updateHotel, deleteHotel } = useHotelsAdmin();
  const [isEdit, setIsEdit] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleAdd = () => {
    setSelectedHotel(null);
    setIsEdit(false);
  };

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de eliminar este hotel?")) {
      deleteHotel(id);
    }
  };

  if (isFetching) {
    return <span>Cargando hoteles...</span>;
  }

  return (
    <div className="hotel-container">
      <HotelModal isEdit={isEdit} setIsEdit={setIsEdit} hotel={selectedHotel} addHotel={addHotel} updateHotel={updateHotel} />

      <div className="hotel-header">
        <h2>Lista De Hoteles</h2>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#hotelModal"
          onClick={handleAdd}
        >
          Agregar Nuevo Hotel
        </button>
      </div>

      <div className="table-responsive">
        <table className="hotel-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Descripción</th>
              <th>Teléfono</th>
              <th>Categoría</th>
              <th>Comodidades</th>
              <th>Servicios</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel._id}>
                <td>{index + 1}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.description}</td>
                <td>{hotel.phone}</td>
                <td>{hotel.category}</td>
                <td>{hotel.amenities?.join(", ")}</td>
                <td>{hotel.services?.map((s) => s.name).join(", ")}</td>
                <td>
                  <img src={hotel.image} alt="hotel" width="60" />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#hotelModal"
                    onClick={() => handleEdit(hotel)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(hotel._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelPage; */


import React, { useState } from "react"
import "./HotelPage.css"
import { HotelModal } from "./HotelModal"
import { useHotelsAdmin } from "../../../src/shared/hooks/useHotelAdmin"

export const HotelPage = () => {
  const { hotels, isFetching, addHotel, updateHotel, deleteHotel } = useHotelsAdmin()

  const [isEdit, setIsEdit] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleAdd = () => {
    setSelectedHotel(null)
    setIsEdit(false)
    setModalOpen(true)
  }

  const handleEdit = (hotel) => {
    setSelectedHotel(hotel)
    setIsEdit(true)
    setModalOpen(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este hotel?")) {
      deleteHotel(id)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
    setIsEdit(false)
  }

  if (isFetching) {
    return <span>Cargando hoteles...</span>
  }

  return (
    <div className="hotel-container">
      {modalOpen && (
        <HotelModal
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          hotel={selectedHotel}
          closeModal={closeModal}
        />
      )}

      <div className="hotel-header">
        <h2>Lista De Hoteles</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          Agregar Nuevo Hotel
        </button>
      </div>

      <div className="table-responsive">
        <table className="hotel-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Descripción</th>
              <th>Teléfono</th>
              <th>Categoría</th>
              <th>Comodidades</th>
              <th>Servicios</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel._id}>
                <td>{index + 1}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.description}</td>
                <td>{hotel.phone}</td>
                <td>{hotel.category}</td>
                <td>{hotel.amenities?.join(", ")}</td>
                <td>{hotel.services?.map(s => s.name).join(", ")}</td>
                <td>
                  <img src={hotel.image} alt="hotel" width="60" />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(hotel)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(hotel._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HotelPage

import React from 'react';
import { useInvoices } from '../../shared/hooks/useInvoices';
import './Invoice.css'
export const InvoicePage = () => {
  const { invoices, isFetching } = useInvoices();

  if (isFetching) {
    return <span>Cargando facturas...</span>;
  }
   
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Mis Facturas</h2>
      {invoices.length === 0 ? (
        <p>No hay facturas para mostrar</p>
      ) : (
        <div className="row">
          {invoices.map((invoice) => (
            <div className="col-md-6 mb-4" key={invoice._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Factura #{invoice._id.slice(-6)}</h5>
                  <p><strong>Cliente:</strong> {invoice.customer.name} {invoice.customer.surname}</p>
                  <p><strong>NIT:</strong> {invoice.NIT}</p>
                  <p><strong>Fecha:</strong> {new Date(invoice.date).toLocaleString('es-ES')}</p>

                  <h6 className="mt-3">Reservación</h6>
                  <ul className="list-group mb-3">
                    {invoice.room.map((room, index) => (
                      <li className="list-group-item" key={room._id}>
                        <p><strong>Hotel:</strong> {room.hotel.name}</p>
                        <p><strong>Dirección:</strong> {room.hotel.address}</p>
                        <p><strong>Habitación:</strong> {room.roomNumber} </p>
                        <p><strong>Descripción:</strong> {room.roomDescription}</p>
                        <p><strong>Tipo:</strong> {room.type}</p>
                        <p><strong>Días:</strong> {invoice.days[index]}</p>
                      </li>
                    ))}
                  </ul>

                  <p><strong>Precio por noche:</strong> Q{invoice.pricePerNight}</p>
                  <p><strong>Total:</strong> <span className="text-success fw-bold">Q{invoice.total}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import { useEffect, useState } from 'react';
import { getInvoicesByCustomerRequest } from '../../services/api'; // Ajusta la ruta

export const useInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  const getInvoices = async () => {
    const response = await getInvoicesByCustomerRequest();
    if (response.error) {
      alert('Error al obtener las facturas');
      console.error(response.err);
      return;
    }
    setInvoices(response.invoices || []);
  };

  useEffect(() => {
    getInvoices();
  }, []);

  return {
    invoices,
    getInvoices,
    isFetching: invoices.length === 0,
  };
};

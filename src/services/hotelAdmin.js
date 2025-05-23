import axios from "axios";

// Configuración base
const apiHotelAdmin = axios.create({
  baseURL: 'http://localhost:3200/v1/hotel',
  timeout: 2000
});

// Adjuntar token JWT automáticamente a cada request
apiHotelAdmin.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Obtener todos los hoteles
export const getHotelsRequest = async () => {
  try {
    const response = await apiHotelAdmin.get('/');
    return response.data.hotel;
  } catch (err) {
    return { error: true, err };
  }
};


// Agregar nuevo hotel
export const addHotelRequest = async (formData) => {
  try {
    const response = await apiHotelAdmin.post('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (err) {
    return { error: true, err };
  }
};

// Actualizar hotel (sin imagen)
export const updateHotelRequest = async (id, data) => {
  try {
    const response = await apiHotelAdmin.put(`/${id}`, data);
    return response.data;
  } catch (err) {
    return { error: true, err };
  }
};

// Actualizar imagen del hotel
export const updateHotelImageRequest = async (id, formData) => {
  try {
    const response = await apiHotelAdmin.put(`/updateHotelImage/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (err) {
    return { error: true, err };
  }
};

// Eliminar hotel
export const deleteHotelRequest = async (id) => {
  try {
    const response = await apiHotelAdmin.delete(`/${id}`);
    return response.data;
  } catch (err) {
    return { error: true, err };
  }
}


// Obtener todos los servicios
export const getAllServices = async () => {
  try {
    const response = await axios.get('http://localhost:3200/v1/service/', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    return response.data.services; // Ajusta si tu backend devuelve otra estructura
  } catch (err) {
    return { error: true, err };
  }
};

import { useEffect, useState } from 'react';
import { getUserRequest } from '../../services/api';
import { jwtDecode } from 'jwt-decode';

export const useUser = () => {
  const [user, setUser] = useState(null); // null es mejor que []
  const [isFetching, setIsFetching] = useState(true);

  const getUserById = async () => {
    setIsFetching(true);

    const token = localStorage.getItem('token');
    if (!token) {
      alert('No hay token encontrado');
      setIsFetching(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const id = decoded.uid;

      const response = await getUserRequest(id);

      if (response.error) {
        console.error(response.error);
        alert('Error al obtener datos del usuario');
        setUser(null);
      } else {
        setUser(response.data?.user || null);
      }
    } catch (err) {
      console.error('Error decodificando token o cargando usuario', err);
      setUser(null);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    getUserById();
  }, []);

  return {
    user,
    setUser,
    getUserById,
    isFetching
  };
};

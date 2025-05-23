import React, { useEffect } from 'react';
import { useUser } from '../../shared/hooks/useUser';
import { UserCard } from './UserCard';
import { deleteUserRequest } from '../../services/api';
import { useNavigate } from 'react-router-dom'

export const UserData = () => {
  const { user, isFetching } = useUser();
  const navigate = useNavigate()

  if (isFetching) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3 text-muted">Cargando hoteles...</p>
      </div>
    );
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      '¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.'
    );

    if (!confirmDelete) return;

    try {
      const password = prompt('Por seguridad, ingresa tu contraseña:');
      if (!password) return alert('La contraseña es requerida');

      const response = await deleteUserRequest(user._id, password);

      if (response.data?.message) {
        alert('Cuenta eliminada correctamente');
        localStorage.removeItem('token');
        navigate('/');
      } else {
        alert('Error al eliminar la cuenta');
      }
    } catch (error) {
      alert(
        'No se pudo eliminar la cuenta: ' +
          (error?.response?.data?.message || 'Error desconocido')
      );
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <UserCard
            name={user.name}
            surname={user.surname}
            username={user.username}
            email={user.email}
            phone={user.phone}
          />
          <div className="text-center mt-2">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700"
        >
          Eliminar cuenta
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

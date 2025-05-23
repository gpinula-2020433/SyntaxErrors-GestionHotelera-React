import React, { useState, useEffect } from 'react';
import { updateUserRequest } from '../../services/api';
import { useUser } from '../../shared/hooks/useUser';
import './UpdateU.css'

export const UpdateUserPage = () => {
  const { user, setUser, isFetching } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    email: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        surname: user.surname || '',
        username: user.username || '',
        email: user.email || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    const id = user._id;
    const response = await updateUserRequest(id, formData);

    if (response.error) {
      alert('Error al actualizar el usuario');
    } else {
      alert('Usuario actualizado correctamente');
      setUser({ ...user, ...formData });
    }
  };

  if (isFetching) return <p>Cargando datos del usuario...</p>;
  if (!user) return <p>No se encontró el usuario.</p>;

  return (
    <div className="update-user-container">
      <h2 className="title">Actualizar datos</h2>

      <label>Nombre</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Apellido</label>
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} />

      <label>Usuario</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      <label>Correo</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <button onClick={handleUpdate}>Actualizar datos</button>
    </div>
  );
};

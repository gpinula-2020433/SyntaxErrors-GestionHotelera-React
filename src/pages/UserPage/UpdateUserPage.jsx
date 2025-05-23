import React, { useState, useEffect } from 'react';
import { updateUserRequest } from '../../services/api';
import { useUser } from '../../shared/hooks/useUser';
import { toast } from 'react-hot-toast';
import './UpdateU.css';
import { useNavigate } from 'react-router-dom';

export const UpdateUserPage = () => {
  const { user, setUser, isFetching, getUserById} = useUser();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    email: ''
  });

  const navigate = useNavigate

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
    try {
      const id = user._id;
      const response = await updateUserRequest(id, formData);

      if (response.error) {
        toast.error('Error al actualizar el usuario');
      } else {
        toast.success('Usuario actualizado correctamente');
        setUser({ ...user, ...formData });

        await getUserById();
      }
    } catch (error) {
      toast.error('Hubo un problema al intentar actualizar');
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

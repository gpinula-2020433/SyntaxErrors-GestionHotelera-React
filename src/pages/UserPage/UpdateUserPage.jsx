import React, { useState, useEffect } from 'react';
import { updateUserRequest } from '../../services/api';
import { useUser } from '../../shared/hooks/useUser';


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
      setUser({ ...user, ...formData }); // actualizar localmente
    }
  };

  if (isFetching) return <p>Cargando datos del usuario...</p>;
  if (!user) return <p>No se encontró el usuario.</p>;

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Actualizar datos</h2>

      <label className="block mb-2">Nombre</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-black"
      />

      <label className="block mb-2">Apellido</label>
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-black"
      />

      <label className="block mb-2">Usuario</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-black"
      />

      <label className="block mb-2">Correo</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-black"
      />

      <button
        onClick={handleUpdate}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
      >
        Actualizar datos
      </button>
    </div>
  );
};

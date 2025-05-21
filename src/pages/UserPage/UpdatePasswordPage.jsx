import React, { useState } from 'react';
import { useUser } from '../../shared/hooks/useUser';
import { updatePasswordRequest } from '../../services/api';

export const UpdatePasswordPage = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.currentPassword || !formData.newPassword) {
      alert('Por favor completa ambos campos');
      return;
    }

    try {
      const res = await updatePasswordRequest(user._id, formData);
      if (res.data?.message) {
        alert(res.data.message);
        setFormData({ currentPassword: '', newPassword: '' });
      } else {
        alert('Error actualizando la contraseña');
      }
    } catch (err) {
      alert('Contraseña actual incorrecta o error en el servidor');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-black rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Actualizar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Contraseña actual
        </label>
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded text-black"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Nueva contraseña
        </label>
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded text-black"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};
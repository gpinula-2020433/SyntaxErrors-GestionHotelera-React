import React, { useState } from 'react';
import { useUser } from '../../shared/hooks/useUser';
import { updatePasswordRequest } from '../../services/api';
import { toast } from 'react-hot-toast'; // ✅ Importar toast
import './UpdateP.css';

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
      toast.error('Por favor completa ambos campos');
      return;
    }

    try {
      const res = await updatePasswordRequest(user._id, formData);
      if (res.data?.message) {
        toast.success(res.data.message);
        setFormData({ currentPassword: '', newPassword: '' });
      } else {
        toast.error('Error actualizando la contraseña');
      }
    } catch (err) {
      toast.error('Contraseña actual incorrecta o error en el servidor');
    }
  };

  return (
    <div className="update-password-container">
      <h2 className="title">Actualizar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label>Contraseña actual</label>
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
        />

        <label>Nueva contraseña</label>
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

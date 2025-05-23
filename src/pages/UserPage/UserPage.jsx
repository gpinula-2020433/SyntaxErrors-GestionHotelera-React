import React from 'react';
import Layout from '../../components/Layout/Layout';
import { UserData } from '../../components/user/UserData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import './UserPage.css'; // Asegúrate de importar este CSS

export const UserPage = () => {
  return (
    <Layout>
      <div className="user-page-container">
        <UserData />
        <div className="user-page-buttons">
          <Link to="/user/edit" className="user-btn blue">Actualizar Datos</Link>
          <Link to="/user/password" className="user-btn purple">Actualizar Contraseña</Link>
        </div>
        <Outlet />
      </div>
    </Layout>
  );
};

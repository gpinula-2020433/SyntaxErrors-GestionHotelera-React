import React from 'react'
import Layout from '../../components/Layout/Layout'
import { UserData } from '../../components/user/UserData'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

export const UserPage = () => {
  return (
    <Layout>
        <UserData />
        <Link to="/user/edit">Actulizar Datos</Link>
        <Link to="/user/password">Actulizar Contraseña</Link>
        <Outlet />
    </Layout>
  )
}

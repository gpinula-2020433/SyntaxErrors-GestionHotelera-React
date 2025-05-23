import React from 'react'
import { AuthPage } from './pages/Auth/AuthPage'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import { AdminPage } from './pages/AdminPage/AdminPage'
import RoomPage from './ComponentsAdmin/RoomAdmin/RoomPage'
import { HotelPage } from './ComponentsAdmin/HotelAdmin/HotelPage'
import HomePage from './pages/HomePage/HomePage'
import { UserPage } from './pages/UserPage/userPage'
import { UpdateUserPage } from './pages/UserPage/UpdateUserPage'
import { UpdatePasswordPage } from './pages/UserPage/UpdatePasswordPage'
import { HotelList } from './components/Hotel/HotelList'
import { HotelDetails } from './pages/HotelDetailsPage/HotelDetails'
import { ReservationForm } from './pages/ReservationPage/ReservationForm'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute' // asegúrate que esta ruta sea correcta

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
    children: [
      { path: '', element: <Navigate to="login" /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  },
  {
    path: '/main',
    element: <MainPage />,
    children: [
        { path: 'hotellist', element: <HotelList /> },
        { path: 'hoteldetails/:id', element: <HotelDetails /> },
        {
            element: <ProtectedRoute />,
            children: [
                { path: 'reservation', element: <ReservationForm /> }
            ]
        }  
        ]
    },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          { path: '', element: <Navigate to="hotel" /> },
          { path: 'hotel', element: <HotelPage /> },
          { path: 'room', element: <RoomPage /> }
        ]
      },
      {
        path: '/user',
        element: <UserPage />,
        children: [
          { path: 'edit', element: <UpdateUserPage /> },
          { path: 'password', element: <UpdatePasswordPage /> }
        ]
      }
    ]
  }
]

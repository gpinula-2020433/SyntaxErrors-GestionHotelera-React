// src/components/ProtectedRoute.jsx
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const token = localStorage.getItem('token')
  return token ? <Outlet /> : <Navigate to="/auth/login" replace />
}

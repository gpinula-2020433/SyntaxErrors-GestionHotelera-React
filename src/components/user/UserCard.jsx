import React from 'react'

export const UserCard = ({ name, surname, username, email, phone }) => {

  return (
    <div className=''>
        <div className=''>
            <center><h5>{name} {surname} </h5></center>
            <p>Nombre de Usuario: {username}</p>
            <p>Correo: {email}</p>
            <p>Telefono: {phone}</p>
        </div>
        <div>
        </div>
    </div>
  )
}

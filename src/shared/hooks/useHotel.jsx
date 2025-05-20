import React, { useEffect, useState } from 'react'
import { getHotelsRequest } from '../../services/api'

export const useHotel = () => {
  const [hotels, setHotels] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const getHotels = async () => {
    setIsFetching(true)

    const response = await getHotelsRequest()
    console.log("Respuesta completa:", response);
    if (response.error) {
      console.error(response.err)
      alert('Error al obtener los hoteles')
      setHotels([])
    } else {
      setHotels(response.data?.hotel || [])
 // asegúrate que sea array
    }

    setIsFetching(false)
  }

  useEffect(() => {
    getHotels()
  }, [])

  return {
    hotels,
    getHotels,
    isFetching
  }
}

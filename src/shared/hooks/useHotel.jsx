import React, { useEffect, useState } from 'react'
import { getHotelsRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useHotel = () => {
  const [hotels, setHotels] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const getHotels = async () => {
    setIsFetching(true)

    const response = await getHotelsRequest()
    console.log("Respuesta completa:", response)

    if (response.error) {
      console.error(response.err)
      toast.error('Error al obtener los hoteles')
      setHotels([])
    } else {
      setHotels(response.data?.hotel || [])
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

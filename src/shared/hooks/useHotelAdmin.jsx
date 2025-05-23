import { useState, useEffect } from 'react'
import {
  getHotelsRequest,
  addHotelRequest,
  updateHotelRequest,
  updateHotelImageRequest,
  deleteHotelRequest
} from '../../services/hotelAdmin'

export const useHotelsAdmin = () => {
  const [hotels, setHotels] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetchHotels()
  }, [])

  const fetchHotels = async () => {
    setIsFetching(true)
    const res = await getHotelsRequest()
    if (!res.error) {
      setHotels(res)
    }
    setIsFetching(false)
  }

  const addHotel = async (formData) => {
    const res = await addHotelRequest(formData)
    if (!res.error) {
      fetchHotels()
    }
    return res
  }

  // Aquí actualizas datos + imagen
  const updateHotel = async (id, updatedHotelData, imageFile) => {
    try {
      // 1. Actualizar datos
      const resData = await updateHotelRequest(id, updatedHotelData)
      if (resData.error) throw resData.err

      // 2. Si hay imagen, actualizarla
      if (imageFile) {
        const formData = new FormData()
        formData.append('imageHotel', imageFile)
        const resImage = await updateHotelImageRequest(id, formData)
        if (resImage.error) throw resImage.err
      }

      fetchHotels()
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  const deleteHotel = async (id) => {
    const res = await deleteHotelRequest(id)
    if (!res.error) {
      fetchHotels()
    }
    return res
  }

  return {
    hotels,
    isFetching,
    addHotel,
    updateHotel,
    deleteHotel,
    fetchHotels
  }
}

import { useState, useEffect } from 'react'
import {
  getHotelsRequest,
  addHotelRequest,
  updateHotelRequest,
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

  const updateHotel = async (id, updatedHotel) => {
    const res = await updateHotelRequest(id, updatedHotel)
    if (!res.error) {
      fetchHotels()
    }
    return res
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
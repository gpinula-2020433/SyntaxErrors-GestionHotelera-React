import { useEffect, useState } from 'react'
import { getHotelDetailsRequest } from '../../services/api'

export const useHotelDetails = (id) => {
  const [details, setDetails] = useState({
    hotel: null,
    rooms: [],
    events: [],
    services: []
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await getHotelDetailsRequest(id)

        if (response.error || !response.data?.success) {
          throw new Error(response?.data?.message || 'Error al obtener los detalles')
        }

        setDetails(response.data.data)
      } catch (err) {
        console.error('Error cargando detalles del hotel:', err)
        setError(err.message)
        alert('Error al obtener los detalles del hotel')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      setLoading(true)
      fetchHotelDetails()
    }
  }, [id])

  return {
    ...details,
    loading,
    error
  }
}
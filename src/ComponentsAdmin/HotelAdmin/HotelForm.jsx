import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useHotelsAdmin } from "../../shared/hooks/useHotelAdmin"
import { getAllServices } from "../../services/hotelAdmin"
import { toast } from "react-hot-toast"

export const HotelForm = ({ hotel, closeModal, refreshHotels }) => {
  const { addHotel, updateHotel } = useHotelsAdmin()
  const [availableServices, setAvailableServices] = useState([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: hotel || {
      name: "",
      address: "",
      description: "",
      phone: "",
      category: "",
      amenities: "",
      services: "",
      image: "",
    },
  })

  useEffect(() => {
    if (hotel) {
      reset({
        ...hotel,
        amenities: hotel.amenities?.join(", ") || "",
        services: hotel.services?.[0]?._id || "",
      })
    } else {
      reset({
        name: "",
        address: "",
        description: "",
        phone: "",
        category: "",
        amenities: "",
        services: "",
        image: "",
      })
    }

    const fetchServices = async () => {
      const res = await getAllServices()
      if (!res.error) {
        setAvailableServices(res)
      }
    }
    fetchServices()
  }, [hotel, reset])

  const submit = async (data) => {
    const formattedData = {
      ...data,
      amenities: data.amenities
        ? data.amenities.split(",").map((a) => a.trim())
        : [],
      services: data.services ? [data.services] : [],
    }

    let res
    if (hotel && hotel._id) {
      res = await updateHotel(hotel._id, formattedData)
    } else {
      res = await addHotel(formattedData)
    }

    if (!res.error) {
      closeModal()
      refreshHotels()
      reset()
      toast.success("Hotel guardado con éxito!")
    } else {
      toast.error("Error al guardar hotel, NO ERES ADMINISTRADOR!")
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="w-100">
      <h2 className="text-center mb-4 text-dark">
        {hotel ? "Editar Hotel" : "Agregar Nuevo Hotel"}
      </h2>

      <div className="mb-3">
        <label className="text-dark"><strong>Nombre del hotel:</strong></label>
        <input
          {...register("name", { required: "El nombre es obligatorio" })}
          className="form-control"
        />
        {errors.name && <small className="text-danger">{errors.name.message}</small>}
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>Dirección:</strong></label>
        <input
          {...register("address", { required: "La dirección es obligatoria" })}
          className="form-control"
        />
        {errors.address && <small className="text-danger">{errors.address.message}</small>}
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>Descripción:</strong></label>
        <textarea
          {...register("description", { required: "La descripción es obligatoria" })}
          className="form-control"
          rows={3}
        />
        {errors.description && (
          <small className="text-danger">{errors.description.message}</small>
        )}
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>Teléfono:</strong></label>
        <input
          {...register("phone", { required: "El teléfono es obligatorio" })}
          className="form-control"
        />
        {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>Categoría:</strong></label>
        <input
          {...register("category", { required: "La categoría es obligatoria" })}
          className="form-control"
        />
        {errors.category && <small className="text-danger">{errors.category.message}</small>}
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>Comodidades</strong> (separadas por coma):</label>
        <input {...register("amenities")} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>Servicios:</strong></label>
        <select
          {...register("services", { required: "Selecciona un servicio" })}
          className="form-control"
        >
          <option value="">Selecciona un servicio</option>
          {availableServices.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        {errors.services && <small className="text-danger">{errors.services.message}</small>}
      </div>

      <div className="mb-3">
        <label className="text-dark"><strong>URL de la imagen:</strong></label>
        <input {...register("image")} className="form-control" />
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-success">
          {hotel ? "Actualizar Hotel" : "Agregar Hotel"}
        </button>
      </div>
    </form>
  )
}
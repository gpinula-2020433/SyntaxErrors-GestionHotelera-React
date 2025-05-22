/* import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHotelsAdmin } from '../../shared/hooks/useHotelAdmin'

export const HotelForm = ({ hotel }) => {
  const { addHotel, updateHotel } = useHotelsAdmin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    defaultValues: hotel
  })

  useEffect(() => {
    if(hotel) {
      reset(hotel)
    } else {
      reset()
    }
  }, [hotel, reset])

  const submit = async (data) => {
    let res
    if (data._id) {
      res = await updateHotel(data._id, data)
    } else {
      res = await addHotel(data)
    }
    if (!res.error) {
      // Cerrar modal bootstrap con JS
      const modalEl = document.getElementById('hotelModal')
      const modal = window.bootstrap.Modal.getInstance(modalEl)
      modal.hide()
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='w-100'>
    </form>
  )
}
 */


/* import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHotelsAdmin } from "../../shared/hooks/useHotelAdmin";

export const HotelForm = ({ hotel, onClose }) => {
  const { addHotel, updateHotel } = useHotelsAdmin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: hotel,
  });

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    } else {
      reset();
    }
  }, [hotel, reset]);

  const submit = async (data) => {
    let res;
    if (data._id) {
      res = await updateHotel(data._id, data);
    } else {
      res = await addHotel(data);
    }
    if (!res.error) {
      reset();
      if (onClose) onClose(); // cerrar modal con React
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="w-100">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          id="name"
          {...register("name", { required: "El nombre es obligatorio" })}
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        {hotel ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}; */
/* import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const HotelForm = ({ hotel, isEdit, addHotel, updateHotel, onClose }) => {
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
      image: null,
    },
  });

  useEffect(() => {
    if (hotel) {
      // Para amenities y services, convierto arrays a string separados por coma
      reset({
        ...hotel,
        amenities: hotel.amenities ? hotel.amenities.join(", ") : "",
        services: hotel.services ? hotel.services.map((s) => s.name).join(", ") : "",
        image: null, // imagen no se rellena
      });
    } else {
      reset({
        name: "",
        address: "",
        description: "",
        phone: "",
        category: "",
        amenities: "",
        services: "",
        image: null,
      });
    }
  }, [hotel, reset]);

  const submit = async (data) => {
    // Procesar amenities y services para enviarlos como arrays
    const formattedData = {
      ...data,
      amenities: data.amenities
        ? data.amenities.split(",").map((a) => a.trim())
        : [],
      services: data.services
        ? data.services.split(",").map((s) => ({ name: s.trim() }))
        : [],
    };

    // Manejo imagen separado si hay archivo
    if (data.image && data.image.length > 0) {
      // Para enviar imagen, si es necesario, usa FormData en addHotel o updateHotel
      // Aquí sólo ejemplo simple
      formattedData.image = data.image[0]; // archivo
    }

    let res;
    if (hotel && hotel._id) {
      res = await updateHotel(hotel._id, formattedData);
    } else {
      res = await addHotel(formattedData);
    }

    if (!res.error) {
      onClose();
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="w-100">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre del hotel *
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Dirección *
        </label>
        <input
          type="text"
          id="address"
          className="form-control"
          {...register("address", { required: "La dirección es obligatoria" })}
        />
        {errors.address && <p className="text-danger">{errors.address.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción *
        </label>
        <textarea
          id="description"
          className="form-control"
          {...register("description", { required: "La descripción es obligatoria" })}
        />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Teléfono *
        </label>
        <input
          type="text"
          id="phone"
          className="form-control"
          {...register("phone", { required: "El teléfono es obligatorio" })}
        />
        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categoría *
        </label>
        <input
          type="text"
          id="category"
          className="form-control"
          {...register("category", { required: "La categoría es obligatoria" })}
        />
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="amenities" className="form-label">
          Comodidades (separadas por coma)
        </label>
        <input
          type="text"
          id="amenities"
          className="form-control"
          {...register("amenities")}
          placeholder="Ejemplo: Wifi, Piscina, Gimnasio"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="services" className="form-label">
          Servicios (separados por coma)
        </label>
        <input
          type="text"
          id="services"
          className="form-control"
          {...register("services")}
          placeholder="Ejemplo: Limpieza, Desayuno, Taxi"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Imagen del hotel
        </label>
        <input
          type="file"
          id="image"
          className="form-control"
          {...register("image")}
          accept="image/*"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {isEdit ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}; */


/* import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useHotelsAdmin } from "../../shared/hooks/useHotelAdmin"

export const HotelForm = ({ hotel, closeModal }) => {
  const { addHotel, updateHotel } = useHotelsAdmin()

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
        services: hotel.services?.map((s) => s.name).join(", ") || "",
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
  }, [hotel, reset])

  const submit = async (data) => {
    // Convertir amenities y services a arrays
    const formattedData = {
      ...data,
      amenities: data.amenities
        ? data.amenities.split(",").map((a) => a.trim())
        : [],
      services: data.services
        ? data.services.split(",").map((s) => ({ name: s.trim() }))
        : [],
    }

    let res
    if (hotel && hotel._id) {
      res = await updateHotel(hotel._id, formattedData)
    } else {
      res = await addHotel(formattedData)
    }

    if (!res.error) {
      closeModal()
      reset()
    } else {
      alert("Error al guardar hotel")
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="w-100">
      <div className="mb-3">
        <label>Nombre</label>
        <input
          {...register("name", { required: "El nombre es obligatorio" })}
          className="form-control"
        />
        {errors.name && <small className="text-danger">{errors.name.message}</small>}
      </div>

      <div className="mb-3">
        <label>Dirección</label>
        <input
          {...register("address", { required: "La dirección es obligatoria" })}
          className="form-control"
        />
        {errors.address && <small className="text-danger">{errors.address.message}</small>}
      </div>

      <div className="mb-3">
        <label>Descripción</label>
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
        <label>Teléfono</label>
        <input
          {...register("phone", { required: "El teléfono es obligatorio" })}
          className="form-control"
        />
        {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
      </div>

      <div className="mb-3">
        <label>Categoría</label>
        <input
          {...register("category", { required: "La categoría es obligatoria" })}
          className="form-control"
        />
        {errors.category && <small className="text-danger">{errors.category.message}</small>}
      </div>

      <div className="mb-3">
        <label>Comodidades (separadas por coma)</label>
        <input {...register("amenities")} className="form-control" />
      </div>

      <div className="mb-3">
        <label>Servicios (separados por coma)</label>
        <input {...register("services")} className="form-control" />
      </div>

      <div className="mb-3">
        <label>Imagen (URL)</label>
        <input {...register("image")} className="form-control" />
      </div>

      <button type="submit" className="btn btn-success">
        {hotel ? "Actualizar" : "Agregar"}
      </button>
    </form>
  )
} */



  /* import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useHotelsAdmin } from "../../shared/hooks/useHotelAdmin"

export const HotelForm = ({ hotel, closeModal }) => {
  const { addHotel, updateHotel } = useHotelsAdmin()

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
        services: hotel.services?.map((s) => s.name).join(", ") || "",
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
  }, [hotel, reset])

  const submit = async (data) => {
    const formattedData = {
      ...data,
      amenities: data.amenities
        ? data.amenities.split(",").map((a) => a.trim())
        : [],
      services: data.services
        ? data.services.split(",").map((s) => ({ name: s.trim() }))
        : [],
    }

    let res
    if (hotel && hotel._id) {
      res = await updateHotel(hotel._id, formattedData)
    } else {
      res = await addHotel(formattedData)
    }

    if (!res.error) {
      closeModal()
      reset()
    } else {
      alert("Error al guardar hotel")
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
        <label  className="text-dark"><strong>Dirección:</strong></label>
        <input
          {...register("address", { required: "La dirección es obligatoria" })}
          className="form-control"
        />
        {errors.address && <small className="text-danger">{errors.address.message}</small>}
      </div>

      <div className="mb-3">
        <label  className="text-dark"><strong>Descripción:</strong></label>
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
        <label  className="text-dark"><strong>Teléfono:</strong></label>
        <input
          {...register("phone", { required: "El teléfono es obligatorio" })}
          className="form-control"
        />
        {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
      </div>

      <div className="mb-3">
        <label  className="text-dark"><strong>Categoría:</strong></label>
        <input
          {...register("category", { required: "La categoría es obligatoria" })}
          className="form-control"
        />
        {errors.category && <small className="text-danger">{errors.category.message}</small>}
      </div>

      <div className="mb-3">
        <label  className="text-dark"><strong>Comodidades</strong> (separadas por coma):</label>
        <input {...register("amenities")} className="form-control" />
      </div>

      <div className="mb-3">
        <label  className="text-dark"><strong>Servicios</strong> (separados por coma):</label>
        <input {...register("services")} className="form-control" />
      </div>

      <div className="mb-3">
        <label  className="text-dark"><strong>URL de la imagen:</strong></label>
        <input {...register("image")} className="form-control" />
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-success">
          {hotel ? "Actualizar Hotel" : "Agregar Hotel"}
        </button>
      </div>
    </form>
  )
} */


  import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useHotelsAdmin } from "../../shared/hooks/useHotelAdmin"
import { getAllServices } from "../../services/hotelAdmin"

export const HotelForm = ({ hotel, closeModal }) => {
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
        services: hotel.services?.[0]?._id || "", // Selecciona uno si hay
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
      reset()
    } else {
      alert("Error al guardar hotel")
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
// HotelForm.jsx
import { useState } from "react";
import axios from "axios";

export const HotelForm = ({hotel}) => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    stars: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/hotels", form)
      .then(() => alert("Hotel registrado"))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Hotel</h2>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Ubicación" onChange={handleChange} required />
      <input type="number" name="stars" placeholder="Estrellas" onChange={handleChange} required />
      <button type="submit">Registrar</button>
    </form>
  );
};

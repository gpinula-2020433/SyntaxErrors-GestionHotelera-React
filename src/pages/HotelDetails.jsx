// src/pages/HotelDetails.jsx
import React from 'react';
import HotelCard from '../components/hotel/HotelCard';
import RoomCard from '../components/room/RoomCard';
import EventCard from '../components/event/EventCard';
import ServiceCard from '../components/service/ServiceCard'

const HotelDetails = () => {
  const hotel = {
    name: "Hotel Paradise",
    description: "Un lugar perfecto para descansar y disfrutar.",
    location: "Playa del Carmen, México",
  };

  const room = {
    name: "Suite Deluxe",
    price: 200,
    capacity: 2,
    description: "Una habitación espaciosa con vistas al mar.",
  };

  const event = {
    name: "Concierto en vivo",
    date: "2025-05-01",
    description: "Disfruta de música en vivo en el hotel.",
  };

  const service = {
    name: "Spa",
    description: "Relájate con un masaje revitalizante.",
  };

  return (
    <div>
        <br />
        <br />
      <HotelCard hotel={hotel} />
      <HotelCard hotel={hotel} />
      <HotelCard hotel={hotel} />
      <HotelCard hotel={hotel} />
      <RoomCard room={room} />
      <EventCard event={event} />
      <ServiceCard service={service} />
    </div>
  );
};

export default HotelDetails;

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
    name: "Habitación Superior",
    roomNumber: "101",
    type: "suite",
    roomDescription: "Habitacion con hermosa vista a la ciudad capital de Guatemala",
    capacity: 4,
    pricePerNight: 500,
    status: "available",
    availabilityDates: [new Date("2025-05-01"), new Date("2025-05-02")],
    profilePicture: "https://media-cdn.tripadvisor.com/media/photo-s/2a/bb/4d/ee/guest-room.jpg",    
    hotel: "60d21b4667d0d8992e610c85" // ID de referencia del hotel
  }

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

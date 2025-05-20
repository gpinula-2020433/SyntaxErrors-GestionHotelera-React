import React from 'react';
import './HomePage.css';
import logo from '../../assets/logo.png';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="overlay" />
      <div className="content text-center">
        <img src={logo} alt="Logo Hotel" className="logo" />
        <h1 className="tagline">Bienvenido a Hoteles VIP</h1>
        <p className="subtext">Encuentra el lugar perfecto para relajarte o trabajar</p>
        <a href="/main" className="enter-btn">
          Entrar <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default HomePage;

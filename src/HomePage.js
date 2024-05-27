import React from 'react';
import './styles/HomePage.css';
import exampleImage from './image/es.png'; // Ruta de la imagen

function HomePage() {
  return (
    <div className="home-page">
      <h1>Bienvenidos a la página</h1>
      <p>Conexión al siguiente nivel</p>
      <img src={exampleImage} alt="Example" className="example-image" /> {/* Uso de exampleImage */}
    </div>
  );
}

export default HomePage;

import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="Rectangulo1">
        <img src="./imges/ImagenRegistro.png" alt="Imagen de Rectangulo Fondo" />
      </div>
      <div className="RegistroCoach">
        <h1 className="reg">Regístrate como Coach</h1>
        <div className="bolas">
          <div className="Bola1"></div>
          <div className="Bola2"></div>
          <div className="Bola3"></div>
          <div className="Linea1"></div>
          <div className="Linea2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

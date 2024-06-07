
import React from "react";
import "./Registroc.css";
import Header from "./components/Header";
import PersonalDataForm from "./components/PersonalDataForm";
import NextButton from "./components/NextButton";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ImagenRegistro from "./assets/ImagenRegistro.png"

function Registroc() {
  return (
    <div className="container-fluid">
      <Header />
      <Form />
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-md-3 rectangulo-container">
            <div className="rectangulo1">
              <img
                src={ImagenRegistro}
                alt="Descripción de la imagen"
              />
            </div>
          </div>
          <div className="col-md-9 main-content">
            <Header />
            <PersonalDataForm />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registroc;


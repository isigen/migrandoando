import React from 'react';
import "./Foot.css";

const Foot = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-div'>
            <img src="imges/logo blanco.png" alt="Logo" className="Fotofutel"></img>
          </div>
          <div className='sb_footer-div'>
            <h4>Digitall Connect</h4>
            <a href="/Inicio"className='a'>
              <p className='p'>Inicio</p>
            </a>
            <a href="/SobreNosotros" className='a'>
              <p className='p'>Sobre Nosotros</p>
            </a>
            <a href="/PreguntasFrecuentes" className='a'>
              <p className='p'>Preguntas Frecuentes</p>
            </a>
          </div>
          <div className='sb_footer-div'>
            <h4>Contacto</h4>
            <a href="/Email" className='a'>
              <p className='p'>Email</p>
            </a>
            <a href="/Linkedin" className='a'>
              <p className='p'>Linkedin</p>
            </a>
            <a href="/Facebook" className='a'>
              <p className='p'>Facebook</p>
            </a>
            <a href="/Instagram" className='a'>
              <p className='p'>Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;

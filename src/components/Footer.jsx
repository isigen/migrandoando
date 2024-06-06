import React from 'react'
import "./footer.css";




function Footer() {
  return (
    <div>
      <div>
    <footer class="align-items">
        <div class="container-footer">
            <div class="row">
                <div class="footer-col">
                    <img class="logo-footer" src="imges/logo blanco.png" />
                </div>
                <div class="footer-col">
                    <h4>DigitAll Connect</h4>
                    <a href="#"></a>
                    <ul>
                        <li><a href="pagina-principal.html">Inicio </a></li>
                        <li><a href="\quienes somos\sobre-nosotros.html">Sobre Nosotros</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    {/* <!--Bootstrap JS--> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
        </div>
    </div>
  )
}

export default Footer

import React from 'react';
import '../Footer.css';  // Asegúrate de importar el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Enlaces de navegación */}
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/sobre-nosotros">Sobre Nosotros</a>
          <a href="/contacto">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          {/* Instagram */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>

          {/* Correo Electrónico */}
          <a href="mailto:info@tusitio.com">
            <i className="fas fa-envelope"></i>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

        {/* Derechos de autor */}
        <div className="footer-copy">
          <p>&copy; 2025 Escuela De Oficios Villa Constitución.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

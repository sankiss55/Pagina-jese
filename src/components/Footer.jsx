import Logo from './../assets/img/Logo.jpg';
import TargetFooter from './ui/TargetFooter';
import { Link } from 'react-router-dom';
import './../styles/Footer.css';
import Ramita1 from './../assets/img/ramita1.jpg';
import Ramita2 from './../assets/img/ramita2.jpg';
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return(
    <footer  data-aos="fade-up"
     data-aos-duration="2000">
      <img src={Ramita1} className='ramitas' alt="ramita" />
      <img src={Ramita2} className='ramitas' alt="ramita" />
      
      <div >
        
          <img src={Logo} alt="logo" width={100} height={100} />
          <TargetFooter 
            title="Información de contacto"
            inicio={<Link to='/inicio'>Inicio</Link>}
            productos={<Link to='/productos'>Productos</Link>}
            contacto={<Link to='/contacto'>Contacto</Link>}
          />
        <TargetFooter 
          title="Síguenos"
          instagram={
            <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
              <FaInstagram size={24}  /> Instagram
            </a>
          }
          whatsapp={
            <a href="https://wa.me/15551234567" target='_blank' rel="noopener noreferrer">
              <FaWhatsapp size={24} /> WhatsApp
            </a>
          }
          facebook={
            <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
              <FaFacebook size={24} /> Facebook
            </a>
          }
        />
        <TargetFooter 
          title="Otros medios"
          correo={
            <a href="mailto:correo@ejemplo.com">
              <FaEnvelope size={24} /> Correo
            </a>
          }
          ubicacion={
            <a href="https://goo.gl/maps/..." target='_blank' rel="noopener noreferrer">
              <FaMapMarkerAlt size={24} /> Ubicación
            </a>
          }
        />
      </div>
      <div >
        <h3>Gracias por apoyar la cultura local</h3>
        <p>Diseñada por KISSAN</p>
        <p>© 2025 Miel Pura Terecita. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

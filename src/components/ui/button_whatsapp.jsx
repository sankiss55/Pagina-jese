import { FaWhatsapp } from "react-icons/fa";
import 'animate.css';
const Button_whatsapp = () => {
  return (
    <a
      href="https://wa.me/5491136546789"
      target="_blank"
      rel="noopener noreferrer"
      className="btnButton_wastapp"
    >
      <FaWhatsapp size={80} color="green" />
    </a>
  );
};

export default Button_whatsapp;

import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <img
            src={logo} 
            alt="Logo Invitarly"
            className="w-36"
          />
        </div>
        <nav className="flex flex-col md:flex-row items-center">
          <a
            href="https://invitarly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 my-1 md:my-0 text-white hover:text-gray-400 transition-colors duration-300"
          >
            Ir a Invitarly
          </a>
        </nav>

        <div className="flex items-center mt-6 md:mt-0">
          <a
            href="mailto:invitarly@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-gray-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/invitarly"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-gray-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/542612768670?text=%C2%A1Hola!%20Tengo%20una%20duda%20sobre%20las%20invitaciones"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl hover:text-gray-400 transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Invitarly. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
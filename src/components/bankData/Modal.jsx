import { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";


export const Modal = ({claseBoton, claseBotonModal, claseModal, borderModal, alias, banco, nombre}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className={`${claseBoton}`} data-aos= 'fade-up'
        onClick={() => setIsOpen(true)}
      >
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div className={`fixed inset-0 ${claseModal} bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50`}>
        <div className={`bg-white p-5 rounded-lg flex flex-col justify-center items-center border-3 mx-2 ${borderModal}`}>
          <div className="flex flex-col justify-center text-center space-y-7 text-gray-900">
            <h2 className="text-center font-bold text-2xl">Datos Bancarios</h2>
            <div className="space-y-3">
              <p className="text-md">
                <span className="font-semibold">Nombre del titular:</span>{" "}
                {nombre}
              </p>
              <p className="text-md flex items-center justify-center gap-x-1">
                <span className="font-semibold">Alias:</span> {alias}
                <button
                  className="ml-3 "
                  onClick={() => copiarTexto(alias)}
                >
                  <IoCopyOutline className="text-golden"/>
                </button>
              </p>
              <p className="font-semibold text-md">{banco}</p>
            </div>
            <button className={` py-4 rounded-lg text-white font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${claseBotonModal}`} onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};
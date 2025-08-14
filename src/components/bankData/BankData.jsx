import { Modal } from './Modal.jsx'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiIconoGift from './Icon.jsx';


const DatosBancarios = ({texto, claseContenedor, claseBoton, borderModal, textColor, textSize, cbu, alias, banco, nombre, claseBotonModal, claseModal}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
        className="relative py-16 flex-col items-center justify-center text-center p-4 
bg-[radial-gradient(70%_70%_at_50%_30%,#0d3b8e_0%,#071a3a_60%,#050d20_100%)] overflow-hidden"
      >
        <div
          className="absolute -top-10 -left-24 w-[60vw] h-[60vw] 
  bg-[conic-gradient(from_220deg,#4aa3ff33,#9cc9ff00_70%)] 
  blur-2xl opacity-70"
        ></div>
        <div
          className="absolute top-1/3 -right-32 w-[55vw] h-[55vw] 
  bg-[conic-gradient(from_120deg,#6fb4ff33,#9cc9ff00_70%)] 
  blur-2xl opacity-60"
        ></div>
    <div className={`flex flex-col justify-center items-center gap-y-5 ${claseContenedor}`} >
      <div data-aos= 'fade-up'>
        <MiIconoGift/>
      </div>
        <div className={`flex flex-col items-center justify-center`}>
          <p className={`text-center px-5 md:px-0 ${textSize}`} data-aos= 'fade-up'>{texto}</p>
          <Modal claseBoton={claseBoton} claseBotonModal={claseBotonModal} claseModal={claseModal} borderModal={borderModal} textColor={textColor} cbu={cbu} alias={alias} banco={banco} nombre={nombre}/>
        </div>
    </div>
    </div>
  )
}

export default DatosBancarios
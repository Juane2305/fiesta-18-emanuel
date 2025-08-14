import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CiLocationOn } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";


const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 
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

        <div data-aos="fade-in" className="z-10 flex flex-col gap-y-4">
          <p className="text-white text-xl uppercase font-bold">Estás invitado a la</p>
          <h1
            className="text-6xl md:text-8xl font-extrabold text-[#dce5f0] 
    drop-shadow-[0_0_12px_rgba(80,170,255,0.8)]
    [text-shadow:0_0_10px_#3ba3ff,0_0_20px_#3ba3ff,0_0_40px_#3ba3ff]"
          >
            MAXI FEST
          </h1>
        </div>
        <div className="absolute bottom-30 left-1/2 w-full transform -translate-x-1/2">
            <p className="text-white text-lg flex items-center justify-center gap-2 italic" data-aos="fade-in">
              <CiLocationOn className="text-2xl" />
              Luna Eventos Mendoza
            </p>
          <p className="text-white text-lg pt-3 flex items-center justify-center gap-2 italic" data-aos="fade-in">
            <IoTodayOutline className="text-2xl"/>
            8 de Noviembre de 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

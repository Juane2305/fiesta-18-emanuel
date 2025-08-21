import DatosBancarios from "../bankData/BankData";
import GoogleCalendarButton from "../calendar/GoogleCalendarButton";
import Confirmation from "../confirmation/Confirmation";
import Countdown from "../countdown/Countdown";
import DressCode from "../dressCode/DressCode";
import Hero from "../hero/Hero";
import Places from "../places/Places";
import cancion from "../../assets/cancion.MP3";
import Footer from "../footer/Footer";
import Phrase from "../phrase/Phrase";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";
import MusicScreen from "../MusicScreen";

const Invitation = () => {
  return (
    <div className="overflow-hidden ">
      <div className="absolute right-25 z-50">
        <MusicScreen cancion={cancion} />
      </div>
      <Hero />
      <Phrase />
      <div className=" border-y py-20 border-y-gray-900 font-serif">
        <h2 className="text-3xl md:text-5xl font-normal  text-center text-gray-700 mb-10">
          Te espero para festejar mi cumple
        </h2>
        <div className="w-full">
          <p
            className="text-gray-700 text-lg pt-3 flex items-center justify-center gap-2 italic"
            data-aos="fade-in"
          >
            <IoTodayOutline className="text-2xl" />8 de Noviembre de 2025
          </p>
          <p
            className="text-gray-700 text-lg pt-3 flex items-center justify-center gap-2 italic"
            data-aos="fade-in"
          >
            <CiClock2 className="text-2xl" />
            24:00 hs
          </p>
          <p
            className="text-gray-700 text-lg flex items-center justify-center gap-2 italic pt-3"
            data-aos="fade-in"
          >
            <CiLocationOn className="text-2xl" />
            Luna Eventos Mendoza
          </p>
        </div>
      </div>
      <Countdown
        targetDate={new Date("2025-11-09T00:00:00-03:00")}
        containerClasses={
          "w-full flex flex-col justify-center items-center gap-y-5 bg-primary py-10 font-serif font-light"
        }
      />
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 
bg-[radial-gradient(70%_70%_at_50%_30%,#0d3b8e_0%,#071a3a_60%,#050d20_100%)] overflow-hidden"
      >
        {/* Luz diagonal izquierda */}
        <div
          className="absolute -top-10 -left-24 w-[60vw] h-[60vw] 
  bg-[conic-gradient(from_220deg,#4aa3ff33,#9cc9ff00_70%)] 
  blur-2xl opacity-70"
        ></div>

        {/* Luz diagonal derecha */}
        <div
          className="absolute top-1/3 -right-32 w-[55vw] h-[55vw] 
  bg-[conic-gradient(from_120deg,#6fb4ff33,#9cc9ff00_70%)] 
  blur-2xl opacity-60"
        ></div>
        <Places />
        <div className="bg-primary text-center text-white relative">
          <GoogleCalendarButton
            titleCalendar="Maxi Fest"
            fechaComienzo="20251108T235000"
            fechaFin="20251109T050000"
            salon="Luna Eventos Mendoza"
            imgClass="text-white"
            buttonClass="border-2 py-3 px-6 rounded-full text-gray-800 font-semibold border-golden bg-white hover:text-gray:800 cursor-pointer  py-4 px-6 mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
      <Confirmation
        clase="py-10 bg-gray-100 text-gray-700 font-serif"
        claseButton="border-2 py-3 px-6 rounded-full text-gray-800 font-semibold border-golden bg-white hover:text-gray:800 cursor-pointer"
        linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSeKDd3ScRQb4K-23gSzLIMvGZNUS-ribsm8URz70D0lllmysg/viewform?usp=dialog"
      />

      <Footer />
    </div>
  );
};

export default Invitation;

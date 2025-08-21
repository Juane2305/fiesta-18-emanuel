import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrMapLocation } from "react-icons/gr";

const Places = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
      <section
        className={`relative w-full flex flex-col items-center py-36`}
        data-aos="fade-up"
      >
        <div
          className="max-w-xl mx-auto p-8 flex flex-col items-center font-serif"
          data-aos="fade-up"
        >
          <GrMapLocation className="text-6xl text-gray-200 mb-10" />
          <h2 className="text-3xl sm:text-4xl text-white uppercase tracking-wider mb-4 font-light">
            UBICACIÓN
          </h2>
          <p className="text-base sm:text-lg text-gray-200 font-semibold leading-relaxed text-center">
            Luna Eventos Mendoza <br />
            Carlos
            Calle Washington Lencinas 505
            <br />
            Daremos inicio a la fiesta a las{" "}
            <span className="font-semibold">00:00 hs</span>.
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/9VAUKuYHxPsVDhkKA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-serif border-2 rounded-full text-gray-800 font-semibold border-golden bg-white hover:text-gray:800 cursor-pointer  py-4 px-6 mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Cómo llegar
          </button>
        </a>
      </section>
  );
};

export default Places;

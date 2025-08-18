import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



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

        <div data-aos="fade-in" className="z-10 relative gap-y-4">
          <p className="absolute -top-42 md:-top-56 left-1/2 transform -translate-x-1/2 text-[14rem] md:text-[20rem] text-white opacity-50">18</p>
          <h1
            className="text-6xl md:text-9xl mt-10 font-extrabold text-[#dce5f0] 
    drop-shadow-[0_0_12px_rgba(80,170,255,0.8)]
    [text-shadow:0_0_10px_#3ba3ff,0_0_20px_#3ba3ff,0_0_40px_#3ba3ff] ml-6" data-aos="fade-in" data-aos-delay="200"
          >
            EMANUEL
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;

import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
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
      <div className="gap-5 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl text-white font-black text-center animate-pulse font-cursive filter drop-shadow-[0_0_18px_rgba(255,255,255,0.5)]">
          EMANUEL
        </h1>
        <ClipLoader
        color= 'white'
        loading= {true}
        speedMultiplier={0.5}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    </div>
  );
};

export default Loading;

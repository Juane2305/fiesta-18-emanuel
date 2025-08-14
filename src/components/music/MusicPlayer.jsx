import { useRef, useState, useEffect } from "react";
import { CirclePlay, CirclePause } from 'lucide-react';


const MusicPlayer = ({ cancion, initialPlay = false }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    if (initialPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  }, [initialPlay]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full">
      <audio ref={audioRef} src={cancion} preload="auto" />

      <button onClick={togglePlayPause} type="button">
        {isPlaying ? (
          <CirclePause
            alt="Pause"
            className=" text-golden size-20 ml-3 sm:ml-10 mt-9 animate-custom-bounce w-12 h-12 fixed z-50 bg-white rounded-full"
          />
        ) : (
          <CirclePlay
            alt="Play"
            className=" text-golden size-20 ml-3 sm:ml-10 mt-9 animate-custom-bounce w-12 h-12 fixed z-50 bg-white rounded-full"
          />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
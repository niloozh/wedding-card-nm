import { useEffect, useRef, useState } from "react";

import audioFile from "../../../../assets/styles/music/yar-mobarak-bada.mp3";

const useWeddingAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioInstance = new Audio(audioFile);
    audioRef.current = audioInstance;

    const handleTimeUpdate = () => {
      setCurrentTime(audioInstance.currentTime);
    };
    const handleLoaded = () => {
      setDuration(audioInstance.duration || 0);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audioInstance.addEventListener("timeupdate", handleTimeUpdate);
    audioInstance.addEventListener("loadedmetadata", handleLoaded);
    audioInstance.addEventListener("ended", handleEnded);

    return () => {
      audioInstance.pause();
      audioInstance.removeEventListener("timeupdate", handleTimeUpdate);
      audioInstance.removeEventListener("loadedmetadata", handleLoaded);
      audioInstance.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.error("Audio playback failed:", error);
      });
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      play();
    }
  };

  const seek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const nextTime = (Number(event.target.value) / 100) * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return {
    isPlaying,
    currentTime,
    duration,
    progress,
    play,
    toggle,
    seek,
  };
};

export default useWeddingAudio;

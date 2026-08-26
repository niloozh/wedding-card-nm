import { useEffect, useRef, useState } from "react";

import EnvelopeScene from "./envelope/EnvelopeScene";
import InvitationView from "./invitation/InvitationView";
import MapModal from "./map/MapModal";
import { OPEN_ANIMATION_MS } from "./constants";
import useWeddingAudio from "./hooks/useWeddingAudio";

const Home = ({ guest }) => {
  const openTimerRef = useRef(null);
  const [phase, setPhase] = useState("closed");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    isPlaying,
    currentTime,
    duration,
    progress,
    play,
    toggle,
    seek,
  } = useWeddingAudio();

  const isOpening = phase === "opening";
  const isCardOpened = phase === "open";

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
    };
  }, []);

  const handleOpenEnvelope = () => {
    if (phase !== "closed") return;
    play();
    setPhase("opening");
    openTimerRef.current = setTimeout(() => {
      setPhase("open");
    }, OPEN_ANIMATION_MS);
  };

  return (
    <>
      {!isCardOpened && (
        <EnvelopeScene
          guest={guest}
          isOpening={isOpening}
          onOpen={handleOpenEnvelope}
        />
      )}

      {isCardOpened && (
        <InvitationView
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          progress={progress}
          onToggleAudio={toggle}
          onSeek={seek}
          onOpenMap={() => setIsModalOpen(true)}
        />
      )}

      {isModalOpen && <MapModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Home;

import { useEffect, useRef, useState } from "react";

import EnvelopeScene from "../Home/envelope/EnvelopeScene";
import AltInvitationView from "./invitation/AltInvitationView";
import { OPEN_ANIMATION_MS } from "../Home/constants";
import useWeddingAudio from "../Home/hooks/useWeddingAudio";

const HomeAlt = ({ guestSide = "m" }) => {
  const openTimerRef = useRef(null);
  const [phase, setPhase] = useState("closed");

  const { isPlaying, play, toggle } = useWeddingAudio();

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
        <EnvelopeScene isOpening={isOpening} onOpen={handleOpenEnvelope} />
      )}

      {isCardOpened && (
        <AltInvitationView
          guestSide={guestSide}
          isPlaying={isPlaying}
          onToggleAudio={toggle}
        />
      )}
    </>
  );
};

export default HomeAlt;

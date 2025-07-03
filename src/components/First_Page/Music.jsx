import React, { useRef, useState } from "react";

function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 1000,
      }}
    >
      <audio ref={audioRef} src="/wedding.mp3" loop />
      <button
        onClick={toggleMusic}
        className={
          `btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center music-btn-hover ` +
          (playing ? "music-btn-animate" : "")
        }
        style={{
          width: 56,
          height: 56,
          fontSize: 28,
          border: playing ? "2px solid #d72660" : "2px solid #647dee",
          background: playing
            ? "linear-gradient(135deg,#fae6f7,#ffe4e1)"
            : "linear-gradient(135deg,#e9e7fd,#f7fafc)",
          transition: "all 0.18s",
          outline: "none",
        }}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g>
              <path
                d="M11 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10-2V7.33A2.33 2.33 0 0 0 17.67 5H15.5a.5.5 0 0 0-.5.5v16.13A4.47 4.47 0 0 0 11 20c-2.5 0-4.5 1.57-4.5 3.5S8.5 27 11 27s4.5-1.57 4.5-3.5V8h3.17A.33.33 0 0 1 19 8.33V25a1 1 0 0 0 2 0Z"
                fill="#d72660"
              />
            </g>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M11 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10-2V7.33A2.33 2.33 0 0 0 17.67 5H15.5a.5.5 0 0 0-.5.5v16.13A4.47 4.47 0 0 0 11 20c-2.5 0-4.5 1.57-4.5 3.5S8.5 27 11 27s4.5-1.57 4.5-3.5V8h3.17A.33.33 0 0 1 19 8.33V25a1 1 0 0 0 2 0Z"
              fill="#647dee"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Music;

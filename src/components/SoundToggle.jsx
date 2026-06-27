import { useEffect, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

function SoundToggle() {
  const [enabled, setEnabled] = useState(() => localStorage.getItem("quiznova-sound") !== "false");

  useEffect(() => {
    localStorage.setItem("quiznova-sound", String(enabled));
  }, [enabled]);

  return (
    <button type="button" className="icon-btn" onClick={() => setEnabled((prev) => !prev)}>
      {enabled ? <FiVolume2 /> : <FiVolumeX />}
    </button>
  );
}

export default SoundToggle;

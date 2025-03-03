import React from 'react';

function SoundButton({ sound, handleClick, isActive }) {
  return (
    <button
      className={`sound-button ${isActive ? 'active' : ''}`}
      onClick={() => handleClick(sound)}>
      {sound.name}
    </button>
  );
}

export default SoundButton;
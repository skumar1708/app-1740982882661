import React, { useState, useEffect } from 'react';
import SoundButton from '../components/SoundButton';

function SoundBoard() {
  const [sounds, setSounds] = useState([
    { name: 'Sound 1', src: '/sounds/sound1.mp3' },
    { name: 'Sound 2', src: '/sounds/sound2.mp3' }
  ]);
  const [activeSound, setActiveSound] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const sound = sounds.find(s => s.name.toLowerCase() === event.key.toLowerCase());
      if (sound) {
        handleSoundClick(sound);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sounds]);

  const handleSoundClick = (sound) => {
    const audio = new Audio(sound.src);
    audio.play();
    setActiveSound(sound.name);
    setTimeout(() => setActiveSound(null), 300);
  };

  return (
    <div className="sound-board">
      {sounds.map(sound => (
        <SoundButton
          key={sound.name}
          sound={sound}
          handleClick={handleSoundClick}
          isActive={activeSound === sound.name}
        />
      ))}
    </div>
  );
}

export default SoundBoard;
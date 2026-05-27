import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type SoundContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true); // Default muted to comply with autoplay policies, or maybe false if user interacts
  const audioCtx = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Only initialize on first interaction or mount but kept silent.
    // Delay initialization until first sound is played.
  }, []);

  const getAudioContext = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.current.state === 'suspended') {
      audioCtx.current.resume();
    }
    return audioCtx.current;
  };

  const playTone = (frequency: number, type: OscillatorType, duration: number, vol: number) => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

      gainNode.gain.setValueAtTime(vol, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      console.error(e);
    }
  };

  const playHover = () => {
    playTone(300, 'sine', 0.1, 0.05);
  };

  const playClick = () => {
    playTone(600, 'sine', 0.15, 0.1);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      // playing a small sound to confirm un-mute
      setTimeout(() => {
        try {
          const ctx = getAudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.value = 800;
          gain.gain.value = 0.1;
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        } catch (e) {}
      }, 50);
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}

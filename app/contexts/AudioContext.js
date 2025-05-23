// contexts/AudioContext.js
import { Audio } from "expo-av";
import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const streamUrl = "https://stream-175.zeno.fm/le9vbqo47hotv";

  const playStream = async () => {
    setIsLoading(true);
    try {
      if (soundRef.current) await soundRef.current.unloadAsync();

      const { sound } = await Audio.Sound.createAsync(
        { uri: streamUrl },
        { shouldPlay: true }
      );
      soundRef.current = sound;
      setIsPlaying(true);
    } catch (error) {
      console.log("Error loading stream:", error);
    }
    setIsLoading(false);
  };

  const stopStream = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      setIsPlaying(false);
    } catch (error) {
      console.log("Error stopping stream:", error);
    }
  };

  return (
    <AudioContext.Provider
      value={{ isPlaying, isLoading, playStream, stopStream }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);

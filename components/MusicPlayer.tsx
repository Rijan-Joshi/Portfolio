import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Music, SkipForward, SkipBack } from "lucide-react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

const TRACKS = [
  {
    title: "When we feel young",
    src: "/music/When_we_feel_young.mp3",
  },
  {
    title: "Three Little Birds",
    src: "/music/3_little_birds.mp3",
  },
  {
    title: "ObLaDiObLaDa",
    src: "/music/ObLaDiObLaDa.mp3",
  },
  {
    title: "Deurali ma batas chalyo",
    src: "/music/Deurali_ma_batas_chalyo.mp3",
  },
  {
    title: "No Sunshine",
    src: "/music/No_Sunshine.mp3",
  },
  {
    title: "Resham Phiriri",
    src: "/music/Resham_Phiriri.mp3",
  },
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = TRACKS[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  // Handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Logic to handle playing when track changes
    if (isPlaying) {
      // Force load to cancel previous stream and start new one
      audio.load();

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play policy or interrupted load
          if (error.name !== "AbortError") {
            console.log("Playback prevented:", error);
            setIsPlaying(false);
          }
        });
      }
    }
  }, [currentTrackIndex]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Play failed:", error);
        setIsPlaying(false);
      }
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  const handleEnded = () => {
    nextTrack();
  };

  const handleError = () => {
    console.warn("Audio source failed to load, skipping...");
    setIsPlaying(false);
  };

  return (
    <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-4 group shadow-sm hover:shadow-md transition-all duration-300">
      {/* Top Row: Visual & Info */}
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
          {/* Spinning Disc Background */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
          />

          {/* Icon / Visualizer */}
          <div className="relative z-10 flex items-center justify-center gap-0.5 h-full w-full">
            {!isPlaying ? (
              <Music size={16} className="text-neutral-400" />
            ) : (
              <>
                <motion.div
                  animate={{ height: [4, 12, 4] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="w-0.5 bg-primary dark:bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ height: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 0.4 }}
                  className="w-0.5 bg-primary dark:bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ height: [4, 10, 4] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="w-0.5 bg-primary dark:bg-blue-400 rounded-full"
                />
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider truncate">
            Focus Mode
          </span>
          <motion.span
            key={currentTrack.title}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold text-neutral-900 dark:text-white truncate"
          >
            {currentTrack.title}
          </motion.span>
        </div>
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3">
        <Tooltip content="Previous Track" position="top">
          <button
            onClick={prevTrack}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <SkipBack size={16} />
          </button>
        </Tooltip>

        <Tooltip content={isPlaying ? "Pause" : "Play"} position="top">
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:scale-105 transition-transform shadow-md"
          >
            {isPlaying ? (
              <Pause size={16} fill="currentColor" />
            ) : (
              <Play size={16} fill="currentColor" className="ml-0.5" />
            )}
          </button>
        </Tooltip>

        <Tooltip content="Next Track" position="top">
          <button
            onClick={nextTrack}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <SkipForward size={16} />
          </button>
        </Tooltip>
      </div>

      <audio
        ref={audioRef}
        key={currentTrack.src}
        src={currentTrack.src}
        onEnded={handleEnded}
        onError={handleError}
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;

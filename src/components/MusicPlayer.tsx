"use client";

import { Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  search?: string;
};

export default function MusicPlayer({ search = "" }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const keyword = search.trim().toLowerCase();
  const searchableText = [
    "music",
    "player",
    "song",
    "ramelia x angel's love",
    "kaisar al moreno",
    "audio",
    "track",
  ].join(" ").toLowerCase();

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = volume;

    return () => {
      audio.pause();
    };
  }, [volume]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const restartTrack = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = 0;
    setCurrentTime(0);
  };

  const updateProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const nextTime = Number(event.target.value);

    if (!audio) {
      return;
    }

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  if (keyword && !searchableText.includes(keyword)) {
    return null;
  }

  return (
    <section className="border-y border-[#282828] bg-[#121212] px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        <div className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-md bg-sky-500 sm:flex">
          <Image
            src="/stiker 1.png"
            alt="Cover lagu RAMELIA X ANGEL'S LOVE"
            fill
            sizes="56px"
            className="object-cover"
          />
          <span className="relative z-10 m-auto rounded bg-black/70 px-1 text-xs font-black text-white">
            303
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">RAMELIA X ANGEL'S LOVE</p>
              <p className="truncate text-xs text-[#b3b3b3]">Kaisar Al Moreno</p>
            </div>
            <span className="hidden text-xs tabular-nums text-[#b3b3b3] sm:block">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              aria-label={isPlaying ? "Pause lagu" : "Putar lagu"}
              onClick={togglePlayback}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-sky-500"
            >
              {isPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
            </button>

            <input
              aria-label="Progress lagu"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={updateProgress}
              className="h-1 min-w-0 flex-1 cursor-pointer accent-sky-500"
            />

            <button
              type="button"
              aria-label="Ulangi lagu dari awal"
              onClick={restartTrack}
              className="hidden text-[#b3b3b3] transition hover:text-white sm:block"
            >
              <RotateCcw size={16} />
            </button>

            <Volume2 size={17} className="hidden text-[#b3b3b3] sm:block" />
            <input
              aria-label="Volume lagu"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              className="hidden w-24 cursor-pointer accent-sky-500 sm:block"
            />
          </div>
        </div>

        <audio
          ref={audioRef}
          preload="metadata"
          src="/music/gak-pake-hati.mp3"
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </section>
  );
}

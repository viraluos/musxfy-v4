import Image from "next/image";

import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";
import Skeleton from "@/components/Skeleton";

export default function NowPlayingComponent() {

    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, isPlaying } = usePlayerStore();

    useEffect(() => {

        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play().catch((err) => {
                console.error("Playback error:", err);
            });
        }
        else audioRef.current.pause();

    }, [isPlaying]);

    useEffect(() => {

        if (!audioRef.current || !currentSong) return;
        
            audioRef.current.src = currentSong.song_path;
            audioRef.current.load();
            audioRef.current.play().catch((err) => {
            console.error("Playback error on song change:", err);
        
        });
    
    }, [currentSong]);

    return (
        <section className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black relative">
            <div className="relative mb-8">
                <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center relative z-10 vinyl-spin overflow-hidden">
                    {currentSong?.image ? (
                        <Image
                            className="w-full h-full object-cover"
                            alt={currentSong?.title || "Song name"}
                            src={currentSong?.image}
                            width={300}
                            height={300}
                        />
                    ) : (
                        <Skeleton />
                    )}
                    
                </div>
            </div>

            {/* Song Info */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">{currentSong?.title || "Song name"}</h2>
                <p className="text-gray-400">{currentSong?.author || "Artist name"}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-lg mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>00:00</span>
                    <span>00:00</span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full">
                    <div
                        id="progess-bar"
                        className="bg-pink-500 h-1.5 rounded-full w-0"
                    ></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-6">
                <button className="cursor-pointer p-3 bg-gray-700/50 rounded-full hover:bg-pink-500 active:scale-[0.9] transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    className="cursor-pointer p-4 bg-pink-500 rounded-full hover:bg-pink-600 active:scale-90 transition transform hover:scale-110"
                    id="play-btn"
                >
                    <svg
                        id="play-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.752 11.168l-5.197-3.028A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z"
                        />
                    </svg>

                    <svg
                        id="pause-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19V5m6 14V5"
                        />
                    </svg>
                </button>
                <button className="cursor-pointer p-3 bg-gray-700/50 rounded-full hover:bg-pink-500 active:scale-[0.9] transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}

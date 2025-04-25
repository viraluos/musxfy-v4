import Image from "next/image";

import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";
import Skeleton from "@/components/Skeleton";

import { FaPause, FaPlay } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";

export default function NowPlayingComponent() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, isPlaying, pause, resume, playPrevious, playNext } = usePlayerStore();

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            //document.body.classList.add("playing");
            audioRef.current.play().catch((err) => {
                console.error("Playback error:", err);
            });
        } else{
            //document.body.classList.remove("playing");
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!audioRef.current || !currentSong) return;

        audioRef.current.src = currentSong.song_path;
        audioRef.current.load();
        resume();
    }, [currentSong, resume]);

    return (
        <section className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black relative">
            <div className="relative mb-8">
                <div className="w-96 h-96 bg-gray-700 rounded-xl flex items-center justify-center relative z-10 vinyl-spin overflow-hidden">
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
                <h2 className="text-4xl font-bold">
                    {currentSong?.title || "Choose a song"}
                </h2>
                <p className="text-xl text-gray-400">{currentSong?.author || ""}</p>
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
                        className="bg-amber-500 h-1.5 rounded-full w-0"
                    ></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-6">
                <button className="w-16 h-16 flex justify-center items-center cursor-pointer p-3 bg-gray-700/50 rounded-full hover:bg-amber-500 active:scale-97 transition"
                    onClick={playPrevious}
                >
                    <IoPlaySkipBack size={30} />
                </button>
                <button
                    className="w-20 h-20 flex justify-center items-center cursor-pointer p-4 bg-amber-600 rounded-full active:scale-97 transition transform hover:bg-amber-500"
                    id="play-btn"
                    onClick={() => {
                        if (isPlaying) pause();
                        else resume();
                    }}
                >
                    <FaPlay
                        size={30}
                        className={isPlaying ? "hidden" : "block"}
                    />

                    <FaPause
                        size={30}
                        className={isPlaying ? "block" : "hidden"}
                    />
                </button>
                <button className="w-16 h-16 flex justify-center items-center cursor-pointer p-3 bg-gray-700/50 rounded-full hover:bg-amber-500 active:scale-97 transition"
                    onClick={playNext}
                >
                    <IoPlaySkipForward size={30} />
                </button>
            </div>
            {currentSong && (
                <audio ref={audioRef} src={currentSong.song_path} />
            )}
        </section>
    );
}

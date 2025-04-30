import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { usePlayerStore } from "@/stores/usePlayerStore";
import { Skeleton } from "@mui/material";
import CircularDeco from "@/components/CircularDeco";

import { FaPause, FaPlay } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";

export default function NowPlayingComponent() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, queue, currentIndex, syncState, isPlaying, pause, resume, playPrevious, playNext } = usePlayerStore();

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

        localStorage.setItem("vCurrentSong", JSON.stringify(currentSong));
        localStorage.setItem("vQueue", JSON.stringify(queue));
        localStorage.setItem("vCurrentIndex", currentIndex.toString());

    }, [currentSong]);

    useEffect(() => {

        try{

            const localSong = JSON.parse(localStorage.getItem("vCurrentSong") ?? "{}");
            const localQueue = JSON.parse(localStorage.getItem("vQueue") ?? "[]");
            const localIndex = JSON.parse(localStorage.getItem("vCurrentIndex") ?? "0");

            if(!audioRef.current || !localSong) return;

            audioRef.current.src = localSong.song_path;
            audioRef.current.load();

            syncState({
                previousSong: localSong,
                previousQueue: localQueue,
                previousIndex: localIndex,
            });

        }
        catch(e){ console.error("errore parsing da ls: ", e) }

    }, []);

    const [imageLoading, setImageLoading] = useState(false);

    return (
        <section className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black relative">
            <div className="relative mb-8">
                <div className="w-96 h-96 rounded-xl hover:-translate-y-1 flex items-center transition justify-center relative z-10 overflow-hidden"> {/* vinyl-spin */}
                    {currentSong?.image ? (
                        <Image
                            className={`w-full h-full hover:shadow-xl transition object-cover ${(!imageLoading) ? 'opacity-0 -translate-y-5' : 'opacity-100 -translate-y-0'}`}
                            alt={currentSong?.title || "Song name"}
                            src={currentSong?.image}
                            width={300}
                            height={300}
                            onLoadingComplete={() => setImageLoading(true)}
                        />
                    ) : (
                        <Skeleton
                            sx={{ bgcolor: 'grey.500' }}
                            variant="rounded"
                            animation="wave"
                            width="100%"
                            height="100%"
                        />
                    )}
                </div>
            </div>

            {/* Song Info */}
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold appear top" style={{ "--animation-duration": "300ms" } as React.CSSProperties}>
                    {currentSong?.title || "Choose a song"}
                </h2>
                <p className="text-xl text-gray-400 appear top" style={{ "--animation-duration": "400ms" } as React.CSSProperties}>
                    {currentSong?.author || ""}
                    </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-lg mb-6 appear top" style={{ "--animation-duration": "500ms" } as React.CSSProperties}>
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
            <div className="flex items-center space-x-6 appear top" style={{ "--animation-duration": "600ms" } as React.CSSProperties}>
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

            <CircularDeco />
        </section>
    );
}

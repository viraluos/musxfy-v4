import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { usePlayerStore } from "@/stores/usePlayerStore";
import { Skeleton } from "@mui/material";

import { FaPause, FaPlay } from "react-icons/fa";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";

export default function FooterPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, currentIndex, queue, isPlaying, syncState, pause, resume, playPrevious, playNext } =
        usePlayerStore();

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            //document.body.classList.add("playing");
            audioRef.current.play().catch((err) => {
                console.error("Playback error:", err);
            });
        } else {
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
        <div className='fixed bottom-0 left-0 right-0 bg-gray-900 h-20 border-t border-gray-800 flex items-center px-4'>
            <div className='flex items-center gap-4 w-1/4'>
                {currentSong?.image ? (
                    <Image
                        className={`w-12 h-12 rounded-md hover:-translate-y-1 hover:shadow-xl transition object-cover ${(!imageLoading) ? 'opacity-0' : 'opacity-100'}`}
                        alt={currentSong?.title || "Song name"}
                        src={currentSong?.image}
                        width={48}
                        height={48}
                        onLoadingComplete={() => setImageLoading(true)}
                    />
                ) : (
                    <Skeleton
                        sx={{ bgcolor: 'grey.100' }}
                        variant="rounded"
                        animation="wave"
                        width="3rem"
                        height="3rem"
                        className="rounded-md"
                    />
                )}
                <div className='text-start'>
                    <div className='text-sm font-medium'>
                        {currentSong?.title || "Choose a song"}
                    </div>
                    <div className='text-xs text-gray-400'>
                        {currentSong?.author || ""}
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start gap-2 w-2/4'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center space-x-6'>
                        <button className='cursor-pointer p-2 bg-gray-700/50 rounded-full hover:bg-amber-500 active:scale-97 transition' onClick={playPrevious}>
                            <IoPlaySkipBack size={30} />
                        </button>
                        <button
                            className='cursor-pointer p-3 bg-amber-600 rounded-full hover:bg-amber-500 active:scale-97 transition'
                            id='play-btn'
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
                        <button className='cursor-pointer p-2 bg-gray-700/50 rounded-full hover:bg-amber-500 active:scale-97 transition' onClick={playNext}>
                            <IoPlaySkipForward size={30} />
                        </button>
                    </div>

                    <div className='flex items-center justify-end w-full'>
                        <button className='text-gray-400 hover:text-white mx-2'>
                            <svg
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </button>
                        <div className='h-1 bg-gray-600 rounded-full w-24'>
                            <div className='h-1 bg-amber-500 rounded-full w-3/4'></div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <span className='text-xs text-gray-400 mr-2'>0:00</span>
                    <div className='h-1 bg-gray-600 rounded-full flex-1'>
                        <div className='h-1 bg-green-500 rounded-full w-1/3'></div>
                    </div>
                    <span className='text-xs text-gray-400 ml-2'>3:42</span>
                </div>
            </div>

            <div className='flex items-center justify-end gap-2 w-1/4'>
                <button className='cursor-pointer w-fit p-2 bg-white text-black rounded-full active:scale-[0.9] transition'>
                    Other
                </button>
                <button className='cursor-pointer w-fit p-2 bg-white text-black rounded-full active:scale-[0.9] transition'>
                    functionalities
                </button>
            </div>
        </div>
    );
}

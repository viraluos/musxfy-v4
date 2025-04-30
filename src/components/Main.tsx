"use client";

import HomePageComponent from "@/components/CentralComponents/HomePage/HomePage";
import DiscoverComponent from "./CentralComponents/Discover/Discover";
import PlaylistsComponent from "./CentralComponents/Playlists/Playlists";
import NowPlayingComponent from "@/components/CentralComponents/NowPlaying/NowPlaying";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";

export default function Main() {

    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, isPlaying, pause, resume, playPrevious, playNext } = usePlayerStore();

    const pathname = usePathname();

    const renderPage = () => {

        switch (pathname) {
            case "/":
                return <HomePageComponent />

            case "/discover":
                return <DiscoverComponent />

            case "/playlists":
                return <PlaylistsComponent />

            case "/nowplaying":
                return <NowPlayingComponent />
        
            default:
                return <div>Error 404: Not found</div>
        }

    };
  
    return(
        <main className="w-2/4 flex flex-grow flex-col lg:flex-row">

            {renderPage()}

            {currentSong && (
                <audio ref={audioRef} src={currentSong.song_path} />
            )}

        </main>
    );
    
};
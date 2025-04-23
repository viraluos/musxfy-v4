"use client";

import { usePathname } from "next/navigation";

import HomePageComponent from "@/components/CentralComponents/HomePage/HomePage";
import DiscoverComponent from "./CentralComponents/Discover/Discover";
import PlaylistsComponent from "./CentralComponents/Playlists/Playlists";
import NowPlayingComponent from "@/components/CentralComponents/NowPlaying/NowPlaying";


export default function Main() {

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
        <main className="flex flex-grow flex-col lg:flex-row">

            {renderPage()}

        </main>
    );
    
};
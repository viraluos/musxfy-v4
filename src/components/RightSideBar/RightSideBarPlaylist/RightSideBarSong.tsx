"use client";

import { SidebarSong } from "@/app/types";
import Image from "next/image";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";

export default function RightSideBarSong({ song, index, path }: { song: SidebarSong, index: number, path: string }) {
    const playSong = usePlayerStore((state) => state.playSong);

    const { currentSong, queue, currentIndex } = usePlayerStore();

    useEffect(() => {

        localStorage.setItem("vCurrentSong", JSON.stringify(currentSong));
        localStorage.setItem("vQueue", JSON.stringify(queue));
        localStorage.setItem("vCurrentIndex", currentIndex.toString());

    }, [currentSong]);

    return (
        <li
            className={`${index == currentIndex ? "bg-gray-700" : ""} flex gap-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer transition`}
            onClick={() => playSong(song, index)}
        >
            <Image
                className="w-14 h-14 rounded-md object-cover"
                alt={song.title}
                src={song.image}
                width={60} height={60}
            />
            <div className={`flex flex-col ${path == "nowplaying" ? "w-full" : "w-64"}`}>
                <span className={`${path == "nowplaying" ? "" : "truncate"} block text-lg font-medium`}>{song.title}</span>
                <span className={`${path == "nowplaying" ? "" : "truncate"} block text-md text-gray-400`}>{song.author}</span>
            </div>
        </li>
    );
}

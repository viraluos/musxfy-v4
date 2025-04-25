import { SidebarSong } from "@/app/types";
import Image from "next/image";
import { usePlayerStore } from "@/stores/usePlayerStore";

export default function LeftSideBarSong({ song, index }: { song: SidebarSong, index: number }) {
    const playSong = usePlayerStore((state) => state.playSong);

    const { currentIndex } = usePlayerStore();

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
            <div className="flex flex-col w-64">
                <span className="block text-lg font-medium truncate">{song.title}</span>
                <span className="block text-md text-gray-400 truncate">{song.author}</span>
            </div>
        </li>
    );
}

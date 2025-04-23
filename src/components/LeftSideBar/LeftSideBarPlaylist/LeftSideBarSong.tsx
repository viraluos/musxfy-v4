import { SidebarSong } from "@/app/types";
import Image from "next/image";

export default function LeftSideBarSong({ song }: { song: SidebarSong }) {
    return (
        <li
            className="flex gap-2 p-2 hover:bg-gray-700/50 rounded cursor-pointer transition"
            id={song.id}
        >
            <Image
                className="w-10 h-10 rounded-md object-cover"
                alt={song.title}
                src={song.image}
                width={40} height={40}
            />
            <div className="flex flex-col w-32">
                <span className="block font-medium truncate">{song.title}</span>
                <span className="block text-xs text-gray-400 truncate">{song.author}</span>
            </div>
        </li>
    );
}

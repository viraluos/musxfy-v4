"use client";

import { usePlayerStore } from "@/stores/usePlayerStore";
// import { useState } from "react";
import LeftSideBarSong from "./RightSideBarSong";
import { SidebarSong, SidebarSongs } from "@/app/types";
import { useEffect } from "react";

export default function LeftSideBarPlaylistClient({ songs }: { songs: SidebarSongs }) {

  const { setQueue } = usePlayerStore();

  useEffect(() => {

    setQueue(songs);
    
}, [setQueue, songs]);

  /* const [search, setSearch] = useState("");

  const filteredSongs = songs.filter((song: SidebarSong) =>
    song.title.toLowerCase().includes(search.toLowerCase()) || 
    song.author.toLowerCase().includes(search.toLowerCase())
  );*/

  return (
    <div className="m-0 lg:mt-4 overflow-y-auto
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
    ">
      {/* <div className="p-2 sticky top-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg">
         <input
          type="text"
          className="w-full p-2 my-4 rounded bg-gray-700"
          placeholder="Enter song name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> 
      </div> */}

      <ul className="flex flex-col gap-2 mb-20" id="playlist-container">
        {songs.map((song: SidebarSong, index: number) => (
          <LeftSideBarSong key={song.id} song={song} index={index} />
        ))}
      </ul>
    </div>
  );
}

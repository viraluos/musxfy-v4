"use client";

import { useState } from "react";
import LeftSideBarSong from "./LeftSideBarSong";
import { SidebarSong } from "@/app/types";

export default function LeftSideBarPlaylistClient({ songs }) {
  const [search, setSearch] = useState("");

  const filteredSongs = songs.filter((song: SidebarSong) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="m-0 lg:mt-8 overflow-y-scroll">
      <div className="p-2 sticky top-0 backdrop-blur-md">
        <h2 className="text-lg font-semibold">Playlist name</h2>
        <input
          type="text"
          className="w-full p-2 my-4 rounded bg-gray-700"
          placeholder="Enter song name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="flex flex-col gap-2" id="playlist-container">
        {filteredSongs.map((song : SidebarSong) => (
          <LeftSideBarSong key={song.id} song={song} />
        ))}
      </ul>
    </div>
  );
}

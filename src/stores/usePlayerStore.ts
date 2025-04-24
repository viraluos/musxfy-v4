import { create } from "zustand";

type SidebarSong = {
    id: string;
    title: string;
    author: string;
    image: string;
    song_path: string;
    duration: string;
}

type PlayerState = {
    currentSong: SidebarSong | null;
    isPlaying: boolean;
    queue: SidebarSong[];
    playSong: (song: SidebarSong) => void;
    pause: () => void;
    resume: () => void;
    setQueue: (songs: SidebarSong[]) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
    currentSong: null,
    isPlaying: false,
    queue: [],
    playSong: (song) => set({ currentSong: song, isPlaying: true }),
    pause: () => set({ isPlaying: false }),
    resume: () => set(() => ({ isPlaying: true })),
    setQueue: (songs) => set({ queue: songs }),
}));
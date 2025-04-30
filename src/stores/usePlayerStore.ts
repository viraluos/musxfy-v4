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
    currentIndex: number,
    isPlaying: boolean;
    queue: SidebarSong[];
    playSong: (song: SidebarSong, index: number) => void;
    pause: () => void;
    resume: () => void;
    setQueue: (songs: SidebarSong[]) => void;
    playPrevious: () => void;
    playNext: () => void;
    syncState: (data: { previousSong: SidebarSong, previousQueue: SidebarSong[], previousIndex: number }) => void;
};

export const usePlayerStore = create<PlayerState>((set, get) => ({
    currentSong: null,
    currentIndex: 0,
    isPlaying: false,
    queue: [],
    playSong: (song, index = 0) => set({ currentSong: song, currentIndex: index, isPlaying: true }),
    pause: () => set({ isPlaying: false }),
    resume: () => set(() => ({ isPlaying: true })),
    setQueue: (songs) => set({ queue: songs }),

    playPrevious: () => {
        const { queue, currentIndex, playSong } = get();
        const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
        playSong(queue[prevIndex], prevIndex);
    },

    playNext: () => {
        const { queue, currentIndex, playSong } = get();
        const nextIndex = (currentIndex + 1) % queue.length;
        playSong(queue[nextIndex], nextIndex);
    },

    syncState: (
        data: {
            previousSong: SidebarSong;
            previousQueue: SidebarSong[];
            previousIndex: number;
        }
    ) => {
        const { previousSong, previousQueue, previousIndex } = data;

        set(() => ({
            currentSong: previousSong,
            queue: previousQueue,
            currentIndex: previousIndex,
        }));
    }

}));
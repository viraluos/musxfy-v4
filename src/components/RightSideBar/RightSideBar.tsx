// import Image from "next/image";
import LeftSideBarPlaylist from "./RightSideBarPlaylist/RightSideBarPlaylist";

export default function RightSideBar() {
    return (
        <aside className="sticky top-0 h-screen flex flex-col w-full lg:w-[40rem] p-6 bg-gradient-to-r lg:bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 z-1">
            {/* 
            <h2 className="text-lg font-bold mb-4">Now Playing</h2>

            <div className="text-sm text-gray-300 space-y-4">
                <Image
                    className="rounded-md"
                    alt="Current song"
                    src="https://placehold.co/208"
                    width={208}
                    height={208}
                />

                

                <div className="flex flex-col gap-4 pb-4 border-b border-gray-700">
                    <p>
                        Album: <span className="text-white">Album Name</span>
                    </p>
                    <p>
                        Year: <span className="text-white">2023</span>
                    </p>
                    <p>
                        Genre: <span className="text-white">Electronic</span>
                    </p>
                </div>
            </div>*/}

            <nav className="border-b border-gray-800 mb-8">
                <ul className="flex gap-4">
                    <li className="text-lg font-bold cursor-pointer pb-4 border-b-2 border-amber-500">
                        Tutte
                    </li>

                    <li className="text-lg font-bold cursor-pointer pb-4 text-gray-400 hover:text-white hover:border-b-2 border-amber-800 transition">
                        Le tue creazioni
                    </li>

                    <li className="text-lg font-bold cursor-pointer pb-4 text-gray-400 hover:text-white hover:border-b-2 border-amber-800 transition">
                        Playlist seguite
                    </li>

                    <li className="text-lg font-bold cursor-pointer pb-4 text-gray-400 hover:text-white hover:border-b-2 border-amber-800 transition">
                        Potrebbero piacerti
                    </li>
                </ul>
            </nav>

            <LeftSideBarPlaylist />
            {/* canzoni consigliate o in coda */}
        </aside>
    );
}

// import Image from "next/image";
import CircularDeco from "../CircularDeco";
import RightSideBarPlaylist from "./RightSideBarPlaylist/RightSideBarPlaylist";

export default function RightSideBar({ path }: { path: string }) {
    return (
        <aside className={`sticky top-0 h-screen flex flex-col w-full ${path == "nowplaying" ? "lg:w-[40rem]" : "lg:w-96"} p-6 bg-gradient-to-r lg:bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 z-10`}>
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

            {/*<nav className="border-b border-gray-800 mb-8">
                <ul className="flex justify-between gap-4">
                    <li className="text-lg cursor-pointer pb-4 border-b-2 border-amber-500">
                        Tutte
                    </li>

                    <li className="text-lg cursor-pointer pb-4 text-gray-400 hover:text-white hover:border-b-2 border-amber-800 transition">
                        Seguite
                    </li>

                    <li className="text-lg cursor-pointer pb-4 text-gray-400 hover:text-white hover:border-b-2 border-amber-800 transition">
                        Potrebbero piacerti
                    </li>
                </ul>
            </nav>*/}

            <RightSideBarPlaylist path={path}/>
            {/* canzoni consigliate o in coda */}
        </aside>
    );
}

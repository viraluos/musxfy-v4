import Image from "next/image";

export default function RightSideBar() {
    return (
        <aside className="hidden lg:flex flex-col w-full lg:w-64 p-6 bg-gradient-to-r lg:bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 z-1">
            <h2 className="text-lg font-bold mb-4">Now Playing</h2>

            <div className="text-sm text-gray-300 space-y-4">
                <Image
                    className="rounded-md"
                    alt="Current song"
                    src="https://placehold.co/208"
                    width={208}
                    height={208}
                />

                {/* to update every time the song changes */}

                <div className="flex flex-col gap-4">
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
                <div className="pt-4 border-t border-gray-700">
                    <h4 className="font-medium mb-2">Lyrics</h4>
                    <p className="text-xs text-gray-400 italic">
                        Sample lyrics would appear here...
                    </p>
                </div>
            </div>
        </aside>
    );
}

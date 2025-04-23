import Image from "next/image";

export default function FooterPlayer() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 h-20 border-t border-gray-800 flex items-center px-4">
            <div className="flex items-center gap-4 w-1/4">
                <Image
                    className="rounded-md hover:-translate-y-0.5 hover:shadow-xl transition"
                    alt="Current song"
                    src="https://placehold.co/48"
                    width={48}
                    height={48}
                />
                <div className="text-start">
                    <div className="text-sm font-medium">Nome canzone</div>
                    <div className="text-xs text-gray-400">Artista</div>
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-2/4">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-6">
                        <button className="cursor-pointer p-2 bg-gray-700/50 rounded-full hover:bg-pink-500 active:scale-[0.9] transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            className="cursor-pointer p-3 bg-pink-500 rounded-full hover:bg-pink-600 active:scale-90 transition transform hover:scale-110"
                            id="play-btn"
                        >
                            <svg
                                id="play-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.752 11.168l-5.197-3.028A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z"
                                />
                            </svg>

                            <svg
                                id="pause-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 hidden"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 19V5m6 14V5"
                                />
                            </svg>
                        </button>
                        <button className="cursor-pointer p-2 bg-gray-700/50 rounded-full hover:bg-pink-500 active:scale-[0.9] transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-end w-full">
                        <button className="text-gray-400 hover:text-white mx-2">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className="h-1 bg-gray-600 rounded-full w-24">
                            <div className="h-1 bg-amber-500 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center">
                    <span className="text-xs text-gray-400 mr-2">0:00</span>
                    <div className="h-1 bg-gray-600 rounded-full flex-1">
                        <div className="h-1 bg-green-500 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">3:42</span>
                </div>
            </div>

            <div className="flex items-center justify-end gap-2 w-1/4">
                <button className="cursor-pointer w-fit p-2 bg-white text-black rounded-full active:scale-[0.9] transition">Other</button>
                <button className="cursor-pointer w-fit p-2 bg-white text-black rounded-full active:scale-[0.9] transition">functionalities</button>
            </div>
        </div>
    );
}

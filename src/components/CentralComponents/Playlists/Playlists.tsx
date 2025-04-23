export default function PlaylistsComponent() {
    return (
        <section className="flex-1 flex flex-col p-6 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
            {/* Header con titolo e pulsanti */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-2">
                        Le tue playlist
                    </h1>
                    <p className="text-gray-400">
                        Le tue collezioni musicali personali
                    </p>
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-full font-bold text-black mt-4 md:mt-0">
                    Crea playlist
                </button>
            </div>

            {/* Menu di navigazione */}
            <nav className="border-b border-gray-800 mb-8">
                <ul className="flex space-x-6">
                    <li className="pb-4 border-b-2 border-amber-500 font-medium">
                        Tutte
                    </li>
                    <li className="pb-4 text-gray-400 hover:text-white transition">
                        Tue creazioni
                    </li>
                    <li className="pb-4 text-gray-400 hover:text-white transition">
                        Salvate
                    </li>
                    <li className="pb-4 text-gray-400 hover:text-white transition">
                        Seguite
                    </li>
                </ul>
            </nav>

            {/* Playlist create dall'utente */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Le tue creazioni</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {/* Card playlist personale */}
                    <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg hover:bg-gray-700 hover:-translate-y-1 transition cursor-pointer group">
                        <div className="relative mb-4 aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-300 rounded-md flex items-center justify-center group-hover:brightness-75 transition">
                                <svg
                                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="font-medium truncate">
                            I miei preferiti
                        </h3>
                        <p className="text-sm text-gray-400">12 brani</p>
                    </div>

                    {/* Card "Crea nuova playlist" */}
                    <div className="hover:-translate-y-1 bg-gray-800 bg-opacity-20 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer border-2 border-dashed border-gray-600 flex flex-col items-center justify-center aspect-square">
                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="font-medium text-center">
                            Nuova playlist
                        </h3>
                    </div>

                    {/* Altre playlist personali... */}
                </div>
            </div>

            {/* Playlist seguite/salvate */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Playlist seguite</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {/* Card playlist seguita */}
                    <div className="hover:-translate-y-1 bg-gray-800 bg-opacity-40 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer group">
                        <div className="relative mb-4 aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-blue-400 rounded-md flex items-center justify-center group-hover:brightness-75 transition">
                                <svg
                                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1">
                                <svg
                                    className="w-4 h-4 text-amber-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="font-medium truncate">
                            Hit estive 2023
                        </h3>
                        <p className="text-sm text-gray-400">
                            Di Viraluos • 45 brani
                        </p>
                    </div>

                    {/* Altre playlist seguite... */}
                </div>
            </div>

            {/* Playlist suggerite */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Potrebbero piacerti</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {/* Card playlist suggerita */}
                    <div className="hover:-translate-y-1 bg-gray-800 bg-opacity-40 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer group">
                        <div className="relative mb-4 aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-yellow-400 rounded-md flex items-center justify-center group-hover:brightness-75 transition">
                                <svg
                                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 rounded-full px-2 py-1 flex items-center">
                                <svg
                                    className="w-3 h-3 mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-xs">100k+</span>
                            </div>
                        </div>
                        <h3 className="font-medium truncate">Rock classico</h3>
                        <p className="text-sm text-gray-400">
                            Di Viraluos • 120 brani
                        </p>
                    </div>

                    {/* Altre playlist suggerite... */}
                </div>
            </div>

            {/* Player fisso in basso */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 h-20 border-t border-gray-800 flex items-center px-4">
                {/* Contenuto del player... (come nella sezione precedente) */}
            </div>
        </section>
    );
}

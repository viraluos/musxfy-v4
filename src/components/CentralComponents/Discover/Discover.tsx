import Image from "next/image";

export default function DiscoverComponent() {
    return (
        <section className="flex-1 flex flex-col items-start p-8 relative bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Barra di ricerca */}
            <div className="relative mb-8 w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 rounded-full bg-gray-800 border border-transparent focus:border-gray-600 focus:outline-none focus:bg-gray-700 text-white placeholder-gray-400 transition"
                    placeholder="Cosa vuoi ascoltare?"
                />
            </div>

            {/* Categorie di ricerca */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Sfoglia tutto</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {/* Card categoria */}
                    <div className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition cursor-pointer relative overflow-hidden group">
                        <div className="bg-purple-500 w-24 h-24 rounded-full absolute -right-5 -bottom-5 transform rotate-45 group-hover:scale-120 transition"></div>
                        <h3 className="font-bold text-lg relative z-10">
                            Podcast
                        </h3>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition cursor-pointer relative overflow-hidden group">
                        <div className="bg-pink-500 w-24 h-24 rounded-full absolute -right-5 -bottom-5 group-hover:scale-120 transition"></div>
                        <h3 className="font-bold text-lg relative z-10">
                            Live
                        </h3>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition cursor-pointer relative overflow-hidden group">
                        <div className="bg-blue-500 w-24 h-24 rounded-full absolute -right-5 -bottom-5 transform rotate-12 group-hover:scale-120 transition"></div>
                        <h3 className="font-bold text-lg relative z-10">
                            Nuove uscite
                        </h3>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition cursor-pointer relative overflow-hidden group">
                        <div className="bg-yellow-500 w-24 h-24 rounded-full absolute -right-5 -bottom-5 transform rotate-30 group-hover:scale-120 transition"></div>
                        <h3 className="font-bold text-lg relative z-10">
                            Generi
                        </h3>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 transition cursor-pointer relative overflow-hidden group">
                        <div className="bg-red-500 w-24 h-24 rounded-full absolute -right-5 -bottom-5 transform rotate-20 group-hover:scale-120 transition"></div>
                        <h3 className="font-bold text-lg relative z-10">
                            Classifiche
                        </h3>
                    </div>
                </div>
            </div>

            {/* Risultati di ricerca (esempio) */}
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-6">Risultati</h2>

                {/* Tabella brani */}
                <div className="w-full bg-opacity-40 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 mb-1 bg-gray-800 text-gray-400 text-sm font-medium">
                        <div className="col-span-1">#</div>
                        <div className="col-span-5 2xl:col-span-3">TITOLO</div>
                        <div className="col-span-3">ARTISTA</div>
                        <div className="hidden 2xl:block 2xl:col-span-3">PRODUZIONE</div>
                        <div className="col-span-3 text-right 2xl:text-left 2xl:col-span-1">DURATA</div>
                        <div className="col-span-1 text-right hidden 2xl:block">RIPETIZIONI</div>
                    </div>

                    {/* Riga brano */}
                    <div className="grid grid-cols-12 gap-4 p-4 items-center bg-gray-800 hover:bg-gray-700 transition group">
                        <div className="col-span-1 text-gray-400 group-hover:text-amber-500">
                            1
                        </div>
                        <div className="col-span-5 2xl:col-span-3 flex items-center">
                            <Image
                                className="rounded-sm mr-4"
                                alt="Current song"
                                src="https://placehold.co/40"
                                width={40}
                                height={40}
                            />
                            <div>
                                <div className="font-medium text-white">
                                    Nome Canzone
                                </div>
                                <div className="text-sm text-gray-400">
                                    Album
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">Nome Artista</div>
                        <div className="hidden 2xl:block 2xl:col-span-3">Nome producer</div>
                        <div className="col-span-3 text-right 2xl:text-left 2xl:col-span-1 text-gray-400">3:42</div>
                        <div className="col-span-1 text-right text-gray-400 hidden 2xl:block">
                            192
                        </div>
                    </div>

                    {/* Altre righe... */}
                </div>

                {/* Sezione artisti */}
                <h3 className="text-xl font-bold mt-8 mb-4">Artisti</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <div className="text-center">
                        <div className="bg-gray-700 rounded-full aspect-square mb-3 overflow-hidden group">
                            <div className="w-full h-full bg-purple-500 group-hover:scale-105 transition"></div>
                        </div>
                        <div className="font-medium">Nome Artista</div>
                        <div className="text-sm text-gray-400">Artista</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-700 rounded-full aspect-square mb-3 overflow-hidden group">
                            <div className="w-full h-full bg-pink-500 group-hover:scale-105 transition"></div>
                        </div>
                        <div className="font-medium">Nome Artista</div>
                        <div className="text-sm text-gray-400">Artista</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-700 rounded-full aspect-square mb-3 overflow-hidden group">
                            <div className="w-full h-full bg-blue-500 group-hover:scale-105 transition"></div>
                        </div>
                        <div className="font-medium">Nome Artista</div>
                        <div className="text-sm text-gray-400">Artista</div>
                    </div>
                    {/* Altri artisti... */}
                </div>
            </div>
        </section>
    );
}

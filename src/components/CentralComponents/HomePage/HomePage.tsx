export default function HomePageComponent() {
    const now = new Date(new Date());
    const todays_hours = now.getHours();

    return (
        <section className="flex-1 flex flex-col items-start p-8 relative bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
            {/* Navbar superiore */}
            <div className="w-full flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                    <button className="cursor-pointer bg-white text-black p-2 rounded-full text-sm font-bold hover:scale-110 active:scale-90 transition">
                        Registrati
                    </button>
                    <button className="cursor-pointer bg-white text-black p-2 rounded-full text-sm font-bold hover:scale-110 active:scale-90 transition">
                        Accedi
                    </button>
                </div>
            </div>

            {/* Contenuto principale */}
            <div className="w-full max-w-6xl z-1">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-left">
                    {
                        todays_hours >= 18
                        ? "Buonasera"
                        : todays_hours >= 13
                          ? "Buon pomeriggio"
                          : todays_hours >= 7
                            ? "Buongiorno"
                            : "Buonanotte"
                    }
                    {/* ", utente registrato." lo farò */}
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    
                    <div className="bg-gray-800 bg-opacity-40 p-5 rounded-lg hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
                        <div className="bg-amber-500 aspect-square mb-4 rounded-md shadow-lg"></div>
                        <h3 className="font-bold text-lg">
                            Le tue hit preferite
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Le canzoni che ami di più
                        </p>
                    </div>

                    <div className="bg-gray-800 bg-opacity-40 p-5 rounded-lg hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
                        <div className="bg-purple-500 aspect-square mb-4 rounded-md shadow-lg"></div>
                        <h3 className="font-bold text-lg">Nuove uscite</h3>
                        <p className="text-gray-400 text-sm">
                            Le novità musicali per te
                        </p>
                    </div>

                    <div className="bg-gray-800 bg-opacity-40 p-5 rounded-lg hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
                        <div className="bg-blue-500 aspect-square mb-4 rounded-md shadow-lg"></div>
                        <h3 className="font-bold text-lg">Mix quotidiano</h3>
                        <p className="text-gray-400 text-sm">
                            Una selezione personalizzata
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button className="cursor-pointer bg-amber-500 hover:scale-110 active:scale-90 transition px-8 py-3 rounded-full font-bold text-black">
                        Inizia ad ascoltare
                    </button>
                    <button className="cursor-pointer bg-transparent border border-gray-500 hover:scale-110 active:scale-90 transition px-8 py-3 rounded-full font-bold">
                        Esplora playlist
                    </button>
                </div>
                
            </div>

            {/* Decorazione circolare (come Spotify) */}
            <div className="absolute -right-32 -top-32 opacity-10 pointer-events-none -z-0">
                <div className="rounded-full bg-gradient-to-b from-indigo-500 to-pink-500 w-96 h-96"></div>
            </div>
            <div className="absolute -right-64 top-48 opacity-10 pointer-events-none -z-0">
                <div className="rounded-xl -rotate-30 bg-gradient-to-b from-amber-500 to-blue-500 w-96 h-96"></div>
            </div>
        </section>
    );
}

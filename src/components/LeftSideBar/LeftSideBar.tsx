import LeftSideBarLink from "@/components/LeftSideBar/LeftSideBarLink";

export default function LeftSideBar() {
    const links = [
        {
            name: "Home",
            path: "/",
            icon_path:
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        },
        {
            name: "Discover",
            path: "/search",
            icon_path: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
            name: "Playlists",
            path: "/playlists",
            icon_path: "M8 6h13M8 12h13M8 18h13M3 6h0M3 12h0M3 18h0",
        },
        {
            name: "Current Song",
            path: "/nowplaying",
            icon_path:
                "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
        },
    ];

    return (
        <aside className="w-full flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:w-64 p-6 bg-gradient-to-r lg:bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
            <div>
                <h2 className="text-xl font-bold lg:mb-6">Library</h2>

                <ul className="flex items-start gap-2 lg:flex-col lg:space-y-3">
                    {links.map((link) => (
                        <LeftSideBarLink link={link} key={link.path} />
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold">Playlist name</h2> {/* updates when the user changes his playilist */}
                <input
                    type="text"
                    className="w-full p-2 my-4 rounded bg-gray-700"
                    placeholder="Enter song name"
                />

                <ul className="space-y-2" id="playlist-container"></ul> {/* where songs will go */}
            </div>
        </aside>
    );
}

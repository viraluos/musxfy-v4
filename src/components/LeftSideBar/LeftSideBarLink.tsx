export default function LeftSideBarLink({ link }: { link: SidebarLink }) {
    return (
        <li
            key={link.path}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition cursor-pointer flex items-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={link.icon_path}
                />
            </svg>
            <p className="hidden sm:block">{link.name}</p>
        </li>
    );
}

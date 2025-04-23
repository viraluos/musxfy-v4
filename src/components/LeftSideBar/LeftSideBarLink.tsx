"use client";

import type { SidebarLink } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSideBarLink({ link }: { link: SidebarLink }) {
    
    const pathname = usePathname();

    return (
        <li key={link.path}>
            <Link href={link.path} className={`${link.path === pathname ? "text-white bg-gray-600/80" : "text-gray-500"} p-2 hover:bg-gray-700/50 rounded-lg transition cursor-pointer flex items-center`}>
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
            </Link>
        </li>
    );
}

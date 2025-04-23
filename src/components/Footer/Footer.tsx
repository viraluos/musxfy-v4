"use client";

import { usePathname } from "next/navigation";

import FooterPlayer from "@/components/Footer/FooterPlayer/FooterPlayer";

export default function Footer() {
    const pathname = usePathname();

    return pathname === "/nowplaying" ? (

        <footer className="fixed z-20 bottom-0 left-0 right-0 bg-gray-900 h-20 border-t border-gray-800 flex justify-center items-center px-4">
            © 2025 Musxfy. All rights reserved.
        </footer>
    
    ) : (

        <footer className="fixed z-20 bottom-0 left-0 right-0 h-20 p-4 z-2 text-center text-sm text-gray-400 backdrop-blur-sm">
            
            <FooterPlayer />

        </footer>
    
    );
}
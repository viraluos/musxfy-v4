import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import { usePathname } from "next/navigation";

export default function Discover() {

    const pathname = usePathname();

    return (
        <main className="flex flex-grow flex-col lg:flex-row">

            <LeftSideBar />

            <div>{pathname}</div>


            <RightSideBar />

        </main>
    )
    
};

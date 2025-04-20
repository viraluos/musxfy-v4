import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import CenteredPlayer from "@/components/CenteredPlayer/CenteredPlayer";
import RightSideBar from "@/components/RightSideBar/RightSideBar";

export default function Main() {
  
    return(
        <main className="flex flex-grow flex-col lg:flex-row">

            <LeftSideBar />

            <CenteredPlayer />

            <RightSideBar />

        </main>
    );
    
};
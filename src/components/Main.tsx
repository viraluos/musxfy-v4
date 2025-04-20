import LeftSideBar from "@/components/LeftSideBar";
import CenteredPlayer from "@/components/CenteredPlayer";
import RightSideBar from "@/components/RightSideBar";

export default function Main() {
  
    return(
        <main className="flex flex-grow flex-col lg:flex-row">

            <LeftSideBar />

            <CenteredPlayer />

            <RightSideBar />

        </main>
    );
    
};
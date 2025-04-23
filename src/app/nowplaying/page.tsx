import Main from "@/components/Main";
import Footer from "@/components/Footer/Footer";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";

export default function Nowplaying() {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col">
            <div className="flex flex-grow flex-col lg:flex-row">
                <LeftSideBar />

                <Main />

                <RightSideBar />
            </div>

            <Footer />
        </div>
    );
}

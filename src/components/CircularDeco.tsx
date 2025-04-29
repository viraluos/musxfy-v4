export default function CircularDeco(){
    return(
        <div>
                <div>
                    <div className="animate-float-main absolute -right-32 -top-16 opacity-10 pointer-events-none -z-0">
                        <div className="rounded-full bg-gradient-to-b from-indigo-500 to-pink-500 w-96 h-96"></div>
                    </div>

                    <div className="animate-float-alt absolute -right-32 -top-32 opacity-10 pointer-events-none -z-0">
                        <div className="rounded-full bg-gradient-to-b from-indigo-500 to-pink-500 w-96 h-96"></div>
                    </div>
                </div>

                <div>
                    <div className="animate-float-main absolute -right-64 top-40 opacity-10 pointer-events-none -z-0">
                        <div className="rounded-full -rotate-30 bg-gradient-to-b from-amber-500 to-blue-500 w-96 h-96"></div>
                    </div>

                    <div className="animate-float-alt absolute -right-64 top-48 opacity-10 pointer-events-none -z-0">
                        <div className="rounded-full -rotate-30 bg-gradient-to-b from-amber-500 to-blue-500 w-96 h-96"></div>
                    </div>
                </div>

                <div>
                    <div className="animate-float-main absolute -right-72 bottom-32 opacity-10 pointer-events-none -z-0">
                        <div className="rounded-full -rotate-30 bg-gradient-to-b from-orange-500 to-red-500 w-96 h-96"></div>
                    </div>

                    <div className="animate-float-alt absolute -right-72 bottom-20 opacity-10 pointer-events-none -z-0">
                        <div
                            className="rounded-full -rotate-30 bg-gradient-to-b from-orange-500 to-red
                -500 w-96 h-96"
                        ></div>
                    </div>
                </div>
            </div>
    );
}
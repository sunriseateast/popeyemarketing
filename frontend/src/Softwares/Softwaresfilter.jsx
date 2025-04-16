import Lsoftwares from "./Largescreensoftwares/Lsoftwares";
import Ssoftwares from "./Smallscreensoftwares/Ssoftwares";

function Softwaresfilter(){
    return(
        <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
                <div>
                    <div className="hidden md:grid">
                        <Lsoftwares/>
                    </div>
                    <div className="md:hidden">
                        <Ssoftwares/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Softwaresfilter
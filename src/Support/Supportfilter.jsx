import Lsupport from "./Largescreensupport/Lsupport";
import Ssupport from "./Smallscreensupport/Ssupport";

function Supportfilter(){
    return(
        <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
                <div className="hidden md:grid">
                    <Lsupport/>
                </div>
                <div className="md:hidden">
                    <Ssupport/>
                </div>
            </div>
        </div>
    )
}

export default Supportfilter
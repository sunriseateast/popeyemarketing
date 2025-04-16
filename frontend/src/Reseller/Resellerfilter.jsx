import Lreseller from "./Largescreenreseller/Lreseller";
import Sreseller from "./Smallscreenreseller/Sreseller";

function Resellerfilter(){
    return(
        <div className="h-full w-full md:grid content-center justify-center">
             <div className="mx-[20px]">
                <div className="hidden md:grid">
                    <Lreseller/>
                </div>
                <div className="md:hidden">
                    <Sreseller/>
                </div>
            </div>
        </div>
    )
}

export default Resellerfilter
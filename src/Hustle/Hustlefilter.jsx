import Lhustel from "./Largescreenhustle/Lhustle";
import Shustle from "./Smallscreenhustle/Shustle";

function Hustlefilter(){
    return(
        <div>
            <div className="hidden md:grid">
                <Lhustel/>
            </div>
            <div className="md:hidden">
                <Shustle/>
            </div>
        </div>
    )
}

export default Hustlefilter
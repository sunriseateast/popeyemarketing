import Llightweight from "./Largescreenlightweight/Llightweight";
import Slightweight from "./Smallscreenlightweight/Slightweight";

function Lightweightfilter(){
    return(
        <div>
            <div className="hidden md:grid">
                <Llightweight/>
            </div>
            <div className="md:hidden">
                <Slightweight/>
            </div>
        </div>
    )
}

export default Lightweightfilter
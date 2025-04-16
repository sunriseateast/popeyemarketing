import Lfooter from "./Largescreenfooter/Lfooter";
import Sfooter from "./Smallscreenfooter/Sfooter";

function Footerfilter(){
    return(
        <div>
            <div className="hidden md:grid">
                <Lfooter/>
            </div>
            <div className="md:hidden">
                <Sfooter/>
            </div>
        </div>
    )
}

export default Footerfilter
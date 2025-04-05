import Lidea from "./Largescreenidea/lidea"
import Sidea from "./Smallscreenidea/Sidea"

function Ideafilter(){
    return(
        <div>
            <div className="hidden md:grid">
                <Lidea/>
            </div>
            <div className="md:hidden">
                <Sidea/>
            </div>
        </div>
    )
}

export default Ideafilter
import Lquestion from "./Largescreenquestion/Lquestion"
import Squestion from "./Smallscreenquestion/Squestion"

function Questionfilter(){
    return(
        <div>
            <div className="hidden md:grid">
                <Lquestion/>
            </div>
            <div className="md:hidden">
                <Squestion/>
            </div>
        </div>
    )
}

export default Questionfilter
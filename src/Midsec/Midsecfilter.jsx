import Lmidsec from "./Largescreenmidsec/Lmidsec";
import Smidsec from "./Smallscreenmidsec/Smidsec";

function Midsecfilter({open}){

    return(
        <div className="h-full w-full">
            <div className={`md:hidden h-full w-full`}>
                <Smidsec open={open}/>
            </div>
            <div className="hidden md:grid h-full w-full">
                <Lmidsec/>
            </div>
        </div>
    )
}

export default Midsecfilter
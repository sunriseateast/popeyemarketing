import Lmidsec from "./Largescreenmidsec/Lmidsec";

function Midsecfilter(){
    return(
        <div className="h-full w-full">
            <div className="hidden md:grid h-full w-full">
                <Lmidsec/>
            </div>
        </div>
    )
}

export default Midsecfilter
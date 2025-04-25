import Ldemo from "./Largescreendemo/Ldemo";
import Sdemo from "./Smallscreedemo/Sdemo";


function Demofilter(){
    return(
        <div className="h-full w-full md:grid content-center justify-center">
            <div className="mx-[20px]">
                <div className="hidden md:grid">
                    <Ldemo/>
                </div>
                <div className="md:hidden">
                    <Sdemo/>
                </div>
            </div>
        </div>
    )
}

export default Demofilter
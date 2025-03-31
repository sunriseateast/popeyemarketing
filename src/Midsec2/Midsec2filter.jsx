import Lmidsec2 from "./Largescreenmidsec2/Lmidsec2";
import Smidsec2 from "./Smallscreenmidsec2/Smidsec2";

function Midsec2filter(){
    return(
        <div>
            <div className="hidden md:grid">
                <Lmidsec2/>
            </div>
            <div className="md:hidden">
                <Smidsec2/>
            </div>
        </div>
    )
}

export default Midsec2filter